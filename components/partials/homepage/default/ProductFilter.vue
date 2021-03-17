<template lang="html">
    <div class="ps-filter ">
        <div class="container">
            <div class="ps-block-content--armar">
                <div  class="ps-filter--armar">
                    <a>
                        Vino
                    </a>
                </div>

                <div  class="ps-filter--armar">
                    <a>
                        Wisky
                    </a>
                </div>

                <div  class="ps-filter--armar">
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
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'PrdocutFilter',


    methods:{
        filter(){
           if (slug) {
                const url = `/shop?category=${slug}`;
                const products = getColletionBySlug(this.categories, slug);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setProducts', products);
                this.$store.commit('product/setTotal', products.length);
                this.$store.commit('collection/setQueries', [slug]);
                this.$router.push(url);
            }
        },
    },

}
</script>