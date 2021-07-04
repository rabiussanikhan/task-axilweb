<template>
    <header>
        <div class="top-navbar bg-dark d-flex align-items-center justify-content-center py-2">
            <p class="mx-2 mb-0 text-white">CHRISTMAS SALE - 25% OFF</p>
            <small class="mb-0 small text-white-50">added at the checkout</small>
        </div>
        <div class="container middle-navbar" :class="{'visible-md-search':showSearch}">
            <nav class="min-height-100 d-flex align-items-center justify-content-between">
                <img src="../assets/logo.png" class="app-logo" alt="logo">
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
                    <div class="col-md-4 col-lg-3">
                        <button class="sidebar-btn d-flex justify-content-start">
                            <i data-feather="menu"></i>
                            <span class="sidebar-btn-text">Department</span>
                        </button>
                    </div>
                    <div class="col-md-8 col-lg-9">

                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: "AppNavbar",
    data() {
        return {
            showSearch: false
        }
    }
}
</script>
