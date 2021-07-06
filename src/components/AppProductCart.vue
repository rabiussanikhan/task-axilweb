<template>
    <div class="main-cart p-4">
        <div class="cart-header d-flex justify-content-between align-items-center p-3">
            <h5 class="offcanvas-title font-size-32" id="cartOffcanvasLabel">
                Cart review
            </h5>
            <button
                type="button"
                class="btn-close text-reset shadow-none"
                data-bs-dismiss="offcanvas"
                aria-label="Close"></button>
        </div>
        <div class="offcanvas-cart-body">
            <div class="height-2 default-bg mb-4 mx-3"></div>
            <div class="cart-body p-3">
                <div v-for="(cartItem, index) in cartProducts"
                     :key="`cart-item-${index}`"
                     class="cart-item d-flex justify-content-between align-items-center mb-4">
                    <div class="d-flex justify-content-start align-items-center">
                        <div class="cart-item-img-wrapper">
                            <img :src="urlGenerator(cartItem.img)"
                                 class="cart-item-img height-110 width-110"
                                 alt="Not found"/>
                            <button
                                @click.prevent="removeItem(cartItem)"
                                type="button"
                                class="cart-menu-mini-btn">x
                            </button>
                        </div>
                        <div class="item-details d-flex flex-column mx-3">
                            <p class="mb-2 font-size-20 text-truncate">{{ cartItem.title }}</p>
                            <div class="d-flex align-items-center justify-content-between width-100">
                                <button
                                    @click.prevent="cartItem.amount > 1 ? cartItem.amount-- : removeItem(cartItem)"
                                    type="button"
                                    class="cart-menu-mini-btn">-
                                </button>
                                <p class="mb-0">{{ cartItem.amount }}</p>
                                <button
                                    @click.prevent="cartItem.amount++"
                                    type="button"
                                    class="cart-menu-mini-btn">+
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="mb-0 item-price">{{ `$${(cartItem.price * cartItem.amount)}` }}</p>
                </div>
            </div>
            <div class="height-2 default-bg mb-4 mx-3"></div>
            <div class="sub-total p-3">
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <label class="mb-0 total-label">Subtotal:</label>
                    <p class="mb-0 total-price">{{ `$${totalPrice}` }}</p>
                </div>
                <div class="cart-action-btn d-flex justify-content-between align-items-center">
                    <button class="btn btn-secondary shadow-none me-3 me-md-0 height-60 width-240">View Cart</button>
                    <button class="btn btn-primary shadow-none height-60 width-240">Checkout</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {urlGenerator} from "./helper/helper";

export default {
    name: "AppProductCart",
    data() {
        return {
            urlGenerator,
            cartProducts: [
                {
                    title: 'Commodo Blown Lamp',
                    img: 'images/cart-products/image-one.png',
                    price: 70,
                    amount: 4,
                },
                {
                    title: 'Women black bag',
                    img: 'images/cart-products/image-two.png',
                    price: 60,
                    amount: 3,
                },
                {
                    title: 'Girls bag - New Collection',
                    img: 'images/cart-products/image-three.png',
                    price: 120,
                    amount: 5,
                }
            ]
        }
    },
    computed: {
        totalPrice() {
            let prices = this.cartProducts.map(item => (item.price * item.amount))
            return prices.reduce((total, p) => (total+p), 0)
        }
    },
    methods: {
        removeItem(item) {
            this.cartProducts.splice(this.cartProducts.indexOf(item), 1);
        }
    }
}
</script>