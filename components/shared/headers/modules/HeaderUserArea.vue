<template lang="html">
    <div v-if="!isLoggedIn" class="ps-block--user-header">
        <div class="ps-block__left">
            <i class="icon-user"></i>
        </div>
        <div class="ps-block__right">
            <nuxt-link to="/account/login">
                {{ $t('header.login') }}
            </nuxt-link>
            <nuxt-link to="/account/register">
                {{ $t('header.register') }}
            </nuxt-link>
        </div>
    </div>
    <div v-else class="ps-block--user-account">
        <i class="icon-user"></i>
        <div class="ps-block__content">
            <ul class="ps-list--arrow">
                <li v-for="link in accountLinks" :key="link.text">
                    <nuxt-link :to="link.url">
                        {{ link.text }}
                    </nuxt-link>
                </li>
                <li class="ps-block__footer">
                    <a href="#" @click.prevent="handleLogout">
                       Cerrar sesión
                       <i class="icon-arrow-right ml-1"></i> 
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'HeaderUserArea',
    computed: {
        ...mapState({
            isLoggedIn: state => state.auth.isLoggedIn
        })
    },
    data() {
        return {
            accountLinks: [
                {
                    text: 'Información de la cuenta',
                    url: '/account/user-information'
                },
                {
                    text: 'Notificaciones',
                    url: '/account/notifications'
                },
                {
                    text: 'Facturas',
                    url: '/account/invoices'
                },
                {
                    text: 'Dirección',
                    url: '/account/addresses'
                },
                {
                    text: 'Favoritos',
                    url: '/account/wishlist'
                }
            ]
        };
    },
    methods: {
        handleLogout() {
            this.$store.dispatch('auth/setAuthStatus', false);
            this.$router.push('/account/login');
        }
    }
};
</script>

<style lang="scss" scoped></style>
