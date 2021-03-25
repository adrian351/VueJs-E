<template lang="html">
    <div class="ps-footer__widgets">
        <aside class="widget widget_footer widget_contact-us">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.contactUs') }}
            </h4>
            <div class="widget_content">
                <p>Llámenos 24/7</p>
                <h3>1800 97 97 69</h3>
                <p>
                    502 New Design Str, Melbourne, Australia <br />
                    <a href="mailto:contact@martfury.co">contact@martfury.co</a>
                </p>
                <ul class="ps-list--social">
                    <li>
                        <a class="facebook" href="#">
                            <i class="fa fa-facebook"></i>
                        </a>
                    </li>
                    <li>
                        <a class="twitter" href="#">
                            <i class="fa fa-twitter"></i>
                        </a>
                    </li>
                    <li>
                        <a class="google-plus" href="#">
                            <i class="fa fa-google-plus"></i>
                        </a>
                    </li>
                    <li>
                        <a class="instagram" href="#">
                            <i class="fa fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.quickLink') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link to="/page/politics">Políticas</nuxt-link>
                    
                </li>
                <li>
                    <nuxt-link to="/page/blank">Término & Condición</nuxt-link>
                    
                </li>
                <!-- <li>
                    <a href="#">Envío</a>
                </li> -->
                <!-- <li>
                    <a href="#">devolución</a>
                </li> -->
                <li>
                    <nuxt-link to="/page/faqs">Preguntas frecuentes</nuxt-link>
                    
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.company') }}
            </h4>
            <ul class="ps-list--link">
                <li>
                    <nuxt-link to="/page/about-us">Sobre nosotros</nuxt-link>
                </li>
                
                <li>
                    <nuxt-link to="/page/contact-us">Contacto</nuxt-link>
                </li>
            </ul>
        </aside>
        <aside class="widget widget_footer">
            <h4 class="widget-title">
                {{ $t('footer.widgetHeading.bussiness') }}
            </h4>
            <ul class="ps-list--link">
               
                <li>
                    <nuxt-link to="/account/user-information">Mi cuenta</nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/shop">Tienda</nuxt-link>
                    
                </li>
            </ul>
        </aside>
    </div>
</template>

<script>
export default {
    name: 'FooterWidgets'
};
</script>

<style lang="scss" scoped></style>
