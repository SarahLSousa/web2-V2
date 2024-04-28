let btn;
const ClothingCollection = document.querySelector(".clothing-collection")
const BackModalFinish = document.querySelector(".position-modal")
const ModalFinish = document.querySelector(".compra-feita")
let ClothingCart = document.querySelector(".cart-cloth-space")
const CartFinishPrice = document.querySelector(".cart-finish-price")
const Body = document.querySelector("body")
const Carrinho = document.querySelector(".carrinho");
let select;
let ImgCloth;
let DescCloth;
let IdCloth;
let ImgCart;
let CartName;
let IdCart;
let Card;
let ResultSoma;
let CartPrice;
let soma = 0;
let soma1;
let soma2;
let span;

let BtnCart

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
      response.map((response) => {
        ImgCloth = response.img;
        DescCloth = response.name;
        IdCloth = response.id
        criaCard(ImgCloth, DescCloth, IdCloth)
        btn = document.querySelectorAll(".btn-view")
      })
    })
    .then(() => {
      const urlType = fetch("./js/tshirtbd.json");
      Promise.resolve(urlType)
      .then((response) => response.json())
      .then((response) => {

        btn.forEach((i) => {
          i.addEventListener("click", (e) =>{
            Card = e.srcElement.parentElement.parentElement.id;
            IdCart = response[Card].id;
            ImgCart = response[Card].img;
            CartName = response[Card].name;
            const VerificaId = document.querySelector(`.C${IdCart}`)
            if(VerificaId == null){
              criaCardCart(ImgCart, CartName, IdCart)
            }
            else{
              alert("Você já adicionou este Item")
            }
            
            console.log(select)
          })
        })
      })

    });



function criaCard(ImgCloth, DescCloth, Id) {
  const mcard = document.createElement("div");
  ClothingCollection.appendChild(mcard);

    mcard.innerHTML = `
      <img src="./clothes/${ImgCloth}">
      <div class="infos">
        <p class="description-clothes">${DescCloth}</p>
        <p class="value">US$ 20,00 </p>
        <button class="btn-view">Shop Now</button>
      </div>
             `;

  mcard.classList.add("clothing-item")
  mcard.id = `${Id}`

}

function criaCardCart(ImgCart, CartName, Id) {
  const mcard = document.createElement("div");
  ClothingCart.appendChild(mcard);

    mcard.innerHTML = `
    <img src="./clothes/${ImgCart}" alt="">
    <div class="cart-cloth-info">
      <h2>${CartName}</h2>
      <select>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
        <option>6</option>
        <option>7</option>
        <option>8</option>
        <option>9</option>
        <option>10</option>
      </select>
      <p class="cart-price">$<span class="span-price">20,00</span></p>
      
    </div>
    <button class="cart-remove-button"onclick=""><img src="./img/close.svg" alt=""></button>

             `;

  mcard.classList.add("cart-cloth")
  mcard.classList.add(`C${Id}`)
  select = document.querySelectorAll("select")
  soma = 0
  soma1 = 0
  soma2 = 0
  somaItens()
  BtnCart = document.querySelectorAll(".cart-remove-button")
  if(BtnCart != undefined)
  BtnCart.forEach((i) => {
    i.addEventListener("click", () => {
        CartFinishPrice.innerText = `$0,00`
      deleteCard(i)
      somaItens()
    })
  })
  select.forEach((i) =>{
    i.addEventListener("click", somaItens);
 
  })



}

function finishBuy() {
  ClothingCart = document.querySelector(".cart-cloth-space")
  console.log(ClothingCart.innerText)
  if(ClothingCart.innerText != ""){
  ClothingCart.innerHTML = ""
  CartFinishPrice.innerText = `$0,00`
  ModalFinish.style.display = "flex"
  BackModalFinish.style.display = "flex"
  document.body.style.overflow = "hidden"
  }
  else{
    alert("Por Favor, Adicione itens ao Carrinho")
  }
}

function closeModal(){
  ModalFinish.style.display = "none"
  BackModalFinish.style.display = "none"
  document.body.style.overflow = ""
}

function somaItens() {
  if(ClothingCart != ""){
    span = document.querySelectorAll(".span-price")
    CartPrice = document.querySelectorAll(".cart-cloth")
    soma = 0
    span.forEach((i) => {
      soma1 = 0
      soma2 = 0
      console.log(i.parentElement.parentElement.children[1].value);
      soma1 = i.parentElement.parentElement.children[1].value;
      soma2 = i.innerText;
      soma2 = parseFloat(soma2) * soma1;
      soma = soma+soma2;
      console.log(soma);
      CartFinishPrice.innerText = `$${soma},00`
      console.log(BtnCart);

    })
  }
  else{
    
  }
}


function deleteCard(e){
  e.parentElement.remove();
}
function openCarrinho(){
  Carrinho.classList.toggle('ativo');
}
