const sliderWrap = document.querySelector(".slider");
const menuItem = document.querySelectorAll(".menuItem");
const productTitle = document.querySelector(".productTitle");
const productColor = document.querySelectorAll(".color");
const productImg = document.querySelector(".productImg");
const productPrice = document.querySelector(".ProductPrice");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/images/air.png",
      },
      {
        code: "darkblue",
        img: "/images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "/images/jordan.png",
      },
      {
        code: "green",
        img: "/images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/images/blazer.png",
      },
      {
        code: "green",
        img: "/images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/images/crater.png",
      },
      {
        code: "lightgray",
        img: "/images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "/images/hippie.png",
      },
      {
        code: "black",
        img: "/images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

menuItem.forEach((item, index) => {
  item.addEventListener("click", () => {
    sliderWrap.style.transform = `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    productTitle.textContent = choosenProduct.title;
    productPrice.textContent = "$" + choosenProduct.price;
    productImg.src = choosenProduct.colors[0].img;

    productColor.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

productColor.forEach((color, index) => {
  color.addEventListener("click", () => {
    productImg.src = choosenProduct.colors[index].img;
  });
});
