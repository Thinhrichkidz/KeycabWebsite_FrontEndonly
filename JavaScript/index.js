const bannerswiper = new Swiper('.banner-truot', {
    loop: true,
    pagination: {
        el: `.banner-pagination`
    },
    autoplay: {
        delay: 3000,
    },
});

////////////////
const menuSwiper = new Swiper(`.the-menu`, {
    slidesPerView: `auto`
});
///////////////
let nutSch = document.getElementById(`btn-search`)
nutSch.addEventListener(`click`, () => {
    document.body.classList.remove(`show-menu`)
    document.body.classList.toggle(`show-search`)
    if (document.body.classList.contains(`show-search`)) {
        document.querySelector(`.frm-sch input`).focus();
    }
})
let nut = document.getElementById(`n3v`);
nut.addEventListener(`click`, () => {
        document.body.classList.remove(`show-search`);
        document.body.classList.toggle(`show-menu`);
    })
    ////////////////XU LY KHOI TRUOT SAN PHAM////////////
const keycapSwiper = new Swiper('.keycap-truot .pro-block-inner', {
    allowSlideNext: false,
    allowSlidePrev: false,
    breakpoints: {
        768: {
            allowSlideNext: true,
            allowSlidePrev: true,
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.keycap-truot  .swiper-button-next',
                prevEl: '.keycap-truot  .swiper-button-prev',
            },
        },
        992: {
            allowSlideNext: true,
            allowSlidePrev: true,
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.keycap-truot  .swiper-button-next',
                prevEl: '.keycap-truot  .swiper-button-prev',
            }
        }
    }
});
const switchSwiper = new Swiper('.switch-truot .pro-block-inner', {
    allowSlideNext: false,
    allowSlidePrev: false,
    breakpoints: {
        768: {
            allowSlideNext: true,
            allowSlidePrev: true,
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.switch-truot  .swiper-button-next',
                prevEl: '.switch-truot  .swiper-button-prev',
            },
        },
        992: {
            allowSlideNext: true,
            allowSlidePrev: true,
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.switch-truot  .swiper-button-next',
                prevEl: '.switch-truot  .swiper-button-prev',
            }
        }
    }
});
const banphimSwiper = new Swiper('.ban-phim-co .pro-block-inner', {
    allowSlideNext: false,
    allowSlidePrev: false,
    breakpoints: {
        768: {
            allowSlideNext: true,
            allowSlidePrev: true,
            slidesPerView: 2,
            spaceBetween: 20,
            navigation: {
                nextEl: '.ban-phim-co  .swiper-button-next',
                prevEl: '.ban-phim-co  .swiper-button-prev',
            },
        },
        992: {
            allowSlideNext: true,
            allowSlidePrev: true,
            slidesPerView: 3,
            spaceBetween: 20,
            navigation: {
                nextEl: '.ban-phim-co  .swiper-button-next',
                prevEl: '.ban-phim-co  .swiper-button-prev',
            }
        }
    }
});

// const spSwiper = new Swiper('.pro-block-inner', {
//   allowSlideNext: false,
//   allowSlidePrev: false,
//   breakpoints: {
//     768: {
//       allowSlideNext: true,
//       allowSlidePrev: true,
//       slidesPerView: 2,
//       spaceBetween: 20,
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//     },
//   }
// });

// ----------------------------------------------------------------------------------------------------

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

// function addToCartClicked(event) {
//     var button = event.target
//     var shopItem = button.parentElement.parentElement
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }

// function addToCartClicked(event) {
//     var button = event.target
//     console.log(button);
//     var shopItem = button.parentElement.parentElement;
//     console.log(shopItem);
//     var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
//     var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
//     console.log(price);
//     var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
//     console.log(imageSrc);
//     addItemToCart(title, price, imageSrc)
//     updateCartTotal()
// }

// function addItemToCart(title, price, imageSrc) {
//     var cartRow = document.createElement('div')
//     cartRow.classList.add('cart-row')
//     var cartItems = document.getElementsByClassName('cart-items')[0]
//     var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
//     for (var i = 0; i < cartItemNames.length; i++) {
//         if (cartItemNames[i].innerText == title) {
//             alert('This item is already added to the cart')
//             return
//         }
//     }
//     var cartRowContents = `
//       <div class="cart-item cart-column">
//           <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
//           <span class="cart-item-title">${title}</span>
//       </div>
//       <span class="cart-price cart-column">${price}</span>
//       <div class="cart-quantity cart-column">
//           <input class="cart-quantity-input" type="number" value="1">
//           <button class="btn btn-danger" type="button">REMOVE</button>
//       </div>`
//     cartRow.innerHTML = cartRowContents
//     cartItems.append(cartRow)
//     cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
//     cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
// }

var add_cart = document.getElementsByClassName("btn-buy");
for (var i = 0; i < add_cart.length; i++) {
    var add = add_cart[i];
    add.addEventListener("click", function(event) {

        var button = event.target;
        var product = button.parentElement.parentElement;
        var img = product.parentElement.getElementsByClassName("shop-item-image")[0].src
        var title = product.getElementsByClassName("shop-item-title")[0].innerText
        var price = product.getElementsByClassName("shop-item-price")[0].innerText
        addItemToCart(title, price, img)
            // Khi thêm sản phẩm vào giỏ hàng thì sẽ hiển thị modal
        modal.style.display = "block";

        updatecart()
    })
}

function addItemToCart(title, price, img) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cart_title = cartItems.getElementsByClassName('cart-item-title')

    for (var i = 0; i < cart_title.length; i++) {
        if (cart_title[i].innerText == title) {
            alert('Sản Phẩm Đã Có Trong Giỏ Hàng')
            return
        }
    }

    var cartRowContents = `
  <div class="cart-item cart-column">
      <img class="cart-item-image" src="${img}" width="100" height="100">
      <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">${price}</span>
  <div class="cart-quantity cart-column">
      <input class="cart-quantity-input" type="number" value="1">
      <button class="btn btn-danger" type="button">Xóa</button>
  </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', function() {
        var button_remove = event.target
        button_remove.parentElement.parentElement.remove()
        updatecart()
    })
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', function(event) {
        var input = event.target
        if (isNaN(input.value) || input.value <= 0) {
            input.value = 1;
        }
        updatecart()
    })
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}