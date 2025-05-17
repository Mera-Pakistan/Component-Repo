
const submitBtn = document.querySelector(".submit-btn");

const headingOne = document.querySelector("h1");

function randombgChange(Red , green , blue){

    headingOne.style.background = `rgb(${Red} , ${green} , ${blue})`;
}

submitBtn.addEventListener("click" , () =>{

    r = Math.floor(Math.random() * 256);

    g = Math.floor(Math.random() * 256);

    b = Math.floor(Math.random() * 256);

    randombgChange(r , g , b);

});