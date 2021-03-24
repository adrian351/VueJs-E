<template lang="html">
    <div class="ps-deal-of-day ps-section--carousel-outside">
        <div class="container">
            <div class="ps-section__header">
                <div class="ps-block--countdown-deal">
                    <div class="ps-block__left">
                        <h3>Productos</h3>
                    </div>
                    <div class="ps-block__right">
                       >
                    </div>
                </div>
                <nuxt-link to="/shop">
                    <a>View all</a>
                </nuxt-link>
            </div>
            <div class="ps-section__content">
                <carousel-arrows type="simple" />
                <div class="ps-carousel " v-swiper:mySwiper="carouselSetting">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="product in products">
                            <product-default :product="product" />
                        </div>
                    </div>
                    <!--Carousel controls-->
                    <div class="swiper-pagination swiper-pagination-bullets" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProductDefault from '~/components/elements/product/ProductDefault';
import { mapState } from 'vuex';
import { carouselStandard } from '~/utilities/carousel-helpers';
import { getColletionBySlug } from '~/utilities/product-helper';
import CountDown from '~/components/elements/commons/CountDown';

import CarouselArrows from '~/components/elements/commons/CarouselArrows';

export default {
    name: 'MarketPlaceDealOfDay',
    components: { CarouselArrows, CountDown, ProductDefault },
    props: {
        collectionSlug: {
            type: String,
            default: ''
        }
    },
    computed: {
        ...mapState({
            collections: state => state.collection.collections,
            categories: state => state.collection.categories
        }),

        carouselSetting() {
            return carouselStandard;
        },

        products() {
            return getColletionBySlug(this.collections, this.collectionSlug);
        }
    }
};
</script>
<style lang="scss" scoped></style>
