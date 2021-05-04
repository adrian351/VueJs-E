<template lang="html">
    <div class="ps-compare ps-section--shopping">
        <div class="container">
            <div class="ps-section__header">
                <h1>Comparar productos</h1>
            </div>
            <div class="ps-section__content">
                <div class="table-responsive" id="table-compare">
                    <table class="table ps-table--compare">
                        <thead>
                            <tr>
                                <th>Producto</th>
                                <th>Precio</th>
                                <th>Marca</th>
                                <th>Accion</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="compareItems ">
                                <tr
                                    v-for="product in compareItems"
                                    :key="product.id"
                                >
                                    <td width="400px">
                                        <product-shopping-cart
                                            :product="product"
                                        />
                                    </td>
                                    <td>{{ product.price }}</td>
                                    <td>{{ product.vendor }}</td>
                                    <td>
                                         <button
                                            type="button"
                                            class="btn btn-outline-danger btn-lg  active"
                                            title="Eliminar"
                                           
                                            @click.prevent="
                                                handleRemoveItemFromCompareList(
                                                    product
                                                )
                                            "
                                        >
                                          Eliminar  
                                        </button>
                                    </td>
                                </tr>
                                <!-- <table-shopping-cart v-if="cartProducts !== null" />
                                <p v-else>No hay productos</p>
                                <div class="ps-section__cart-actions">
                                <nuxt-link to="/shop" class="ps-btn">
                                    <i class="icon-arrow-left mr-2"></i>
                                Regresar a la tienda
                                </nuxt-link> -->
                            
                            </template>
                            <!-- <template v-else>
                                
                                <tr>
                                    <div> No hay productos</div>
                                </tr>
                                
                            </template>  -->
                        </tbody>
                    </table>
                </div>

                <div class="ps-section__return">
                    <nuxt-link to="/" class="ps-btn">
                        <i class="icon-arrow-left mr-2"></i>
                        Regresar 
                    </nuxt-link>
                </div> 
            </div>
         </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ProductMiniCart from '~/components/elements/product/ProductMiniCart';
import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';
import { getListOfProductId } from '~/utilities/product-helper';

export default {
    name: 'Compare',
    components: { ProductShoppingCart, ProductMiniCart },
    computed: {
        ...mapState({
            total: state => state.compare.total,
            compareItems: state => state.product.compareItems
        })
    },
    methods: {
        handleRemoveItemFromCompareList(product) {
            this.$store.dispatch('compare/removeItemFromCompare', product);
             this.$notify({
                group: 'addCartSuccess',
                title: 'Remove Item!',
                text: `${product.title} has been removed from your wishlist!`
            }); 
            this.loadCompareProducts();
        },

        async loadCompareProducts() {
            const compareItems = this.$cookies.get('compare', {
                parseJSON: true
            });
            if (compareItems) {
                const queries = getListOfProductId(compareItems.items);
                if (queries.length > 0) {
                    const response = await this.$store.dispatch(
                        'product/getCompareProducts',
                        queries
                    );
                }
                else {
                this.$store.commit('product/setCompareProducts', null);
                }
            }
        }
    }
};
</script>

<style lang="scss" scoped>
#table-compare {
    tbody {
        tr {
            td {
                width: 100px;
                &:first-child {
                    width: 400px;
                }
            }
        }
    }
}
</style>
