<template>
    <header>
        <div class="top-navbar d-flex align-items-center justify-content-center py-2">
            <p class="mx-2 mb-0 font-size-14 text-white">CHRISTMAS SALE - 25% OFF</p>
            <small class="mb-0 small">added at the checkout</small>
        </div>
        <div class="container middle-navbar" :class="{'visible-md-search':showSearch}">
            <nav class="min-height-100 d-flex align-items-center justify-content-between">
                <img :src="urlGenerator(`images/logo.png`)" class="app-logo" alt="logo">
                <div class="input-group-wrapper">
                    <div class="input-group search-input-group">
                        <i data-feather="search" class="search-icon"></i>
                        <input
                            type="text"
                            class="search-input"
                            placeholder="What are you looking for?"
                        />
                    </div>
                </div>
                <div class="navbar-right-buttons d-flex justify-content-center justify-content-between">
                    <button type="button" class="action-btn d-md-none"
                            @click.prevent="showSearch =!showSearch">
                        <i data-feather="search"></i>
                    </button>
                    <button type="button" class="action-btn">
                        <i data-feather="heart"></i>
                    </button>
                    <button
                        type="button" class="action-btn"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#cartOffcanvas"
                        aria-controls="cartOffcanvas">
                        <i data-feather="shopping-cart"></i>
                    </button>
                    <button type="button" class="action-btn">
                        <i data-feather="user-minus"></i>
                    </button>
                    <div class="offcanvas offcanvas-end"
                         tabindex="-1"
                         id="cartOffcanvas"
                         aria-labelledby="cartOffcanvasLabel">
                        <app-product-cart/>
                    </div>
                </div>
            </nav>
        </div>

        <div class="bottom-navbar">
            <div class="container">
                <div class="row">
                    <div class="left-sidebar col-sm-8 col-md-4 col-lg-3"
                         :class="{'position-relative':!sidebarCanvasButton}">
                        <template v-if="sidebarCanvasButton">
                            <button
                                type="button"
                                :key="`canvas`"
                                class="sidebar-btn d-flex justify-content-start"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#sidebarLeftOffcanvas"
                                aria-controls="sidebarLeftOffcanvas">
                                <i data-feather="menu" :key="`canvas-icon`"></i>
                                <span class="sidebar-btn-text">Department</span>
                            </button>
                            <div class="offcanvas offcanvas-start"
                                 data-bs-scroll="true"
                                 tabindex="-1"
                                 id="sidebarLeftOffcanvas"
                                 aria-labelledby="sidebarLeftOffcanvasLabel">
                                <sidebar-left-canvas :data="leftSidebarData"/>
                            </div>
                        </template>
                        <template v-else>
                            <button type="button"
                                    :key="`no-canvas`"
                                    class="sidebar-btn d-flex justify-content-start">
                                <i data-feather="menu" :key="`no-canvas-icon`"></i>
                                <span class="sidebar-btn-text">Department</span>
                            </button>
                            <ul class="list-group left-sidebar-list">
                                <template v-for="(item, index) in leftSidebarData">
                                    <li :key="`list-${index}`"
                                        class="list-group-item d-flex align-items-center justify-content-between">
                                        <span class="list-item-name">{{ item.title }}</span>
                                        <img class="list-item-img"
                                             :src="urlGenerator(item.icon)"
                                             :alt="item.icon"
                                        />
                                        <div v-if="item.product" class="burger-menu-wrapper">
                                            <div class="burger-menu">
                                                <div class="row p-5">
                                                    <div class="col-4">
                                                        <h3 class="menu-heading mb-0">Product</h3>
                                                        <ul class="list-unstyled">
                                                            <li class="single-item mt-4">Product 001</li>
                                                            <li class="single-item mt-4">Item 002</li>
                                                            <li class="single-item mt-4">Product item 003</li>
                                                        </ul>
                                                        <h3 class="menu-heading mt-4">Product</h3>
                                                        <ul class="list-unstyled">
                                                            <li class="single-item mt-4">Product 001</li>
                                                            <li class="single-item mt-4">Item 002</li>
                                                            <li class="single-item mt-4">Product item 003</li>
                                                            <li class="single-item mt-4">Product 004</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-4">
                                                        <h3 class="menu-heading mb-0">Product</h3>
                                                        <ul class="list-unstyled">
                                                            <li class="single-item mt-4">Product 001</li>
                                                            <li class="single-item mt-4">Item 002</li>
                                                            <li class="single-item mt-4">Product item 003</li>
                                                            <li class="single-item mt-4">Product 004</li>
                                                            <li class="single-item mt-4">Item 005</li>
                                                            <li class="single-item mt-4">Product item 006</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-4 feature-wrapper">
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
                                                            class="d-flex flex-wrap align-items-center justify-content-center justify-content-xxl-between">
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
                                            </div>
                                        </div>
                                    </li>
                                    <div v-if="index < (leftSidebarData.length - 1)"
                                         class="list-item-divider"
                                         :key="`hr-${index}`"></div>
                                </template>
                            </ul>
                        </template>
                    </div>
                    <div class="right-sidebar col-sm-4 col-md-8 col-lg-9 d-flex align-items-center justify-content-end">
                        <ul class="nav">
                            <li v-for="(item, index) in rightSidebarData" :key="index"
                                class="nav-item">
                                <a class="nav-link"
                                   aria-current="page" href="#">
                                    <span class="nav-link-text">{{ item.title }}</span>
                                    <i data-feather="chevron-down" v-if="item.subMenu"></i>
                                </a>
                                <div v-if="item.subMenu" class="nav-with-submenu">
                                    <ul class="list-unstyled">
                                        <li v-for="(subItemName, subIndex) in item.subMenu">
                                            <a href="#" class="sub-item-link">{{ subItemName }}</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                        <template v-if="sidebarCanvasButton">
                            <button
                                class="sidebar-btn"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#sidebarRightOffcanvas"
                                aria-controls="sidebarRightOffcanvas">
                                <i data-feather="menu"></i>
                            </button>
                            <div class="offcanvas offcanvas-end"
                                 data-bs-scroll="true"
                                 tabindex="-1"
                                 id="sidebarRightOffcanvas"
                                 aria-labelledby="sidebarRightOffcanvasLabel">
                                <sidebar-right-canvas :data="rightSidebarData"/>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {urlGenerator} from "./helper/helper";

