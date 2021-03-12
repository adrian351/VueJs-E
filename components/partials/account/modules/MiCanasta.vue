<template lang="html">
<table class="table ps-table--responsive ps-table--mi-canasta">
        <thead>
            <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Total</th>
                <th>Accion</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in cartProducts" :key="product.id">
                <td data-label="Product">
                   
                </td>
                <td data-label="Price" class="price">$ {{ product.price }}</td>
                <td data-label="Quantity">
                    <div class="form-group--number">
                        <button class="up">+</button>
                        <button class="down">-</button>
                        <input
                            class="form-control"
                            type="text"
                            placeholder="1"
                            value="1"
                        />
                    </div>
                </td>
                <td data-label="Total">
                    ${{
                        (cartItems[index].quantity * product.price).toFixed(2)
                    }}
                </td>
                <td data-label="Action">

                    <a
                        href="#"
                        title="Eliminar"
                        color="error"
                        @click.prevent="handleRemoveProductFromCartList(product)"
                    >
                        <i class="icon-cross"></i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from 'vuex';
// import ProductShoppingCart from '~/components/elements/product/ProductShoppingCart';

export default {
    name: 'MiCanasta',
    // components: { ProductShoppingCart },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            total: state => state.cart.total,
            amount: state => state.cart.amount,
            cartProducts: state => state.product.cartProducts
        })
    },
    methods: {
       
    
        handleRemoveProductFromCartList(product) {
            const cartItem = this.cartItems.find(
                item => item.id === product.id
            );
            this.$store.dispatch('cart/removeProductFromCart', cartItem);
            this.loadCartProducts();
            this.$notify({
                group: 'addCartSuccess',
                title: 'Eliminado!',
                text: `${product.title} | Se ha eliminado del carrito!`
            });
        },
            async loadCartProducts() {
                    const cookieCart = this.$cookies.get('cart', { parseJSON: true });
                    let queries = [];
                    cookieCart.cartItems.forEach(item => {
                        queries.push(item.id);
                    });

                    if (this.cartItems.length > 0) {
                        await this.$store.dispatch('product/getCartProducts', queries);
                    } else {
                        this.$store.commit('product/setCartProducts', null);
            }
        },
        
    }

};
</script>

<style lang="scss" scoped></style>