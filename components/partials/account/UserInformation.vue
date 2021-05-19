<template lang="html">
    <section class="ps-my-account ps-page--account">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="ps-section__left">
                        <aside class="ps-widget--account-dashboard">
                            <div class="ps-widget__header">
                                <img src="/img/users/3.jpg" />
                                <figure>
                                    <figcaption>Hola</figcaption>
                                    <p>username@gmail.com</p>
                                </figure>
                            </div>
                            <div class="ps-widget__content">
                                <AccountLinks :links="accountLinks" />
                            </div>
                        </aside>
                    </div>
                </div>
                <div class="col-lg-8">
                    <section class="ps-section--account-setting">
                        <div class="ps-section__content">
                            <p>No product here.</p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AccountLinks from './modules/AccountLinks';
import axios from 'axios';
export default {
    name: 'UserInformation',
    components: { AccountLinks },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Información de mi cuenta',
                    url: '/account/user-information',
                    icon: 'icon-user',
                },
                {
                    text: 'Notificaciones',
                    url: '/account/notifications',
                    icon: 'icon-alarm-ringing'
                },
                {
                    text: 'Facturas',
                    url: '/account/invoices',
                    icon: 'icon-papers'
                },
                {
                    text: ' Direccion de envio',
                    url: '/account/addresses',
                    icon: 'icon-map-marker'
                },
                {
                    text: 'Producto visto recientemente',
                    url: '/account/recent-viewed-product',
                    icon: 'icon-store',
                    active: true
                },
                {
                    text: 'Favoritos',
                    url: '/account/wishlist',
                    icon: 'icon-heart'
                }
            ]
        };
    },

    // obtener datos del usurio auntenticado
    created(){
        this.getUserProfile()
    },

    methods:{
        async getUserProfile(){
            const response = await axios.get('http://127.0.0.1:8000/api/auth/user-profile').then((res) =>{
                this.result = res.data,

                console.log(response);
                console.log(res.data);
            });
        }
    }
    
};
</script>

<style lang="scss" scoped></style>
