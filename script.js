//Heading Container

const container1z = document.createElement('div')//[fridge]
container1z.className = 'container'

const headingz = document.createElement('h1')//[vegetable]
headingz.innerHTML = 'Cosmetics'  //ui display

container1z.appendChild(headingz)//injecting heading into container
document.body.appendChild(container1z)//injecting container into body


//Creating input box and button

const container2z = document.createElement('div') //creating div [carrybag]
container2z.className = 'container'

const product_typez = document.createElement('input') //creating input [vegetable]

const searchz = document.createElement('button') //creating search button [vegetable]

searchz.innerHTML = 'Search'   //ui display


// putting carrybag into fridge
container2z.appendChild(product_typez) //injecting productype into container 
container2z.appendChild(searchz)    //injecting search into container

document.body.appendChild(container2z)  //injecting container into document


//

const container3z = document.createElement('div') // output container
container3z.className = 'container3'




searchz.addEventListener('click', getProductsz) //function call

async function getProductsz() { //function definition

    let typez = product_typez.value

    container3z.innerHTML = '' // reset output container

    product_typez.value = '' // reset input field

    const responsez = await fetch(`https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${typez}`)

    const dataz = await responsez.json() // converting readable into json

    //await makes sure the current statement is executed completely and javascript stays at that line till it is completed.

    console.log(dataz)

    appendDataz(dataz) // function to append the data to front end

}

function appendDataz(dataz) {

// if (data.length !==0){

    dataz.forEach(item => { //iterating the data array

        const smallboxz = document.createElement('div') // every brand has a div

        smallboxz.className = 'small-container' // refer 4th line


        //creating the elements

        const imagez = document.createElement('img')
        const namez = document.createElement('h2')
        const brandz = document.createElement('h3')
        const pricez = document.createElement('h3')
        const product_linkz = document.createElement('a') //anchor tag
        const descriptionz = document.createElement('p')




        imagez.src = item.image_link

        imagez.alt = 'Image not available currently'

        namez.innerHTML = item.name

        brandz.innerHTML = `Brand : ${item.brand}`

        pricez.innerHTML = `Price : $${item.price}`

        product_linkz.href = item.product_link

        product_linkz.innerHTML = 'Check the Product'

        descriptionz.innerHTML = item.description

        //pushing all the elements into smallbox refer 63

        smallboxz.appendChild(imagez)
        smallboxz.appendChild(namez)
        smallboxz.appendChild(brandz)
        smallboxz.appendChild(pricez)

        smallboxz.appendChild(product_linkz)
        smallboxz.appendChild(descriptionz)




        container3z.appendChild(smallboxz) //putting the smallbox into container 3

    });
// } else {
// const smallbox = document.createElement('div')

// smallbox.className = 'error'

// const error = document.createElement('h1')
// error.innerHTML = 'Sorry there is no information about the entered product.Either we dont have it or you have entered an invalid product.'
// smallbox.appendChild(error)
// container3.appendChild(smallbox)
// }





    document.body.appendChild(container3z) // putting output container into body( fridge)



}

//search.addeventlistener('click',getproducts)