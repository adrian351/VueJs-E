<template lang="html">
    <div class="ps-filter ">
        <aside class="container">
            <ul 
                class="ps-block-content--armar"
                v-if="categories !== undefined"
            >
                <li  
                    class="ps-filter--armar"
                    v-for="category in categories" 
                    :key="category.id"
                >
                    <a 
                        href="/"
                        @click.prevent="handleGotoCategory(category.slug)"
                    >
                        {{category.name}}
                    </a>
                </li>

               <!-- <div  class="ps-filter--armar">
                    <a>
                        Galletas
                    </a>
                </div>

                <div  class="ps-filter--armar">
                    <a>
                        Domino
                    </a>
                </div>

                <div  class="ps-filter--armar">
                    <a>
                        Chocolates
                    </a>
                </div>

                <div  class="ps-filter--armar">
                    <a>
                        Arcon
                    </a>
                </div>

                <div  class="ps-filter--armar">
                    <a>
                        Canasta
                    </a>
                </div>

                <div  class="ps-filter--armar">
                    <a>
                        fdghbjnm
                    </a>
                </div>
                <div  class="ps-filter--armar">
                    <a href="/shop"
                    
                    >
                        dsxfgbc
                    </a>
                </div>

                <div  class="ps-filter--armar">
                    <a
                        href="/shop"
                        @click="filter"

                    >
                        dxfgbc
                    </a>
                </div> -->

            </ul>
        </aside>
        
        <div class="ps-shopping__content">
            <div v-if="queries" class="ps-shopping__queries">
                <a v-for="query in queries" href="/" @click.prevent="">
                    {{ query }}
                </a>
            </div>
            <div v-if="listView === false" class="ps-shopping-product">
                <div class="row">
                    <div
                        v-for="product in products"
                        class="col-xl-2 col-lg-4 col-md-4 col-sm-6 col-6 "
                        :key="product.id"
                    >
                        <product-default :product="product" />
                    </div>
                </div>
                <footer class="mt-30">
                    <v-pagination
                        color="#fcb800"
                        total-visible="8"
                        v-model="page"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    />
                </footer>
            </div>
            <div v-else class="ps-shopping-product">
                <product-wide
                    v-for="product in products"
                    :product="product"
                    :key="product.id"
                />
                <footer class="mt-30">
                    <v-pagination
                        color="#fcb800"
                        v-model="page"
                        total-visible="8"
                        :length="paginationLenght"
                        @input="handleChangePagination"
                    />
                </footer>
            </div>
        </div>
    </div>

</template>

<script>

import { mapState } from 'vuex';
import { getColletionBySlug } from '~/utilities/product-helper';
import ProductDefault from '~/components/elements/product/ProductDefault';
import ProductWide from '~/components/elements/product/ProductWide';

export default {
    name:'PrdocutFilter',
    components:{
       ProductWide,
       ProductDefault
    },

    computed:{
        ...mapState({
            categories: state => state.product.categories,
            products: state => state.product.products,
            queries: state => state.collection.queries
        }),
        categorySlug(){
            return this.$route;
        },

        paginationLenght() {
            if (this.total % 12 === 0) {
                return parseInt(this.total / this.pageSize);
            } else {
                return parseInt(this.total / 12 + 1);
            }
        }
    },

    data() {
        return {
            listView: false,
            page: 1,
            pageSize: 12
        };
    },
    methods: {
        async handleGotoCategory(slug) {
            if (slug) {
                const url = `/shop?category=${slug}`;
                const products = getColletionBySlug(this.categories, slug);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setTotal', products.length);
                this.$store.commit('collection/setQueries', [slug]);
                this.$router.push(url);
            } else {
                const params = {
                    _start: 1,
                    _limit: 12
                };
                await this.$store.commit('collection/setQueries', null);
                await this.$store.dispatch('product/getTotalRecords', params);
                await this.$store.dispatch('product/getProducts', params);
            }
        },

        async handleChangePagination(value) {
            const params = {
                _start: value === 1 ? 0 : (value - 1) * 12,
                _limit: 12
            };
            await this.$store.dispatch('product/getProducts', params);
        },
        handleChangeViewMode() {
            this.listView = !this.listView;
        }
    },
}
</script>