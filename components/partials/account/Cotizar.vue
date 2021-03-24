<template lang="html">
    <div class="ps-checkout ps-section--shopping">
        <div class="container">
            <div class="ps-section__header">
                <h1>Proceso de Cotizacion</h1>
            </div>
            <div class="ps-section__content">
                <div class="ps-form--cotizar">
                    <div class="ps-form__content">
                        <div class="row">
                            <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
                                <form-cotizar />
                            </div>
                            <div
                                class="col-xl-4 col-lg-4 col-md-12 col-sm-12  "
                            >
                                <module-info-cotizar/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormCotizar from '~/components/partials/account/modules/FormCotizar';
import ModuleInfoCotizar from '~/components/partials/account/modules/ModuleInfoCotizar';


export default {
    name: 'Cotizar',
    components: {  FormCotizar, ModuleInfoCotizar }
};
</script>

<style lang="scss" scoped></style>