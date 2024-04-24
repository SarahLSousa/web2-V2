
const ClothingCollection = document.querySelector(".clothing-collection")
let ImgCloth;
let DescCloth;


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


  const urlType = fetch("./js/sweatshirtbd.json");
  Promise.resolve(urlType)
    .then((response) => response.json())
    .then((response) => {
      console.log(response)
      response.map((response) => {
        console.log(response)
        ImgCloth = response.img;
        DescCloth = response.name;
        criaCard(ImgCloth, DescCloth)
      })
    });



function criaCard(ImgCloth, DescCloth) {
  const mcard = document.createElement("div");
  ClothingCollection.appendChild(mcard);

    mcard.innerHTML = `
      <img src="./clothes/sweatshirt/${ImgCloth}">
      <p class="description-clothes">${DescCloth}</p>
      <p class="value">US$ 20,00 </p>
    <button class="btn-view">Shop Now</button>
             `;

  mcard.classList.add("clothing-item")

 
}