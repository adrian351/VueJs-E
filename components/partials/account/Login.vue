<template lang="html">
    <form method="POST">
        <div class="ps-form__content">
            <h4>Iniciar sesion en mi cuenta</h4>
            <div class="form-group">
                <label>Usuario:</label>
                <v-text-field
                    v-model="username"
                    class="ps-text-field"
                    :error-messages="nameErrors"
                    @input="$v.username.$touch()"
                    type="text"
                    placeholder="Usernamer or email"
                    height="50"
                    outlined
                />  
            </div>
            <p>{{$v.username}}</p>
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
            <p>{{$v.password}}</p>
            <div class="form-group">
                <v-checkbox label="Recordarme" color="warning" />
            </div>
            <div class="form-group submit">
                <p class="error" v-if="error">algo ha salido mal</p>
                <button
                    type="submit"
                    class="ps-btn ps-btn--fullwidth"
                    @click.prevent="handleSubmitLogin"
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
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Login',
    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('Este campo es obligatorio');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('Este campo es obligatorio');
            return errors;
            console.log(error);
        }

        
    },
    data() {
        return {
            username: '',
            password: '',
            error: false
        };
    },
    validations: {
        
        username: { required },
        password: { required }
    },
    methods: {
        async handleSubmitLogin() {
            let url ="http://127.0.0.1:8000/api/login";

            
            try{
                const response = await axios.post(url, this.username, this.password);
                console.log(response);

                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.$store.dispatch('auth/setAuthStatus', true);
                    this.$router.push('/');
                    
                }
            }catch(error){
                // this.error = true;
                console.log(error);
            }

            console.log(this.username);
            console.log(this.password);
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
