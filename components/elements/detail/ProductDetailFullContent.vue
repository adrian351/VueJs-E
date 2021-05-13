<template lang="html">
    <div class="ps-product--detail ps-product--full-content">
        <div class="ps-product__top">
            <div class="ps-product__header">
                <thumbnail-count-down :product="product" />
                <information-full-content :product="product" />
            </div>
            <div class="ps-product__price-right">
                <h4
                    v-if="product.is_sale === true"
                    class="ps-product__price sale"
                >
                    <del class="mr-2"> $ {{ product.sale_price }}</del>
                    ${{ product.price }}
                </h4>
                <h4 v-else class="ps-product__price">${{ product.price }}</h4>
                <div class="ps-product__shopping">
                    <figure>
                        <figcaption>Cantidad</figcaption>
                        <div class="form-group--number">
                            <button class="up">+</button>
                            <button class="down">-</button>
                            <input
                                class="form-control"
                                type="text"
                                placeholder="1"
                                disabled
                            />
                        </div>
                    </figure>
                    <a class="ps-btn ps-btn--gray" href="#">
                        Añadir al carrito
                    </a>
                    <a class="ps-btn" href="#">
                        Comprar ahora
                    </a>
                    <div class="ps-product__actions">
                        <a href="#">
                            <i class="icon-heart mr-2"></i>
                            Agregar a favoritos
                        </a>
                        <a href="#">
                            <i class="icon-chart-bars mr-2"></i>
                            Comparar
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <description-full-content />
    </div>
</template>

<script>
import { extended } from '~/static/data/product';
import DefaultDescription from '~/components/elements/detail/modules/DefaultDescription';
import InformationFullContent from '~/components/elements/detail/information/InformationFullContent';
import DescriptionFullContent from '~/components/elements/detail/modules/DescriptionFullContent';
export default {
    name: 'ProductDetailFullContent',
    components: {
        DescriptionFullContent,
        InformationFullContent,
        DefaultDescription
    },
    computed: {
        product() {
            return extended;
        }
    }
};
</script>

<style lang="scss" scoped></style>
