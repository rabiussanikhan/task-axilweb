<template>
    <div class="products-content container">
        <h3 class="header">- Our Products</h3>
        <div class="d-flex align-items-center flex-column flex-md-row justify-content-between">
            <h2 class="header-secondary">Explore our Products</h2>
            <div class="slider-btn-group d-flex justify-content-between">
                <button
                    @click.prevent="prevSlide"
                    type="button"
                    class="slider-btn slider-left-btn">
                    <i data-feather="chevron-left"></i>
                </button>
                <button
                    @click.prevent="nextSlide"
                    type="button"
                    class="slider-btn slider-right-btn">
                    <i data-feather="chevron-right"></i>
                </button>
            </div>
        </div>

        <div class="products-slider-wrapper min-height-250 py-5">
            <carousel
                ref="carousel"
                :pagination-enabled="false"
                :per-page-custom="[[0,1],[767,2],[991,3],[1399,4]]">
                <slide v-for="(product, index) in products"
                       :key="`product-${index}`">
                    <div class="product-item">
                        <img class="product-img img-fluid"
                             :src="urlGenerator(product.img)"
                             alt="product-img">
                        <div class="product-details mt-4">
                            <h5 class="product-title">
                                {{ product.title }}
                            </h5>
                            <div class="product-price d-flex align-items-center mt-3">
                                <span class="old-price">${{ product.prices.old }}</span>
                                <span class="current-price">${{ product.prices.current }}</span>
                            </div>
                            <div class="product-colors d-flex align-items-center mt-3">
                                <button
                                    v-for="(color, colorIndex) in product.color"
                                    :key="`product-color-${colorIndex}`"
                                    :class="{'active': color === product.activeColor}"
                                    @click.prevent="product.activeColor = color"
                                    class="color">
                                    <div class="color-dot"
                                         :style="`background-color: ${color}`">
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div class="product-action-btn mt-4">
                            <div class="d-flex align-items-center justify-content-between">
                                <button class="icon-btn" type="button">
                                    <i data-feather="heart"></i>
                                </button>
                                <button class="text-btn" type="button">Add to Cart</button>
                                <button class="icon-btn" type="button">
                                    <i data-feather="eye"></i>
                                </button>
                            </div>
                        </div>
                        <span v-if="product.discount" class="discount-badge text-white">
                            {{ `${product.discount}% OFF` }}
                        </span>
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import {urlGenerator} from "./helper/helper";

export default {
    name: "AppProducts",
    components: {Carousel, Slide},
    data() {
        return {
            urlGenerator,
            products: [
                {
                    title: 'Coffee Table One',
                    img: 'images/products/coffee-table-one.png',
                    discount: 20,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    },
                    activeColor: '#906145'
                },
                {
                    title: 'Coffee Table Two',
                    img: 'images/products/coffee-table-two.png',
                    discount: null,
                    color: ['#906145', '#FFDC60', '#FAB8C4'],
                    prices: {
                        current: 20,
                        old: 30
                    },
                    activeColor: '#FFDC60'
                },
                {
                    title: 'Coffee Table Three',
                    img: 'images/products/coffee-table-three.png',
                    discount: 20,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    },
                    activeColor: '#906145'
                },
                {
                    title: 'Coffee Table Four',
                    img: 'images/products/coffee-table-four.png',
                    discount: 20,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    },
                    activeColor: '#906145'
                },
                {
                    title: 'Coffee Table Five',
                    img: 'images/products/coffee-table-three.png',
                    discount: null,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    },
                    activeColor: '#906145'
                }
            ],
        }
    },
    methods: {
        nextSlide() {
            this.$refs.carousel.goToPage(this.$refs.carousel.getNextPage());
        },
        prevSlide() {
            this.$refs.carousel.goToPage(this.$refs.carousel.getPreviousPage());
        }
    },
    computed: {
        next() {
            return this.$refs.carousel.canAdvanceForward
        },
        prev() {
            return this.$refs.carousel.canAdvanceBackward
        },
    }
}
</script>