<template>
    <div class="products-content container">
        <h3 class="header">- Our Products</h3>
        <div class="d-flex align-items-center flex-column flex-md-row justify-content-between">
            <h2 class="header-secondary">Explore our Products</h2>
            <div class="slider-btn-group d-flex justify-content-between">
                <button @click.prevent="starIndex--" type="button" class="slider-btn slider-left-btn">
                    <i data-feather="chevron-left"></i>
                </button>
                <button @click.prevent="starIndex++" type="button" class="slider-btn slider-right-btn">
                    <i data-feather="chevron-right"></i>
                </button>
            </div>
        </div>

<!--        <div class="products-slider-wrapper min-height-250">
            <div class="row">
                <template v-for="(product, index) in products">
                    <div :key="`product-${index}`"
                         v-if="(index >= starIndex) && (index <= (starIndex+showableIndex))"
                         class="col-lg-3">
                        {{ product.title }}
                    </div>
                </template>
            </div>
        </div>-->
    </div>
</template>

<script>
export default {
    name: "AppProducts",
    data() {
        return {
            starIndex: 0,
            showIndex: 3,
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
            ]
        }
    }
}
</script>