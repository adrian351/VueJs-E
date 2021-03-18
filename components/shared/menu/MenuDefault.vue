<template lang="html">
    <ul :class="className">
        <template v-for="item in mainMenu">
            <MenuDropdown v-if="item.subMenu" :menu-data="item" />
            <MenuMega v-else-if="item.mega" :menu-data="item" />
            <li v-else :key="item.text">
                <nuxt-link :to="localePath(item.url)">
                    {{ item.text }}
                </nuxt-link>
            </li>
        </template>
    </ul>
</template>

<script>
import MenuDropdown from './MenuDropdown';
import MenuMega from './MenuMega';
export default {
    name: 'MenuDefault',
    components: { MenuMega, MenuDropdown },
    props: {
        className: {
            type: String,
            default: 'menu'
        }
    },
    data() {
        return {
            mainMenu: [
                {
                    text: this.$i18n.t('menu.mainMenu.home'),
                    url: '/',
                    
                },
                {
                    text: this.$i18n.t('menu.mainMenu.shop'),
                    url: '/shop',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: this.$i18n.t('menu.mainMenu.catalogPages'),
                            megaItems: [
                                
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shopWithoutBanner'
                                    ),
                                    url: '/shop/shop-sidebar-without-banner'
                                },
                                
                            ]
                        },
                        {
                            heading: this.$i18n.t(
                                'menu.mainMenu.ecomercePages'
                            ),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.shoppingCart'
                                    ),
                                    url: '/account/shopping-cart'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.checkout'
                                    ),
                                    url: '/account/checkout'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.whishlist'
                                    ),
                                    url: '/account/wishlist'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.compare'),
                                    url: '/account/compare'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.myAccount'
                                    ),
                                    url: '/account/login'
                                },
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.loginOrregister'
                                    ),
                                    url: '/account/login'
                                }
                            ]
                        }
                    ]
                },
                {
                    text: this.$i18n.t('menu.mainMenu.pages'),
                    url: '/',
                    extraClass: 'menu-item-has-children has-mega-menu',
                    subClass: 'sub-menu',
                    mega: 'true',
                    megaContent: [
                        {
                            heading: this.$i18n.t('menu.mainMenu.basicPage'),
                            megaItems: [
                                {
                                    text: this.$i18n.t('menu.mainMenu.aboutUs'),
                                    url: '/page/about-us'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.contact'),
                                    url: '/page/contact-us'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.faqs'),
                                    url: '/page/faqs'
                                },
                                {
                                    text: this.$i18n.t('menu.mainMenu.politics'),
                                    url: '/page/politics'
                                }
                            ]
                        },
                        {
                            heading: this.$i18n.t('menu.mainMenu.vendorPages'),
                            megaItems: [
                                {
                                    text: this.$i18n.t(
                                        'menu.mainMenu.vendorStore'
                                    ),
                                    url: '/vendor/vendor-store'
                                }
                                
                            ]
                        }
                    ]
                },
                {
                    text: this.$i18n.t('menu.mainMenu.blogs'),
                    url: '/blog',
                    current: 'shop',
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>
