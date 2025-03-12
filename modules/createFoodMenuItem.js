
export function createFoodItem(name, ingredients, priceTag, id){
        
    const section = document.createElement('section')
    section.className = 'food-menu-item'

    const img = document.createElement('img')
    img.className = 'food-menu-item--icon'
    img.src = `img/${name}_icon.png` 
    img.alt = `comic-style image of a ${name}...` 
    
    const container = document.createElement('div')
    container.className = 'food-menu-item-container'
    
    const mainLabel = document.createElement('p')
    mainLabel.className = 'main-label'
    mainLabel.textContent = name
    
    const description = document.createElement('p')
    description.className = 'food-menu-item--description'
    description.textContent = ingredients
    
    const price = document.createElement('p')
    price.className = 'price'
    price.textContent = `$${priceTag}` 

    const button = document.createElement('button')
    button.className = 'add-btn'
    //console.log(`${name}s id \t =>  ${id}`)
    button.setAttribute("id", id)
    button.textContent = '+'

    container.appendChild(mainLabel)
    container.appendChild(description)
    container.appendChild(price)

    section.appendChild(img)
    section.appendChild(container)
    section.appendChild(button)

    return section

    
//  This code creates the following HTML code:

//  <section class="food-menu-item">
//      <img class="food-menu-item--icon" src="img/Pizza_icon.png" alt="comic-style image of a Pizza...">
//      <div class="food-menu-item-container">
//          <p class="main-label">Pizza</p>
//          <p class="food-menu-item--description">pepperoni,mushrom,mozarella</p>
//          <p class="price">$14</p>
//      </div>
//      <button class="add-btn" id="0">+</button>
//  </section>
}