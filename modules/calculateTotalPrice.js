export function calculateTotalPrice(){
    return orderedItemsPriceList.reduce((acc, currentValue) => acc + currentValue, initialValue)
}

