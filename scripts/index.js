let bagItems;
onLoad();

function onLoad() {
    let bagItemsStr = localStorage.getItem('bag-items');
    bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
    displayItemsOnPage();
    displayBagIcon();
}

function addToBag(itemId) {
    bagItems.push(itemId)
    localStorage.setItem('bag-items', JSON.stringify(bagItems));
    displayBagIcon();
}
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-items');
    if (bagItems.length > 0) {
        bagItemCountElement.style.visibility = "visible";
        bagItemCountElement.innerText = bagItems.length;
    }
    else {
        bagItemCountElement.style.visibility = "hidden";
    }
}
function displayItemsOnPage() {
    let itemsContainerElement = document.querySelector('.items-container');
    // console.log(itemsContainerElement);
    if (!itemsContainerElement) {
        return;
    }
    let innerHtml = '';
    items.forEach(item => {
        innerHtml +=
            `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
    <div class="rating">
        ${item.rating.stars} ⭐ | ${item.rating.count} 
    </div>
    <div class="company-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount">(${item.discount_percentage}% OFF)</span>
    </div>
    <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
    })

    itemsContainerElement.innerHTML = innerHtml;
}