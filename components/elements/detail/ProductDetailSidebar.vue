<template lang="html">
    <div class="ps-product--detail ps-product--fullwidth">
        <div class="ps-product__header">
            <thumbnail-sidebar :product="product" />
            <information-sidebar :product="product" />
        </div>
        <default-description />
    </div>
</template>

<script>
import DefaultDescription from '~/components/elements/detail/modules/DefaultDescription';
import InformationDefault from '~/components/elements/detail/information/InformationDefault';
import ThumbnailDefault from '~/components/elements/detail/thumbnail/ThumbnailDefault';
import { countdown } from '~/static/data/product';
import ThumbnailSidebar from '~/components/elements/detail/thumbnail/ThumbnailSidebar';
import InformationSidebar from '~/components/elements/detail/information/InformationSidebar';
export default {
    name: 'ProductDetailSidebar',
    components: {
        InformationSidebar,
        ThumbnailSidebar,
        DefaultDescription
    },
    computed: {
        product() {
            return countdown;
        }
    }
};
</script>

<style lang="scss" scoped></style>
