<template lang="html">
    <div class="ps-product__shopping">
        <figure>
            <figcaption>Cantidad:</figcaption>
            <div class="form-group--number">
                <button class="up" @click.prevent="handleIncreaseQuantity">
                    <i class="fa fa-plus"></i>
                </button>
                <button class="down" @click.prevent="handleDescreaseQuantity">
                    <i class="fa fa-minus"></i>
                </button>
                <input
                    v-model="quantity"
                    class="form-control"
                    type="text"
                    
                />
            </div>
        </figure>
        <a
            class="ps-btn ps-btn--black"
            href="#"
            @click.prevent="handleAddToCart"
        >
           Agregar al carrito
        </a>
        <a class="ps-btn" href="#" @click.prevent="">
            Comprar ahora
        </a>
        <div class="ps-product__actions">
            <a href="#"
                @click.prevent="handleAddToWishlist"
            >
                <i class="icon-heart"></i>
            </a>
            <a href="#"
                @click.prevent="handleAddToCompare"
            >
                <i class="icon-chart-bars"></i>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'ModuleProductShopping',
    props: {
        product: {
            type: Object,
            default: () => {}
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems
        })
    },
    data() {
        return {
            quantity: 1
        };
    },
    methods: {
        handleIncreaseQuantity() {
            this.quantity++;
        },

        handleDescreaseQuantity() {
            if (this.quantity > 1) {
                this.quantity--;
            }
        },

        handleAddToCart(isBuyNow) {
            const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true
            });
            let existItem;
            if (cartItemsOnCookie) {
                existItem = cartItemsOnCookie.cartItems.find(
                    item => item.id === this.product.id
                );
            }

            let item = {
                id: this.product.id,
                quantity: this.quantity,
                price: this.product.price
            };
            if (existItem !== undefined) {
                if (this.quantity + existItem.quantity > 10) {
                    this.$notify({
                        group: 'addCartSuccess',
                        title: 'Waring!',
                        text: `No se pueden agregar mas de 10 productos`
                    });
                    if (isBuyNow && isBuyNow === true) {
                        setTimeout(
                            function() {
                                this.$router.push('/account/checkout');
                            }.bind(this),
                            500
                        );
                    }
                } else {
                    this.addItemToCart(item);
                }
            } else {
                this.addItemToCart(item);
            }
        },

        addItemToCart(payload) {
            this.$store.dispatch('cart/addProductToCart', payload);
            this.getCartProduct(this.cartItems);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Success!',
                text: `${this.product.title} | se ah ageegado al carrito!`
            });
        },

        handleAddToWishlist() {
            let item = {
                id: this.product.id
            };

            this.$store.dispatch('wishlist/addItemToWishlist', item);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Add to wishlist!',
                text: `${this.product.title} | se ah agregado a favoritos!`
            });
        },

        handleAddToCompare() {
            let item = {
                id: this.product.id
            };
            this.$store.dispatch('compare/addItemToCompare', item);
            this.$notify({
                group: 'addCartSuccess',
                title: 'Add to Compare!',
                text: `${this.product.title} | se ah agregado a comparar!`
            });
        },

        async getCartProduct(products) {
            let listOfIds = [];
            products.forEach(item => {
                listOfIds.push(item.id);
            });
            await this.$store.dispatch('product/getCartProducts', listOfIds);
        },

        async loadCartProducts() {
            const cartItemsOnCookie = this.$cookies.get('cart', {
                parseJSON: true
            });
            let queries = [];
            cartItemsOnCookie.cartItems.forEach(item => {
                queries.push(item.id);
            });
            if (this.cartItems.length > 0) {
                await this.$store.dispatch('product/getCartProducts', queries);
            } else {
                this.$store.commit('product/setCartProducts', null);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
