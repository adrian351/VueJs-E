<template lang="html">
    <div class="ps-page--404">
        <div class="container">
            <div class="ps-section__content">
                <figure v-if="error.statusCode === 404">
                    <img src="~/static/img/404.jpg" alt="" />
                    <h3>¡Oh! No hemos encontrado esta página</h3>
                    <p>
                        Parece que no podemos encontrar lo que estás buscando.
                        <br />
                        Volver a
                        <a class="ps-highlight" href="/">Página de inicio</a>
                    </p>
                </figure>
                <figure v-else>
                    <p>
                        Parece que no podemos encontrar lo que estás buscando.
                        <br />
                        Volver a
                        <a class="ps-highlight" href="/">Página principal</a>
                    </p>
                </figure>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderDefault from '~/components/shared/headers/HeaderDefault';
import FooterDefault from '~/components/shared/footers/FooterDefault';
export default {
    components: { FooterDefault, HeaderDefault },
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null
        }
    },
    head() {
        const title =
            this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title
        };
    },

    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred'
        };
    }
};
</script>
