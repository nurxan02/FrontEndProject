let counteradd = document.querySelector("#counteradd");
let countersub = document.querySelector("#countersub");
let productcount = document.querySelector("#productcount");
counteradd.addEventListener("click", () => {
    productcount.innerText = Number(productcount.innerText) + 1;
})

countersub.addEventListener("click", () => {
    if(Number(productcount.innerText) > 0){
        productcount.innerText = Number(productcount.innerText) - 1;
    }
})