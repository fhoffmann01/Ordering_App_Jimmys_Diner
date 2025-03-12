import { menuArray } from "./data.js"
import { createFoodItem } from "./modules/createFoodMenuItem.js"
import { createPayingMenuEntry } from "./modules/createPayingMenuEntry.js"
import { calculateTotalPrice } from "./modules/calculateTotalPrice.js"
import { hidePayingMenu } from "./modules/hidePayingMenu.js"
import { createNotificationOfOrderReceipt } from "./modules/createNotificationOfOrderReceipt.js";



const modal = document.querySelector(".modal")
const payBtn = document.querySelector(".pay-btn")
const completeOrderBtn = document.querySelector(".complete-order-btn")
const creditcardDataForm = document.querySelector(".creditcard-data")
const foodMenu = document.querySelector(".food-menu")
const foodMenuItem = document.querySelector(".food-menu-item")
const addBtn = document.querySelector(".add-btn");
const payingLabelPrice = document.querySelector(".price")
const payingMenuEntry = document.querySelector(".paying-menu__entry")
const orderedFoodItems = document.querySelector(".ordered-food-items")


let sum = 0

menuArray.forEach((item) => {
    //CreateFoodItem
    const section = createFoodItem(item.name, item.ingredients, item.price, item.id)
    foodMenu.appendChild(section)
})

console.log("children")
console.log(orderedFoodItems.children)
function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)){
            callback(e)
        }
    })
}

addGlobalEventListener("click", ".add-btn", e => { 
    let dataSet = []
    

    //For 0-based, sorted menuArrays
    createPayingMenuEntry(menuArray[e.target.id].name, 
        menuArray[e.target.id].id, 
        menuArray[e.target.id].price)
        
   
    sum += menuArray[e.target.id].price
    console.log(`sum: ${sum}`)
    payingLabelPrice.textContent = `$${sum}`
    console.log(orderedFoodItems.children)
})

    
addGlobalEventListener("click", ".paying-menu__remove-btn", e => { 
    //remove child with spec. ID which has spec. class. 
    //Update: Read first, calculate, re-render
    let totalSum = document.getElementById("total-price-id")
        
    const itemId = e.target.parentElement.id
    const itemIndex = e.target.parentElement.id.slice(-1)
    
    console.log(`sum before subtraction: ${sum}`)

    const itemToRemove = menuArray.find(item => item.id == itemIndex)
    console.log(`itemToRemove:${itemToRemove.price}`)

    if (itemToRemove){
        sum -= itemToRemove.price
        console.log(`sum after subtraction: ${sum}`)
        payingLabelPrice.textContent = `$${sum}`

        document.getElementById(itemId).remove()
    }
})

completeOrderBtn.addEventListener('click', () => {
    if (orderedFoodItems.children.length > 0){
        modal.showModal()
    } else {
        console.log("Empty order list. You cannot check out with an empty cart.")
    }
})
    

creditcardDataForm.addEventListener('submit', (event) => {
    
        event.preventDefault()
        const creditCardData = new FormData(creditcardDataForm)
        //console.log("FormData object 'creditCardData' created...")
        //console.log("Paybutton clicked")

        const creditcardHoldersName = creditCardData.get('creditcard-holder-name')
        console.log(creditcardHoldersName)

        createNotificationOfOrderReceipt(creditcardHoldersName)
        hidePayingMenu()

        modal.close()
    
})