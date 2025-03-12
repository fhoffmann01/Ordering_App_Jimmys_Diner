export function createPayingMenuEntry(name, id, price) {
    
    const orderedFoodItems = document.querySelector(".ordered-food-items")

    const payingMenuEntry = document.createElement('div')
    payingMenuEntry.className = "paying-menu__entry"
    payingMenuEntry.setAttribute("id", `paying-menu__entry_${id}`)

    const itemName = document.createElement('p')
    itemName.className = "paying-menu__label main-label"
    itemName.textContent = name
    

    const removeButton = document.createElement("button")
    removeButton.className = "paying-menu__remove-btn"
    removeButton.setAttribute("id", `remove-btn__entry_${id}`)
    removeButton.textContent = "Remove"
    

    const payingLabelPrice = document.createElement('p')
    payingLabelPrice.className = 'paying-menu__label price'
    payingLabelPrice.textContent = `$${price}`
    

    payingMenuEntry.appendChild(itemName)
    payingMenuEntry.appendChild(removeButton)
    payingMenuEntry.appendChild(payingLabelPrice)
    orderedFoodItems.appendChild(payingMenuEntry)

    

    //This code creates the following HTML code:
    
    //<div class="ordered-food-items">
    //    <div class="paying-menu__entry">
    //        <p class="paying-menu__label main-label">Pizza</p>
    //        <button class="paying-menu__remove-btn">remove</button>
    //        <p class="paying-menu__label price">$14</p>
    //    </div>
    //</div>
}
