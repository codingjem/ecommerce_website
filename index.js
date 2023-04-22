let popUpEl = document.querySelector(`.popup`);
let overlayEl = document.querySelector(`.overlay`);

function showPopup() {
    setTimeout(() => {
        popUpEl.style.visibility = "visible";
        overlayEl.classList.remove(`hidden`);
    }, 1500);
}

function closePopup() {
    popUpEl.style.visibility = "hidden";
    overlayEl.classList.add(`hidden`);
}

// render products
const productContentEl = document.querySelector(".products-list");

const products = [
    {
        id: 0,
        name: "iPhone Skin",
        price: 8.99,
        instock: 12,
        imgSrc: "images/img-title.png",
    },
    {
        id: 1,
        name: "iPhone Skin",
        price: 7.99,
        instock: 19,
        imgSrc: "images/img-title.png",
    },
    {
        id: 2,
        name: "iPhone Skin",
        price: 10.99,
        instock: 7,
        imgSrc: "images/img-title.png",
    },
    {
        id: 3,
        name: "iPhone Snap Case",
        price: 11.99,
        instock: 12,
        imgSrc: "images/img-title.png",
    },
    {
        id: 4,
        name: "iPhone Snap Case",
        price: 10.99,
        instock: 12,
        imgSrc: "images/img-title.png",
    },
    {
        id: 5,
        name: "iPhone Snap Case",
        price: 13.99,
        instock: 12,
        imgSrc: "images/img-title.png",
    },
    {
        id: 6,
        name: "iPhone Snap Case",
        price: 11.99,
        instock: 12,
        imgSrc: "images/img-title.png",
    },
];

function renderProducts() {
    products.forEach((product) => {
        productContentEl.innerHTML += `
        <div class="col-lg-4 d-flex px-4 py-4">
    <div class="product-item d-flex px-4 py-3">
        <div class="w-50">
            <img
                src="${product.imgSrc}"
                alt="${product.name}"
                class="product-item-img pe-4 w-100"
            />
        </div>

        <div class="d-flex flex-column justify-content-center w-50">
            <h4>${product.name}</h4>
            <h5>
                Price:
                <span class="prices">$${product.price}</span>
            </h5>
            <a href="" class="btn btn-outline-dark rounded-0 custom-btn mt-4">
                Add To Cart</a
            >
            <a href="" class="btn btn-outline-dark rounded-0 custom-btn mt-2">
                Buy Now</a
            >
        </div>
    </div>
</div>

                           
        `;
    });
}
renderProducts();
