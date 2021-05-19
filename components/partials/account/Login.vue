<template lang="html">
    <form method="POST">
        <div class="ps-form__content">
            <h4>Iniciar sesion en mi cuenta</h4>
            <div class="form-group">
                <label>Usuario:</label>
                <v-text-field
                    v-model="email"
                    class="ps-text-field"
                    :error-messages="emailErrors"
                    @input="$v.email.$touch()"
                    type="email"
                    placeholder="Username or email"
                    height="50"
                    outlined
                />  
            </div>
            <div class="form-group">
                <label>Contraseña:</label>
                <v-text-field
                    v-model="password"
                    type="password"
                    class="ps-text-field"
                    :error-messages="passwordErrors"
                    @input="$v.password.$touch()"
                    placeholder="****"
                    height="50"
                    outlined
                />
            </div>
            <div class="form-group">
                <v-checkbox label="Recordarme" color="warning" />
            </div>
            <div class="form-group submit">
                <p class="error" v-if="error">algo ha salido mal</p>
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="submitLogin"   
                >
                    Iniciar sesión
                </button>
            </div>
        </div>
        <div class="ps-form__footer">
            <p class="msg">
            ¿No tienes cuenta?
                <nuxt-link to="Register">Registrate</nuxt-link>
            </p>
            <!-- <p>Connect with:</p>
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
            </ul> -->
        </div>
    </form>
</template>

<script>

import axios from 'axios';
// import auth from '~/store/auth';
import { email, required, minLength } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
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

            // console.log(errors);
        } 
    },
    data() {
        return {
            email: '',
            password: '',
            error: false
        };
    },
    validations: {
        email: { required, email },
        password: {
             required,
             minLength: minLength(8) }
    },
    methods: {
        async submitLogin() {
            console.log("loggin");
            let user = {
                email: this.email,
                password: this.password
            }
            console.log(user)
            let url = 'http://127.0.0.1:8000/api/auth/login'
            try{
                const response = await axios.post(url, user).then((res) => {    
                    this.result = res.data,

                    console.log( res.data),
                    console.log(response)
                })

                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.$store.dispatch('auth/setAuthStatus', true);
                    this.$router.push('/');
                
                    console.log('token generado');
                }
            }catch(error){
                 // this.error = true;
                console.log(error);
            }
        } 
    } 
};
</script>

<style lang="scss" scoped>
.msg {
  margin-top: 3rem;
  text-align: center;
}
</style>
