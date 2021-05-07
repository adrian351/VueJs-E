<template lang="html">
    <form>
        <div class="ps-form__content">
            <h4>Iniciar sesion en mi cuenta</h4>
            <div class="form-group">
                <label>Usuario:</label>
                <v-text-field
                    v-model="username"
                    class="ps-text-field"
                    :error-messages="usernameErrors"
                    @input="$v.username.$touch()"
                    placeholder="Usernamer or email"
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
                    @click.prevent="handleSubmit"
                >
                    Iniciar sesión
                </button>
            </div>
        </div>
        <div class="ps-form__footer">
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
        handleSubmit() {
            this.$v.$touch();
            if (!this.$v.$invalid) {
                this.$store.dispatch('auth/setAuthStatus', true);
                this.$router.push('/');

                console.log(this.username);
                console.log(this.password);
            }
        }
    }
};
</script>

<style lang="scss" scoped></style>
