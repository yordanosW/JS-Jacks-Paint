function configureListeners() {
    let images =document.getElementsByTagName('img') // select img elements  
// console.log(images)

     for (var i = 0; i < images.length; i++) {        
        // iterate over images and add mouseover event listeners   
           let selectItems =images[i]
           selectItems.addEventListener("mouseover",addOpacity,false)
           selectItems.addEventListener("mouseout" ,removeOpacity, false);
    } 
}

function addOpacity(event) {
 let imgElement= document.getElementsByTagName("img")
 imgElement.classlist.add("dim")// add appropriate CSS class
//  console.log(imgElement)
    getProductInfo(event.target.id);     
}

function removeOpacity(event) {
    //remove appropriate CSS class
let image=document.getElementsByTagName("img")
    if  (image.classlist="dim")
    {
    image.classlist.remove=("dim")
     }
    let element = document.getElementById('color-price');
        element.textContent = '';
        
    let color = document.getElementById('color-name');
        color.textContent = ''; 
console.log(image)
    // event.preventDefault();    
}

function getProductInfo(paintColor) {
    let price;
    let colorName;  
    
    switch (paintColor) {
        case 'pn1':           
            // set variables for price and color name and invoke a function to update the price     
            price="19.99"
            colorName="lime green"
            updatePrice
            break;           
        case 'pn2':
            // set variables for price and color name and invoke a function to update the price    
           
           price="$11.14" 
           colorName="Medium Brown"
           updatePrice 
           break;            

        case 'pn3':
            // set variables for price and color name and invoke a function to update the price  
           price="$22.99"
           colorName="Royal Blue"
           updatePrice
           break;   
        case 'pn4':
            // set variables for price and color name and invoke a function to update the price  
            price="$4.99"
            colorName="Solid Black"
            updatePrice
             break;   
        case 'pn5':
            // set variables for price and color name and invoke a function to update the price       
            price="$8.22"
           colorName="Solid Cyan"
           updatePrice
            break;   
        case 'pn6':
            // set variables for price and color name and invoke a function to update the price        
            price="$11.99"
            colorName="Solid Purple"
            updatePrice
             break;   
        case 'pn7':
            // set variables for price and color name and invoke a function to update the price 
            price="$13.42"
            colorName="Solid Red"
            updatePrice
             break;   
        case 'pn8':
            // set variables for price and color name and invoke a function to update the price   
            price="$21.98"
           colorName="Solid White"
           updatePrice
           break;   
        case 'pn9':
            // set variables for price and color name and invoke a function to update the price 
            price="$14.99"
           colorName="Solid Yellow"
           updatePrice
           break;   
          default:              
    }

    function updatePrice(colorName, price)
    {       
         let colorPrice = document.getElementById("color-price")// select element with corresponding id
       colorPrice.textContent=price // display price
        
        let color = document.getElementById("color-name")// select element with corresponding id
       color.textContent=colorName//display color name
    }
    
}
