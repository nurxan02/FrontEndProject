let products = JSON.parse(localStorage.getItem("basket"));
let table = document.querySelector("table");
let productCount = document.getElementById("productCount");
let main_part_basket = document.getElementById("main_part_basket");
let back_to_home = document.getElementById("back_to_home");


let count = 1;
for (let product of products) {
    if(products.length>=1){
        table.style.visibility = "visible";
    }

    let tdN = document.createElement("td");
    let tdPro = document.createElement("td");
    let tdName = document.createElement("td");
    let tdPrice = document.createElement("td");
    let tdCount = document.createElement("td");
    let tdDelete = document.createElement("td");

    tdN.innerText = count++;
    let img = document.createElement("img");
    img.setAttribute("src", product.Src);
    tdPro.append(img);

    tdName.innerText = product.Name;
    tdPrice.innerText = "$"+ product.Price;
    tdCount.innerText = product.Count;

    let i = document.createElement("i");
    i.className = "fas fa-times";
    tdDelete.append(i);

    i.onclick = function () {
        this.parentElement.parentElement.remove();
        let index = products.indexOf(product);
        products.splice(index,1);
        productCount.innerText-=product.Count;
        localStorage.setItem("basket", JSON.stringify(products));
        if(table.lastElementChild.children.length < 1){
            table.style.visibility = "hidden";
            main_part_basket.style.display = "block";
            back_to_home.style.display = "none";
        }
        CountProductBasket();
    }

    let tr = document.createElement("tr");
    tr.append(tdN, tdPro, tdName, tdPrice, tdCount, tdDelete);
    table.lastElementChild.append(tr);

    if (table.lastElementChild.children.length != 0) {
        main_part_basket.style.display = "none";
        back_to_home.style.display = "block";
    }

    ProductCount();
}

function CountProductBasket() {
    for(let j=0; j<table.lastElementChild.children.length;j++){
        table.lastElementChild.children[j].firstElementChild.innerText = j+1;
    }
}

function ProductCount() {
    let basket = JSON.parse(localStorage.getItem("basket"));
    productCount.innerText = basket.reduce((total,i)=>total+i.Count,0);
}