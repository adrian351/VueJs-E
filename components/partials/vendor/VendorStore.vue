<template lang="html">
    <div class="ps-vendor-store">
        <div class="container">
            <div class="ps-section__container">
                <div class="ps-section__left">
                    <CotizarPedido/>
                    <div class="ps-block__divider">
                    </div>
                    <VendorProfile />
                     
                    
                </div>
                <div class="ps-section__right">
                    <div class="ps-block--vendor-filter">
                        <div class="ps-block__left">
                            <ul>
                                <li class="active">
                                    <a href="#">Productos</a>
                                </li>
                            </ul>
                        </div>
                        <div class="ps-block__right">
                            <form
                                class="ps-form--search"
                                action="/"
                                method="get"
                            >
                                <input
                                    class="form-control"
                                    type="text"
                                    placeholder="Buscar"
                                />
                                <button>
                                    <i class="fa fa-search"></i>
                                </button>
                            </form>
                        
                        </div>
                    </div>
                   
                    <div class="ps-vendor-best-seller">
                        <div class="ps-section__header">
                            <h3>Personalizando canasta</h3>
                            <div class="ps-section__nav">
                                <a class="ps-carousel__prev">
                                    <i class="icon-chevron-left"></i>
                                </a>
                                <a class="ps-carousel__next">
                                    <i class="icon-chevron-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="ps-section__content">
                            <div
                                class="ps-carousel"
                                v-swiper:mySwiper="swiperOption"
                            >
                                <div class="swiper-wrapper">
                                    <div
                                        class="swiper-slide"
                                        v-for="item in bestSellerItems"
                                        :key="item.id"
                                    >
                                        <ProductDefault :product="item" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <VendorProducts />
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VendorProfile from './modules/VendorProfile';
import ProductDefault from '~/components/elements/product/ProductDefault';
import CotizarPedido from  '~/components/partials/shop/sections/CotizarPedido';
import { relatedProduct } from '~/static/data/product.json';
import VendorProducts from './modules/VendorProducts';

export default {


    name: 'VendorStore',
    components: { VendorProducts, VendorProfile, ProductDefault , CotizarPedido},
    data() {
        return {
            bestSellerItems: relatedProduct,
            swiperOption: {
                loop: true,
                slidesPerView: 4,
                spaceBetween: 1,
                navigation: {
                    nextEl: '.ps-carousel__next',
                    prevEl: '.ps-carousel__prev'
                },
                breakpoints: {
                    1024: {
                        slidesPerView: 4
                    },
                    768: {
                        slidesPerView: 3
                    },
                    480: {
                        slidesPerView: 2
                    }
                }
            }
        };
    }
};
</script>

<style lang="scss" scoped></style>
