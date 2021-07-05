<template>
    <header>
        <div class="top-navbar bg-dark d-flex align-items-center justify-content-center py-2">
            <p class="mx-2 mb-0 text-white">CHRISTMAS SALE - 25% OFF</p>
            <small class="mb-0 small text-white-50">added at the checkout</small>
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
                    <button type="button" class="action-btn d-md-none" @click.prevent="showSearch =!showSearch">
                        <i data-feather="search"></i>
                    </button>
                    <button type="button" class="action-btn">
                        <i data-feather="heart"></i>
                    </button>
                    <button type="button" class="action-btn">
                        <i data-feather="shopping-cart"></i>
                    </button>
                    <button type="button" class="action-btn">
                        <i data-feather="user-minus"></i>
                    </button>
                </div>
            </nav>
        </div>

        <div class="bottom-navbar">
            <div class="container">
                <div class="row">
                    <div class="left-sidebar col-sm-8 col-md-4 col-lg-3">
                        <template v-if="leftSidebarCanvasButton">
                            <button type="button"
                                    :key="`canvas`"
                                    class="sidebar-btn d-flex justify-content-start"
                                    data-bs-toggle="offcanvas"
                                    data-bs-target="#sidebarLeftOffcanvas"
                                    aria-controls="sidebarLeftOffcanvas">
                                <i data-feather="menu" :key="`canvas-icon`"></i>
                                <span class="sidebar-btn-text">Department</span>
                            </button>
                            <div class="offcanvas offcanvas-start"
                                 data-bs-scroll="true" tabindex="-1"
                                 id="sidebarLeftOffcanvas"
                                 aria-labelledby="sidebarLeftOffcanvasLabel">
                                <div class="offcanvas-header">
                                    <h5 class="offcanvas-title" id="sidebarLeftOffcanvasLabel">Backdroped with
                                        scrolling</h5>
                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                            aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <p>Try scrolling the rest of the page to see this option in action.</p>
                                </div>
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
                                    <li :key="index"
                                        class="list-group-item d-flex align-items-center justify-content-between">
                                        <span>{{ item.title }}</span>
                                        <img class="list-group-img"
                                             :src="imagePath(item.icon)"
                                             :alt="item.icon"
                                        />
                                    </li>
                                    <hr v-if="index < (leftSidebarData.length - 1)"
                                        class="list-item-divider"
                                        :key="index"
                                    />
                                </template>
                            </ul>
                        </template>
                    </div>
                    <div class="right-sidebar col-sm-4 col-md-8 col-lg-9 d-flex align-items-center justify-content-end">
                        <ul class="nav">
                            <li v-for="(item, index) in rightSidebarData" :key="index" class="nav-item">
                                <a class="nav-link active" :class="{'nav-with-submenu': item.subMenu}"
                                   aria-current="page" href="#">
                                    <span class="nav-link-text">{{ item.title }}</span>
                                    <i data-feather="chevron-down" v-if="item.subMenu"></i>
                                </a>
                            </li>
                        </ul>
                        <button
                            class="sidebar-btn"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#sidebarRightOffcanvas"
                            aria-controls="sidebarRightOffcanvas">
                            <i data-feather="menu"></i>
                        </button>
                        <div class="offcanvas offcanvas-end"
                             data-bs-scroll="true" tabindex="-1"
                             id="sidebarRightOffcanvas"
                             aria-labelledby="sidebarRightOffcanvasLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="sidebarRightOffcanvasLabel">Backdroped with
                                    scrolling</h5>
                                <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <p>Try scrolling the rest of the page to see this option in action.</p>
                            </div>
                        </div>
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

            leftSidebarCanvasButton: false,
            leftSidebarData: [
                {
                    title: 'Fashion',
                    icon: 'briefcase'
                },
                {
                    title: 'Flower Pot',
                    icon: 'cactus-light'
                },
                {
                    title: 'CCTV',
                    icon: 'camera'
                },
                {
                    title: 'Music',
                    icon: 'loudspeaker'
                },
                {
                    title: 'Photography',
                    icon: 'camera-light'
                },
                {
                    title: 'Furniture',
                    icon: 'home-light'
                },
                {
                    title: 'Health',
                    icon: 'graph'
                },
                {
                    title: 'Photography',
                    icon: 'camera-light'
                },
                {
                    title: 'Health',
                    icon: 'wallet'
                },
                {
                    title: 'Furniture',
                    icon: 'home-light'
                },
                {
                    title: 'Fashion',
                    icon: 'briefcase'
                },
                {
                    title: 'Flower Pot',
                    icon: 'cactus-light'
                },
            ],
            rightSidebarData: [
                {title: 'New Release'},
                {title: 'Men'},
                {title: 'Women'},
                {
                    title: 'Kids',
                    subMenu: [
                        {title: 'Pant'},
                        {title: 'Shirt'}
                    ]
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
                this.leftSidebarCanvasButton = width < 992
            }
        }
    },
    methods: {
        imagePath(name) {
            return urlGenerator(`images/icons/${name}.png`);
        }
    }
}
</script>
