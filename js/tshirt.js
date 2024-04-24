import { addCart } from "./shop.js"
let btn;
const ClothingCollection = document.querySelector(".clothing-collection")
let ImgCloth;
let DescCloth;
let IdCloth;
let pppp = [];
let idShop = [];
console.log(ClothingCollection);
function menuShow() {
  let menuMobile = document.querySelector('.mobile-menu');
  if (menuMobile.classList.contains('open')) {
    menuMobile.classList.remove('open');
    document.querySelector('.icon').src = "./icons/menu.svg";
  } else {
    menuMobile.classList.add('open');
    document.querySelector('.icon').src = "./icons/close.svg";
  }
}


  const urlType = fetch("./js/tshirtbd.json");
  Promise.resolve(urlType)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      response.map((response) => {
        console.log(response)
        ImgCloth = response.img;
        DescCloth = response.name;
        IdCloth = response.id
        criaCard(ImgCloth, DescCloth, IdCloth)
        btn = document.querySelectorAll(".btn-view")
        console.log(btn)
      })
    })
    .then(() => {
      btn.forEach((i) => {
        i.addEventListener("click", (e) =>{
          idShop.push(e.srcElement.parentElement.id)
          console.log(idShop)
          
        })
      })
    });



function criaCard(ImgCloth, DescCloth, Id) {
  const mcard = document.createElement("div");
  ClothingCollection.appendChild(mcard);

    mcard.innerHTML = `
      <img src="./clothes/Tshirt/${ImgCloth}">
      <p class="description-clothes">${DescCloth}</p>
      <p class="value">US$ 20,00 </p>
    <button class="btn-view">Shop Now</button>
             `;

  mcard.classList.add("clothing-item")
  mcard.id = `${Id}`

}



