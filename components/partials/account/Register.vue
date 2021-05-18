<template lang="html">
    <form  method="POST">
        <div class="ps-form__content">
            <h4>Regístrate</h4>
            <div class="form-group">
                <label>Nombre:</label>
                <v-text-field
                    v-model="form.name"
                    :error-messages="nameErrors"
                    @input="$v.form.name.$touch()"
                    placeholder="Nombre"
                    required
                    class="ps-text-field"
                    outlined
                    height="20"
                />
            </div>
            <div class="form-group">
                <label>Apellidos:</label>
                <v-text-field
                    v-model="form.firtsName"
                    :error-messages="firtsNameErrors"
                    @input="$v.form.firtsName.$touch()"
                    placeholder="Apellidos"
                    class="ps-text-field"
                    outlined
                    height="20"
                />
            </div>
            <div class="form-group">
                <label>Teléfono móvil: </label>
                <v-text-field
                    v-model="form.phone_number"
                    :error-messages="phone_numberErrors"
                    @input="$v.form.phone_number.$touch()"
                    placeholder="Phone"
                    class="ps-text-field"
                    outlined
                   
                />
            </div>
            <div class="form-group">
                <label>Correo electrónico:</label>
                <v-text-field
                    v-model.lazy="form.email"
                    :error-messages="emailErrors"
                    @input="$v.form.email.$touch()"
                    type="email"
                    placeholder="Email "
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <label>Contraseña:</label>
                <v-text-field
                    v-model="form.password"
                    :error-messages="passwordErrors"
                    @input="$v.form.password.$touch()"
                    type="password"
                    placeholder="****"
                    class="ps-text-field"
                    outlined
                    height="50"
                />
            </div>
            <div class="form-group">
                <label>Confirmar contraseña:</label>
                <v-text-field
                    v-model="form.password_confirmation"
                    :error-messages="passwordErrors"
                    @input="$v.form.password_confirmation.$touch()"
                    type="password"
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
                    @click.prevent="register"    
                >
                    Registrar
                </button>
            </div>
        </div>
        <div class="ps-form__footer"> 
            <p class="msg">
                ¿Yatienes cuenta?
                <nuxt-link to="Login">Inicia sesion</nuxt-link>
            </p>
        </div>
        <!-- Servicios de inicio de sesion -->
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
// import auth from '~/store/auth';
import { email, required, sameAs, minLength } from 'vuelidate/lib/validators';
import { validationMixin } from 'vuelidate';

export default {
    name: 'Register',

     data() {
        return { 
            form:{ 
                name:'',
                firtsName:'',
                email: '',
                phone_number:'',
                password: '',
                password_confirmation: ''
            }
        };
    }, 

    computed: {
         nameErrors(){
            const errors = [];
            if(!this.$v.form.name.$dirty) return errors;
            !this.$v.form.name.required && errors.push('Este campo es obligatorio');
             return errors;
        },
         firtsNameErrors(){
            const errors = [];
            if(!this.$v.form.firtsName.$dirty) return errors;
            !this.$v.form.firtsName.required && errors.push('Este campo es obligatorio');
             return errors;
        },
        phone_numberErrors(){
            const errors = [];
            if(!this.$v.form.phone_number.$dirty) return errors;
            !this.form.phone_number.required && errors.push('Este campo es obligatorio');
            return errors;
        },
        emailErrors() {
            const errors = [];
            if (!this.$v.form.email.$dirty) return errors;
            !this.$v.form.email.email && errors.push('Email incorrecto')
            !this.$v.form.email.required && errors.push('Este campo es obligatorio');
            return errors;
        },
        passwordErrors() {
            const errors = [];
            if (!this.$v.form.password.$dirty) return errors;
            // !this.$v.form.password.minLength && errors.push('Minimo 8 caracteres');
            !this.$v.form.password.required && errors.push('Este campo es obligatorio )');
            return errors;
        },
        passwordRepeat(){
            const errors = [];
            if(!this.$v.form.password_confirmation.$dirty) return errors;
            !this.$v.form.password_confirmation.required && errors.push('Este campo es obligatorio (minimo 8 caracteres))' );
            return errors;
         }
    },

    validations: {
        form:{
            name:{ required},
            firtsName:{ required},
            email: { required, email},
            phone_number:{required},
            password:{required: minLength(8) },
            password_confirmation: {sameAsPassword: sameAs ('password')}
        }
    },

    created() {
        this.getUser();
    },
    methods: {
        async  register() {
           let url = "http://127.0.0.1:8000/api/auth/register";
            try{
                const response = await axios.post(url,this.form);

                 this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.$router.push('/account/login');
                    this.$router.push('/');

                    console.log('todo salio bien ');
                    console.log(response);
                }   else{
                    console.log('Se genero un error');
                }    
            }   catch(error){
                console.log(error);
            }
            console.log(this.form.name);
            console.log(this.form.firtsName);
            console.log(this.form.email);
            console.log(this.form.phone_number);
            console.log(this.form.password);    
            console.log(this.form.password_confirmation);   
        },
            // llamada a la api
        async getUser(){
            let res = await axios.get('http://127.0.0.1:8000/api/auth/usuarios')
            this.result = res.data;

            console.log(res.data);
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