export default {
    name: "AppNavbar",
    data() {
        return {
            urlGenerator,
            showSearch: false,
            windowWidth: 0,

            sidebarCanvasButton: false,
            leftSidebarData: [
                {
                    title: 'Fashion',
                    icon: 'images/icons/briefcase.png',
                    product: true
                },
                {
                    title: 'Flower Pot',
                    icon: 'images/icons/cactus-light.png'
                },
                {
                    title: 'CCTV',
                    icon: 'images/icons/camera.png'
                },
                {
                    title: 'Music',
                    icon: 'images/icons/loudspeaker.png'
                },
                {
                    title: 'Photography',
                    icon: 'images/icons/camera-light.png'
                },
                {
                    title: 'Furniture',
                    icon: 'images/icons/home-light.png'
                },
                {
                    title: 'Health',
                    icon: 'images/icons/graph.png'
                },
                {
                    title: 'Photography',
                    icon: 'images/icons/camera-light.png'
                },
                {
                    title: 'Health',
                    icon: 'images/icons/wallet.png'
                },
                {
                    title: 'Furniture',
                    icon: 'images/icons/home-light.png'
                },
                {
                    title: 'Fashion',
                    icon: 'images/icons/briefcase.png'
                },
                {
                    title: 'Flower Pot',
                    icon: 'images/icons/cactus-light.png'
                },
            ],
            rightSidebarData: [
                {title: 'New Release'},
                {title: 'Men'},
                {title: 'Women'},
                {
                    title: 'Kids',
                    subMenu: ['Shirt', 'Mens Shoe', 'Girls Hijab', 'Royal Panjabi']
                },
                {title: 'Sale'},
                {title: 'Collections'},
            ],
        }
    },
    mounted() {
        this.windowWidth = window.innerWidth;
        window.onresize = () => {
            this.windowWidth = window.innerWidth
        }
    },
    watch: {
        windowWidth: {
            handler: function (width) {
                this.sidebarCanvasButton = width < 992
            }
        },
        sidebarCanvasButton: {
            handler: function (data) {
                if(!data) {
                    setTimeout(()=> {
                        $('.bottom-navbar .modal-backdrop').remove();
                    });
                }
            }
        }
    }
}
</script>
