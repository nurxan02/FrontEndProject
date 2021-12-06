let addBasket = document.querySelectorAll(".addBasket");

if (localStorage.getItem("basket") == null) {
    localStorage.setItem("basket", JSON.stringify([]));
}

for (let itemBasket of addBasket) {
    itemBasket.onclick = function (e) {
        e.preventDefault();

        let productPrice = Number(this.parentElement.nextElementSibling.querySelector(".productTotalPrice").innerText);
        let productTotalPrice = Number(document.getElementById("productTotalPrice").innerText);

        productTotalPrice += productPrice;
        console.log(productTotalPrice)
        document.getElementById("productTotalPrice").innerText = productTotalPrice;

        let basket = JSON.parse(localStorage.getItem("basket"));
        if (localStorage.getItem("basket") == null) {
            localStorage.setItem("basket", JSON.stringify([]));
        }

        let name = this.parentElement.previousElementSibling.innerText;
        let src = this.parentElement.parentElement.previousElementSibling.firstElementChild.getAttribute("src");
        let data_id = this.parentElement.parentElement.parentElement.getAttribute("data-id");
        let price = this.parentElement.nextElementSibling.querySelector(".productTotalPrice").innerText;
        let existProduct = basket.find(product => product.Id == data_id);

        if (existProduct === undefined) {
            basket.push({
                Id: data_id,
                Name: name,
                Src: src,
                Price: price,
                Count: 1
            })
        }
        else{
            existProduct.Count+=1;
        }

        localStorage.setItem("basket", JSON.stringify(basket));
        CountProductBasket();
    }
}

function CountProductBasket(){
    let basket = JSON.parse(localStorage.getItem("basket"));
    let productCount = document.getElementById("productCount");
    productCount.innerText = basket.reduce((total,i)=>total+i.Count,0);
}

CountProductBasket();

