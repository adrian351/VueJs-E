<template lang="html">
    <div class="ps-page--single ps-page--vendor">

        <bread-crumb :breadcrumb="breadCrumb" />
        <vendor-store />

        <CotizarPedido/>
    </div>
    

</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';
import VendorStore from '~/components/partials/vendor/VendorStore';
import CotizarPedido from '~/components/partials/shop/sections/CotizarPedido';

export default {
    components: {
        BreadCrumb,
        VendorStore,
        CotizarPedido
        
    },

    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Mi canasta'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
