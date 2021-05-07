<template lang="html">
    <form >
        <div class="ps-form__content">
            <h4>Regístrate</h4>
            <div class="form-group">
                <label>Nombre:</label>
                <v-text-field
                    v-model="name"
                    :error-messages="nameErrors"
                    @input="$v.name.$touch()"
                    placeholder="Nombre"
                    class="ps-text-field"
                    outlined
                    height="20"
                />
            </div>
            <div class="form-group">
                <label>Apellidos:</label>
                <v-text-field
                    v-model="firtsName"
                    :error-messages="firtsNameErrors"
                    @input="$v.firtsName.$touch()"
                    placeholder="Apellidos"
                    class="ps-text-field"
                    outlined
                    height="20"
                />
            </div>
            <div class="form-group">
                <label>Teléfono móvil: </label>
                <v-text-field
                    v-model= "phone"
                    :error-messages="phoneErrors"
                    @input="$v.phone.$touch()"
                    placeholder="Phone"
                    class="ps-text-field"
                    outlined
                    type="text"
                />
            </div>
            <div class="form-group">
                <label>Correo electrónico:</label>
                <v-text-field
                    v-model="email"
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    placeholder="Email Address"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <label>Contraseña:</label>
                <v-text-field
                    v-model="password"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="****"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <label>Confirmar contraseña:</label>
                <v-text-field
                    v-model="passwordRepeat"
                    :error-messages="passwordRepeatErrors"
                    @input="$v.passwordRepeat.$touch()"
                    placeholder="****"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group submit">
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmit"
                >
                    Registrar
                </button>
            </div>
        </div>
        <div class="ps-form__footer">
            <p>Canastas y Arcones</p>
        </div>
        <!-- <div class="ps-form__footer">
            <p>Conectarse con:</p>

            <ul class="ps-list--social">
                <li>
                    <a href="#" class="facebook">
                        <i class="fa fa-facebook"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="google">
                        <i class="fa fa-google-plus"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="twitter">
                        <i class="fa fa-twitter"></i>
                    </a>
                </li>
                <li>
                    <a href="#" class="instagram">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div> -->
    </form>
</template>

<script>
import axios from 'axios';
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Register',

     data() {
        return {
            // form:{ }
                name:'',
                firtsName:'',
                email: '',
                phone:'',
                password: '',
                passwordRepeat: ''  
           
        };
    }, 

    computed: {
        emailErrors() {
            const errors = [];
            if (!this.$v.email.$dirty) return errors;
            !this.$v.email.required && errors.push('Este campo es obligatorio');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('Este campo es obligatorio');
            return errors;
        },
        passwordRepeatErrors(){
            const errors = [];
            if(!this.$v.passwordRepeat.$dirty) return errors;
            !this.$v.passwordRepeat.required && errors.push('Este campo es obligatorio');
            return errors;
        },

        firtsNameErrors(){
            const errors = [];
            if(!this.$v.firtsName.$dirty) return errors;
            !this.$v.firtsName.required && errors.push('Este campo es obligatorio');
             return errors;
        },

        nameErrors(){
            const errors = [];
            if(!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push('Este campo es obligatorio');
             return errors;

        },

        phoneErrors(){
            const errors = [];
            if(!this.$v.phone.$dirty) return errors;
            !this.phone.required && errors.push('Este campo es obligatorio');
            return errors;
        }
    },

    validations: {
        name:{  required },
        firtsName:{ required},
        email: { required},
        phone: { required},
        password: { required},
        passwordRepeat: {required}
    },

     created() {
            this.getUser();
    },

    methods: {
        async  handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$router.push('/account/login');
                this.$router.push('/');

                console.log(this.name);
                console.log(this.firtsName);
                console.log(this.email);
            // try{
            //     await auth.register(this.datos);
            //     this.$router.push('/');
            //     console.log(response);
            // }catch{
            //     console.log(error);
             }
                
        },

       
            // llamada a la api
        async getUser(){

            let res = await axios.get('http://127.0.0.1:8000/api/usuarios')
            this.result = res.data;

            console.log(res.data);
        }
        
    }
};
</script>

<style lang="scss" scoped></style>
