<template lang="html">
    <div class="ps-dropdown language">
        <a href="#" @click.prevent>
            <img :src="selectedLocale.image" alt="" />
            {{ selectedLocale.text }}
        </a>
        <ul class="ps-dropdown-menu">
            <li v-for="language in languages" :key="language.id">
                <a
                    href="#"
                    @click.prevent="handleSwitchLanguage(language.code)"
                >
                    <img :src="language.image" alt="" />
                    {{ language.text }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'LanguageSwicher',
    computed: {
        currentLocale() {
            return this.$i18n.locale;
        },
        selectedLocale() {
            return this.languages.find(
                item => item.code === this.currentLocale
            );
        }
    },
    data() {
        return {
            languages: [
                {
                    id: 1,
                    code: 'en',
                    image: '/img/flag/es.gif',
                    text: 'Español'
                },
               
            ]
        };
    },
    methods: {
        handleSwitchLanguage(locale) {
            this.$router.push(this.switchLocalePath(locale));
        }
    }
};
</script>

<style lang="scss" scoped></style>
