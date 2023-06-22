import {addItem} from "./api.js"

const property = document.querySelector('.property');
const newAddress = document.getElementById('address');
const newRoomType = document.getElementById('rooms');
const newPrice = document.getElementById('price');



const newDescription = document.getElementById('description');


const mainBtn = document.getElementById('mainBtn')

mainBtn.addEventListener('click',async (e)=>{
    e.preventDefault()
            const newProperty = document.createElement('div');
            newProperty.classList.add('top');
            newProperty.id='card';



            var fileInput = document.getElementById('img');
            var file = fileInput.files[0]; // Get the selected file

                var reader = new FileReader();
                reader.onload = function(e) {
                    var img = document.createElement('img');
                    
                    img.src = e.target.result; // Set the src attribute of the img element to the image data URL
                    // newProperty.appendChild(img); // Append the img element to the body or another desired location
                    newProperty.insertBefore(img,newProperty.firstChild)
                };
                reader.readAsDataURL(file)

                
            // createImageElement()
            const newH4 = document.createElement('h4');
            newH4.textContent = newAddress.value;
            newProperty.appendChild(newH4)


            const newP = document.createElement('p');
            newP.textContent = newRoomType.value;
            newProperty.appendChild(newP)


            const newH6 = document.createElement('h6');
            newH6.textContent=newPrice.value;
            newProperty.appendChild(newH6)

            property.appendChild(newProperty)

            
            let house = {
                address:newAddress.value,
                roomtype:newRoomType.value,
                price:newPrice.value
            }

            await addItem(house)





            newAddress.value='';
            newRoomType.value='';
            newPrice.value='';
            newDescription.value='';

            alert('House added sucessfully!');



})




// function createImageElement() {
//     var fileInput = document.getElementById('img');
//     var file = fileInput.files[0];
  

//       var reader = new FileReader();
//       reader.onload = function(e) {
//         var imageSrc = e.target.result;
//         var img = document.createElement('img');
//         img.src = imageSrc;
//         document.newProperty.appendChild(img);
//       };
//       reader.readAsDataURL(file);

//   }
  





