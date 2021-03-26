<template>
     <div class="ps-armarC">
        <div class="ps-container">
            <div class="ps-block--armarC">
            <!-- <span>Cotiza tu pedido aqui:</span> -->
                <div class="ps-block__btn">
                    
                    <button  >
                        <nuxt-link to="/account/Cotizar">
                           <i class="icon-wallet mr-1"></i> Cotizar Pedido
                        </nuxt-link> 
                    </button>
                    
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name:'Cotizar'
}
</script>

<style scoped>

</style>