<template>
    <div class="products-content container">
        <h3 class="header">- Our Products</h3>
        <div class="d-flex align-items-center flex-column flex-md-row justify-content-between">
            <h2 class="header-secondary">Explore our Products</h2>
            <div class="slider-btn-group d-flex justify-content-between">
                <button
                    @click.prevent="prevSlide"
                    type="button"
                    :class="{'disabled': !prev}"
                    class="slider-btn slider-left-btn">
                    <i data-feather="chevron-left"></i>
                </button>
                <button
                    @click.prevent="nextSlide"
                    type="button"
                    :class="{'disabled': !next}"
                    class="slider-btn slider-right-btn">
                    <i data-feather="chevron-right"></i>
                </button>
            </div>
        </div>

        <div class="products-slider-wrapper min-height-250">
            <carousel
                ref="carousel"
                :pagination-enabled="false"
                :per-page-custom="[[575,1],[767,2],[991,3],[1199,4]]">
                <slide v-for="(product, index) in products"
                       :key="index" class="px-3">
                    <div class="product-item bg-success height-200">
                        {{product.title}}
                    </div>
                </slide>
            </carousel>
        </div>
    </div>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'


export default {
    name: "AppProducts",
    components: {Carousel, Slide},
    data() {
        return {
            products: [
                {
                    title: 'Coffee Table One',
                    img: 'images/products/coffee-table-one.png',
                    discount: 20,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    }
                },
                {
                    title: 'Coffee Table Two',
                    img: 'images/products/coffee-table-two.png',
                    discount: null,
                    color: ['#906145', '#FFDC60', '#FAB8C4'],
                    prices: {
                        current: 20,
                        old: 30
                    }
                },
                {
                    title: 'Coffee Table Three',
                    img: 'images/products/coffee-table-three.png',
                    discount: 20,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    }
                },
                {
                    title: 'Coffee Table Four',
                    img: 'images/products/coffee-table-four.png',
                    discount: 20,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    }
                },
                {
                    title: 'Coffee Table Five',
                    img: 'images/products/coffee-table-three.png',
                    discount: null,
                    color: ['#906145', '#FAB8C4', '#DFBF9B'],
                    prices: {
                        current: 20,
                        old: 30
                    }
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
            return true;
            // return this.$refs.carousel.canAdvanceForward
        },
        prev() {
            return true;
            // return this.$refs.carousel.canAdvanceBackward
        },
    }
}
</script>