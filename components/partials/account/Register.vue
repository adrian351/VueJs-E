<template lang="html">
    <form>
        <div class="ps-form__content">
            <h4>Regístrate</h4>
            <div class="form-group">
                <label>Correo electrónico:</label>
                <v-text-field
                    v-model="username"
                    :error-messages="usernameErrors"
                    @input="$v.username.$touch()"
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
                    placeholder="Password"
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
                    placeholder="Password"
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
        </div>
    </form>
</template>

<script>
import { email, required } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Register',
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
        },
        repetPassword(){
            const errors = [];
            if(!this.$v.passwordRepeat.$dirty) return errors;
        }
    },
    data() {
        return {
            username: '',
            password: '',
            passwordRepeat: ''
        };
    },
    validations: {
        username: { required },
        password: { required },
        passwordRepeat: {required}
    },
    methods: {
        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$router.push('/account/login');


                console.log(this.username);
                cosnole.log(this.password);
                console.log(this.passwordRepeat);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
