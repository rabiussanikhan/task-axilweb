<template>
    <div class="row fashions">
        <div class="col-12">
            <h3 class="menu-heading mb-0">Product</h3>
            <ul class="list-unstyled">
                <li class="single-item mt-2">Product 001</li>
                <li class="single-item mt-2">Item 002</li>
                <li class="single-item mt-2">Product item 003</li>
            </ul>
            <h3 class="menu-heading mt-4">Product</h3>
            <ul class="list-unstyled">
                <li class="single-item mt-2">Product 001</li>
                <li class="single-item mt-2">Item 002</li>
                <li class="single-item mt-2">Product item 003</li>
                <li class="single-item mt-2">Product 004</li>
            </ul>
        </div>
        <div class="col-12">
            <h3 class="menu-heading mb-0">Product</h3>
            <ul class="list-unstyled">
                <li class="single-item mt-2">Product 001</li>
                <li class="single-item mt-2">Item 002</li>
                <li class="single-item mt-2">Product item 003</li>
                <li class="single-item mt-2">Product 004</li>
                <li class="single-item mt-2">Item 005</li>
                <li class="single-item mt-2">Product item 006</li>
            </ul>
        </div>
        <div class="col-12 feature-wrapper">
            <div class="divider"></div>
            <h3 class="menu-heading mb-0">Featured</h3>
            <div class="d-flex flex-column">
                <img class="feature-img img-fluid"
                     :src="urlGenerator(`images/burger-menu/item-1.png`)"
                     alt="Not Found"/>
                <img class="feature-img img-fluid"
                     :src="urlGenerator(`images/burger-menu/item-2.png`)"
                     alt="Not Found"/>
            </div>
            <div
                class="d-flex flex-wrap align-items-center justify-content-between">
                <img class="feature-img img-fluid"
                     :src="urlGenerator(`images/burger-menu/item-3.png`)"
                     alt="Not Found"/>
                <img class="feature-img img-fluid"
                     :src="urlGenerator(`images/burger-menu/item-4.png`)"
                     alt="Not Found"/>
            </div>
            <button type="button"
                    class="see-all-btn btn btn-primary shadow-none">
                See All Offers
            </button>
        </div>
    </div>
</template>

<script>
import {urlGenerator} from "../helper/helper";

export default {
    name: "Fashion",
    data() {
        return {
            urlGenerator,
        }
    }
}
</script>