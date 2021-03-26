<template lang="html">  
  <div class="ps-form__billing-info">
    
        <h3 class="ps-form__heading">
            Cotizando Pedido
        </h3>

        <div class="form-group">
            <label>Numero de telefono<sup>*</sup></label>
            <v-text-field
                placeholder="phone number"
                outlined
                height="50"
                type="tel"
                required
                
            />
        </div>

        <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Nombre </label>
                    <v-text-field
                        placeholder="Nombre"
                        outlined
                        height="50"
                        required
                    />
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <label>Apellidos </label>
                    <v-text-field
                        placeholder="Apellidos"
                        outlined
                        height="50"
                        required
                        
                    />
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <label>Cantidad de arcones </label>
                    <v-text-field
                        placeholder="...."
                        outlined
                        height="50"
                        type="number"
                        required
                    />
                </div>
            </div>
          </div>

          <div class="form-group">
            <label>Empresa</label>
            <v-text-field
                
                placeholder="Nombre de empresa"
                outlined
                height="50"
            />
          </div>
          <div class="form-group">
            <v-checkbox
                color="success"
                label="No soy una empresa"
               
            />
          </div>

          <div class="row">
            <div class="col-sm-6">
                <div class="form-group">
                    <label>Ciudad</label>
                    <v-text-field placeholder="City" outlined height="50" required/>
                    
                </div>
            </div>

            <div class="col-sm-6">
                <div class="form-group">
                    <label>Código Postal</label>
                    <v-text-field
                        placeholder="Postal Code"
                        outlined
                        height="50"
                        required
                    />
                </div>
            </div>
          </div>

          <div class="ps-form__submit">
            <nuxt-link to="/shop">
                <i class="icon-arrow-left mr-1"></i>
                Regresar 
            </nuxt-link>
            <div class="ps-block__btn">
                <button  @click="handleToShipping">
                    Solicitar cotización 
                </button>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name : 'Cotizar',

    

}


</script>