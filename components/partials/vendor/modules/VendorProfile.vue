<template lang="html">
    <div class="ps-block--vendor">
        <div class="ps-block__thumbnail">
            <!-- <img src="/img/vendor/vendor-store.jpg" alt="martfury" /> -->
        </div>
        <div class="ps-block__container">
            <div class="ps-block__header">
                <h4>Mi canasta</h4>
            </div>
            <div class="ps-block__divider">
              
            </div>

            <div class="ps-block__content">
                <VendorBrands/>
                
                
            </div>
            <div class="ps-block__footer">
                
                <a class="ps-btn ps-btn--fullwidth" href="/account/Checkout">
                    Listo!
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import Rating from '~/components/elements/Rating';
import VendorBrands from './VendorBrands';

export default {
    name: 'VendorProfile',
    components: { VendorBrands, Rating }
};
</script>

<style lang="scss" scoped></style>
