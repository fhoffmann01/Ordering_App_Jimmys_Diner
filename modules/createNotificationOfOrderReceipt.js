export function createNotificationOfOrderReceipt(creditcardHoldersName){
    const orderNotification = document.createElement('p')
    orderNotification.classList.add("order-notification")
    orderNotification.textContent = `Thanks, ${creditcardHoldersName}! Your order is on its way!`
    document.body.appendChild(orderNotification)    
}