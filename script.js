const inputbtn=document.querySelectorAll('.js_func-1');

inputbtn.forEach((el) => {
    el.addEventListener('click',()=>{
        el.style.backgroundColor="white";
        console.log("hi you just cliks")
    })   
});
