const btnCart=document.querySelector('#cart-icon');
const cart=document.querySelector('.cart');
const btnClose=document.querySelector('#cart-close');


btnCart.addEventListener('click',()=>{
    cart.classList.add('cart-active');
});


btnClose.addEventListener('click',()=>{
    cart.classList.remove('cart-active');
});





document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();
}

 function loadContent(){
    //Remove Food Items from cart

    let btnRemove=document.querySelectorAll('.cart-remove');
    btnRemove.forEach((btn) => {
        btn.addEventListener('click',removeItem);
        
    });

    //product Item change event

    let qtyElements=document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input)=>{
        input.addEventListener('change',changeQty);
    });
 }




//Product cart
let cartBtns=document.querySelectorAll('.add-cart');
cartBtns.forEach((btn)=>{
    btn.addEventListener('click',addCart);
});






 //Remove Item
    function removeItem(){
     if (confirm('Are you sure to remove'))  {
    this.parentElement.remove();
     }
 }



//change quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
}


//add cart
function addCart(){
   let food=this.parentElement;
   let title=food.querySelector('.food-title').innerHTML;
   let price=food.querySelector('.food-price').innerHTML;
   let imgSrc=food.querySelector('.food-icon').src;

// console.log(title,price.imgSrc);
  
   
}