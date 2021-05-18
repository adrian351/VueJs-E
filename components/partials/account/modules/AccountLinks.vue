<template lang="html">
    <ul>
        <template v-for="link in links">
            <li :key="link.text" :class="link.active ? 'active' : ''">
                <nuxt-link :to="link.url">
                    <i :class="link.icon"></i>
                    {{ link.text }}
                </nuxt-link>
            </li>
        </template>
        <li>
            <nuxt-link to="/account/my-account">
                <a @click.prevent="handleLogout">
                    <i class="icon-power-switch"></i>
                    Logout
                </a>
            </nuxt-link>
        </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'AccountLinks',
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },

    computed: {
        ...mapState({
            isLoggedIn: state => state.auth.isLoggedIn
        })
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
