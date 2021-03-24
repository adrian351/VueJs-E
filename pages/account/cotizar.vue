<template lang="html">
    <section class="ps-page--my-account">
        <bread-crumb :breadcrumb="breadCrumb" />
        <cotizar />
    </section>
</template>

<script>

import BreadCrumb from '~/components/elements/BreadCrumb';
import Cotizar from '~/components/partials/account/Cotizar';
export default {
    
    components: {
        Cotizar,
        BreadCrumb
    },
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text:'Shop',
                    url: '/Shop'
                },                {
                    text: 'Cotizar',
                    url: '/account/cotizar'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
