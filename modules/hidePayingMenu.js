export function hidePayingMenu(){
    const payingMenu = document.getElementById("paying-menu")

    if (payingMenu) {
        console.log(payingMenu)
        payingMenu.classList.add("hidden")
        console.log("Paying-menu hidden")
    } else {
        console.log("paying-menu not found")
    }
}