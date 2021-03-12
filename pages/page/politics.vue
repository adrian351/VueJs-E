<template lang="html">
    <div class="ps-page--single">
        <bread-crumb :breadcrumb="breadCrumb" />
        <div class="ps-section--custom">
            <div class="container">
                <div class="ps-section__header">
                    <h1>Politicas de Privacidad</h1><hr/>
                </div>
                <div class="ps-section__content">
                    <h3>Quiénes somos</h3>
                    
                    <p> 
                       Somos una empresa comprometida en el servicio y atención al cliente contamos con años de experiencia en el diseño, venta, comercialización de Canastas y Arcones Navideños CDMX para empresas y ejecutivos; elaborados con una diversidad de productos que se pueden adaptar al gusto de cada uno de nuestros clientes y personaliza sus obsequios a manera de que puedan reflejar lo deseado.
                     </p>

                    <h4>
                        Qué datos personales recogemos y por qué los recogemos
                    </h4>
                    <p>
                        Cuando los visitantes dejan comentarios en la web, recopilamos los datos que se muestran en el formulario de comentarios, así como la dirección IP del visitante y la cadena de agentes de usuario del navegador para ayudar a la detección de spam.
                    </p>
                    <p>
                        Una cadena anónima creada a partir de tu dirección de correo electrónico (también llamada hash) puede ser proporcionada al servicio de Gravatar para ver si la estás usando. La política de privacidad del servicio Gravatar está disponible aquí: <a href="https://automattic.com/privacy/">https://automattic.com/privacy/</a>. Después de la aprobación de tu comentario, la imagen de tu perfil es visible para el público en el contexto de su comentario.
                    </p>

                    <h4>Medios</h4>

                    <p>
                        Si subes imágenes a la web deberías evitar subir imágenes con datos de ubicación (GPS EXIF) incluidos. Los visitantes de la web pueden descargar y extraer cualquier dato de localización de las imágenes de la web.
                    </p>

                    <h4>Formularios de contacto</h4>
                    <!-- Cookies -->
                    <p>
                        Si dejas un comentario en nuestro sitio puedes elegir guardar tu nombre, dirección de correo electrónico y web en cookies. Esto es para tu comodidad, para que no tengas que volver a rellenar tus datos cuando dejes otro comentario. Estas cookies tendrán una duración de un año.
                    </p>

                    <p>
                        Si tienes una cuenta y te conectas a este sitio, instalaremos una cookie temporal para determinar si tu navegador acepta cookies. Esta cookie no contiene datos personales y se elimina al cerrar el navegador.
                    </p>

                    <p>
                        Cuando inicias sesión, también instalaremos varias cookies para guardar tu información de inicio de sesión y tus opciones de visualización de pantalla. Las cookies de inicio de sesión duran dos días, y las cookies de opciones de pantalla duran un año. Si seleccionas “Recordarme”, tu inicio de sesión perdurará durante dos semanas. Si sales de tu cuenta, las cookies de inicio de sesión se eliminarán.
                    </p>

                    <p>
                        Si editas o publicas un artículo se guardará una cookie adicional en tu navegador. Esta cookie no incluye datos personales y simplemente indica el ID del artículo que acabas de editar. Caduca después de 1 día.
                    </p>

                    <h4>
                        Contenido incrustado de otros sitios web
                    </h4> 

                    <p>
                        Los artículos de este sitio pueden incluir contenido incrustado (por ejemplo, vídeos, imágenes, artículos, etc.). El contenido incrustado de otras web se comporta exactamente de la misma manera que si el visitante hubiera visitado la otra web.
                    </p>
                    <p>
                        Estas web pueden recopilar datos sobre ti, utilizar cookies, incrustar un seguimiento adicional de terceros, y supervisar tu interacción con ese contenido incrustado, incluido el seguimiento de su interacción con el contenido incrustado si tienes una cuenta y estás conectado a esa web.
                    </p>
                    <!-- Analítica -->
                    <h4>
                        Con quién compartimos tus datos
                        Cuánto tiempo conservamos tus datos
                    </h4> 
                    <p>
                       Si dejas un comentario, el comentario y sus metadatos se conservan indefinidamente. Esto es para que podamos reconocer y aprobar comentarios sucesivos automáticamente en lugar de mantenerlos en una cola de moderación.
                    </p>

                    <p>
                        De los usuarios que se registran en nuestra web (si los hay), también almacenamos la información personal que proporcionan en su perfil de usuario. Todos los usuarios pueden ver, editar o eliminar su información personal en cualquier momento (excepto que no pueden cambiar su nombre de usuario). Los administradores de la web también pueden ver y editar esa información.
                    </p>

                    <h4>Qué derechos tienes sobre tus datos</h4>

                    <p>
                        Si tienes una cuenta o has dejado comentarios en esta web, puedes solicitar recibir un archivo de exportación de los datos personales que tenemos sobre ti, incluyendo cualquier dato que nos hayas proporcionado. También puedes solicitar que eliminemos cualquier dato personal que tengamos sobre ti. Esto no incluye ningún dato que estemos obligados a conservar con fines administrativos, legales o de seguridad.
                    </p>

                    <h4>Dónde enviamos tus datos</h4>

                    <p>
                        Los comentarios de los visitantes puede que los revise un servicio de detección automática de spam.
                    </p>
                    <ul>
                    <li>Tu información de contacto</li>
                    <li>Información adicional</li>
                    <li>Cómo protegemos tus datos</li>
                    <li>Qué procedimientos utilizamos contra las brechas de datos</li>
                    <li>De qué terceros recibimos datos</li>
                    <li>Qué tipo de toma de decisiones automatizada y/o perfilado hacemos con los datos del usuario</li>
                    <li>Requerimientos regulatorios de revelación de información del sector</li>
                    </ul>
                   
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from '~/components/elements/BreadCrumb';

export default {
    name:'politics',
    components: {
        BreadCrumb
    },
    transition: 'zoom',
    data: () => {
        return {
            breadCrumb: [
                {
                    text: 'Home',
                    url: '/'
                },
                {
                    text: 'Politics page'
                }
            ]
        };
    }
};
</script>

<style lang="scss" scoped></style>