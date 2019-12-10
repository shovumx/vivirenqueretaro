import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../components/style.scss";
import "../components/columns.scss";
import "../components/formulario.scss";
import Helmet from "../components/helmet";
import MyForm from "../components/formulario";
import Footer from "../components/footer";
import Video from "../components/video";
import { Link } from "gatsby";
import Navbar from "../components/navbar";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      imageOne: file(
        relativePath: { eq: "images/agencia_inmobiliaria_queretaro.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageTwo: file(
        relativePath: { eq: "images/bienes_raices_queretaro.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageThree: file(
        relativePath: { eq: "images/renta_casas_queretaro.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageFour: file(
        relativePath: { eq: "images/venta_casas_queretaro.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
      imageFive: file(relativePath: { eq: "images/vivir_en_queretaro.png" }) {
        childImageSharp {
          fluid(maxWidth: 1400) {
            aspectRatio
            sizes
            base64
            src
            srcSet
          }
        }
      }
    }
  `);
  return (
    <div>
      <Helmet />
      <section className="hero is-fullheight">
        <Navbar />
        <div className="hero-body">
          <div className="container">
            <div className="columns has-text-centered">
              <div className="column is-half">
                <h1 className="subtitle is-3 has-text-weight-light">
                  Agencia inmobilaria
                </h1>
                <h2 className="title is-1 single-spaced">Vivir en Querétaro</h2>
                <p className="is-size-5 has-text-grey-dark">
                  ¿Sabías que más del{" "}
                  <span className="magical"> 70% de las personas</span> se
                  arrepienten de la casa que escogen para vivir?
                </p>
                <p className="is-size-5 has-text-grey-dark">
                  Nosotros te ayudamos a comprar o rentar la mejor casa de
                  acuerdo a tu estilo de vida con un método basado en{" "}
                  <span className="magical">
                    Inteligencia Artificial y Big Data
                  </span>{" "}
                  para que no formes parte de esa mala estadística.
                </p>
                <Link
                  to="#informacion"
                  className="button is-success is-outlined is-rounded"
                >
                  Más información
                </Link>
              </div>
              <div className="column is-half">
                <Img
                  fluid={data.imageOne.childImageSharp.fluid}
                  alt="Inmobiliaria en Querétaro"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-footer"></div>
      </section>

      <section className="hero is-medium">
        <div className="hero-head">
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div
                className="column is-three-quarters has-text-centered"
                id="informacion"
              >
                <h2 className="subtitle is-size-2 has-text-grey-dark  has-text-weight-bold">
                  Nuestras ventajas para comprar o rentar casa en Querétaro
                </h2>

                <p className="is-size-5">
                  Tenemos las herramientas para elegir la mejor colonia para ti,
                  para gestionar todo a distancia e irnos coordinando para
                  visitas cuando tengas el tiempo suficiente para pasar unos
                  días u horas en Querétaro y ver tu futura casa.
                </p>

                <p className="is-size-5">
                  Nuestro Agencia Inmobiliaria permite ahorrar el suficiente
                  tiempo como para que el hecho de que ahora mismo no estés en
                  Querétaro no represente problema alguno. Además, nosotros nos
                  encargamos de gestionar tu mudanza y recibir todas tus cosas
                  para que cuando llegues a tu nueva casa todo sea más fácil.
                </p>

                <p className="is-size-5">
                  Ahora que… ¿ninguna casa te convence o prefieres construir?
                  También te podemos ayudar a comprar un terreno en Querétaro
                  que se adecúe a tus necesidades y contactarte con un equipo de
                  profesionales de la construcción y la arquitectura para armar
                  un proyecto a tu medida.
                </p>
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column">
                <div className="notification is-primary">
                  <h2 className="subtitle is-5 has-text-white-ter has-text-weight-bold">
                    Datos y Bienes Raíces
                  </h2>
                  <p className="has-text-white-ter has-text-weight-bold">
                    Conocimiento es poder. Hemos analizado más de 8,000
                    viviendas en el mercado para poder darte la mejor asesoría
                    inmobiliaria y poner de tu lado toda esa información para
                    tomar la mejor decisión a la hora de negociar tu próximo
                    hogar.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="notification is-info">
                  <h2 className="subtitle is-5 has-text-white-ter has-text-weight-bold">
                    Casas en Querétaro
                  </h2>
                  <p className="has-text-white-ter has-text-weight-bold">
                    No existe la mejor colonia en Querétaro. Lo que es bueno
                    para uno, no es lo mejor para otro. Nuestra Inteligencia
                    Artificial contempla todos los servicios que rodean una
                    colonia para escoger la zona ideal para ti y tu familia.
                  </p>
                </div>
              </div>
              <div className="column">
                <div className="notification is-success">
                  <h2 className="subtitle is-5 has-text-white-ter has-text-weight-bold">
                    Ahorro de tiempo
                  </h2>
                  <p className="has-text-white-ter has-text-weight-bold">
                    Nuestras soluciones tecnológicas nos ayudan a evitar visitas
                    o llamadas a casas incompatibles con tu estilo de vida. Eso,
                    traducido al español, es ahorro de tiempo y frustraciones
                    para todos a la hora de elegir una casa o departamento.
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="columns">
                <div className="column is-half">
                  <h3 className="subtitle is-3 has-text-grey-dark has-text-centered has-text-weight-bold">
                    Algunos estadísticas de Bienes Raíces en Querétaro:
                  </h3>
                  <span className="right">83%</span>
                  <span className="left">
                    Casas entre $2,220,000 y $2,800,000
                  </span>
                  ​
                  <progress class="progress is-primary" value="83" max="100">
                    83%%
                  </progress>
                  <span className="right">64%</span>
                  <span className="left">Escuelas en la zona Centro</span>​
                  <progress class="progress is-link" value="64" max="100">
                    64%
                  </progress>
                  <span className="right">43%</span>
                  <span className="left">Colonias a +7 km de del Centro</span>​
                  <progress class="progress is-danger" value="43" max="100">
                    43%
                  </progress>
                  <span className="right">18%</span>
                  <span className="left">Colonias con edificios</span>​
                  <progress class="progress is-warning" value="18" max="100">
                    18%
                  </progress>
                </div>
                <div className="column is-half">
                  <Img
                    fluid={data.imageFour.childImageSharp.fluid}
                    alt="Venta de casas en Querétaro"
                  />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="columns">
                <div className="column"></div>
                <div
                  className="column is-three-quarters has-text-centered"
                  id="informacion"
                >
                  <h2 className="subtitle is-2 has-text-grey-dark  has-text-weight-bold">
                    Bienes Raíces en Querétaro, potenciados por la Inteligencia
                    Artificial
                  </h2>

                  <p className="is-size-5">
                    Tenemos todas las herramientas para hacer que el proceso
                    para comparar o rentar una casa sea lo más fácil
                    posible.¿Sabías que mucha gente se enfrenta a mucha ansiedad
                    cuando está por hacerse de una casa?
                  </p>
                  <p className="is-size-5">
                    El principal motivo de esto es porque es muy difícil tener
                    datos y conocimientos que respalden una decisión tan
                    importante. Piénsalo de la siguiente manera, ¿dejarías que
                    alguien te operara el corazón sin antes saber sus estudios,
                    el por qué te quiere operar y cuáles son las probabilidades
                    de éxito?
                  </p>

                  <p className="is-size-5">
                    Desafortunadamente, cuando compras o rentas una casa más o
                    menos vas a ciegas. Te pueden gustar las fotos que ves,
                    recordar que algún amigo te dijo que esa era una colonia
                    increíble, dejarte llevar por el discurso del vendedor o por
                    un supuesto gran descuento. Pero, ¿qué tanto es cierto?
                  </p>

                  <p className="is-size-5">
                    En nuestra Agencia Inmobiliaria te ofrecemos todo ese
                    conocimiento que te va a ayudar a eliminar totalmente esa
                    incertidumbre.
                  </p>
                  <p className="is-size-5">
                    Nuestro sistema está desarrollada para manejar los números
                    pero también para entender todo el entorno de una casa y ver
                    si es compatible con tus necesidades diarias. No creemos que
                    sea adecuado mandarte un montón de fotos para ver si “chicle
                    y pega” si no sabemos nada de ti.
                  </p>
                  <Img
                    fluid={data.imageTwo.childImageSharp.fluid}
                    alt="Bienes Raíces en Querétaro"
                  />

                  <p className="is-size-5">
                    Si una casa te gusta, te vamos a decir si el precio es el
                    adecuado o lo inflaron artificialmente para luego intentar
                    seducirte con una baja considerable del precio final.
                  </p>
                  <p className="is-size-5">
                    Si una casa te gusta para invertir, pero no te quieren hacer
                    descuento, puede que en realidad el precio sea ya muy bueno
                    y no sea necesario perder el tiempo (o la oportunidad en sí)
                    tratando de negociar una baja.
                  </p>

                  <p className="is-size-5">
                    No es necesario sufrir en uno de los momentos más
                    importantes de la vida. Cambiar de ciudad o de casa es algo
                    que se tendría que disfrutar. El sufrimiento debe quedarse
                    en el engorroso proceso de empacar, desempacar y acomodar
                    cosas.
                  </p>
                  <Img
                    fluid={data.imageThree.childImageSharp.fluid}
                    alt="Renta de casas en Querétaro"
                  />
                  <p className="is-size-5">
                    Si en cambio estás buscando vender o rentar tu casa, te
                    ofrecemos una experiencia completamente distinta a las
                    tradicionales. Hasta ahora, la estrategia de venta de una
                    casa es colgar una lona, llevar a la mayor cantidad de gente
                    y esperar a que alguno de todos ellos se decida por comprar.
                  </p>

                  <p className="is-size-5">
                    El precio de tu casa, si te asesora alguien, va a ser más
                    abajo del que debería. ¿Por qué? Porque el chiste es vender
                    lo más rápido posible y no enseñarle la casa a taaaantas
                    personas, con todo el gasto operativo que conlleva. ¿Te
                    imaginas qué flojera (y facturas de gasolinas) da ir 150
                    veces a enseñar una casa?
                  </p>

                  <p className="is-size-5">
                    Con nuestra gran cantidad de datos, nosotros podemos darte
                    un precio justo. Luego, si tienes alguna urgencia por
                    vender, entonces voluntariamente le podemos bajar el precio.
                    Si no tienes prisa o tu casa es una inversión que busca
                    maximizar su ganancia, entonces esperamos más tiempo con un
                    precio adecuado.
                  </p>

                  <p className="is-size-5">
                    Nuestra Inteligencia Artificial perfila a la gente para que
                    cada visita sea un auténtico probable comprador. Así,
                    evitamos el estrés de estar cada tercer día recibiendo a
                    gente que tiene 10% de probabilidades de comprarte. Nuestro
                    proceso se vuelve más eficiente, menos rasposo y, por lo
                    tanto, podemos cobrar comisiones más bajas que nuestros
                    competidores.
                  </p>
                </div>
                <div className="column"></div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column"></div>
              <div className="column is-three-quarters has-text-centered">
                <h2 className="subtitle is-2 has-text-grey-dark  has-text-weight-bold">
                  Querétaro, gran atractivo del mercado inmobiliario
                </h2>

                <p className="is-size-5">
                  Querétaro es una ciudad increíble. Y es normal que mucha gente
                  esté buscando cambiar su vida a este maravilloso Estado. Sin
                  embargo, la idea de un lugar completamente nuevo es algo que
                  vuelve todo más complicado.
                </p>

                <p className="is-size-5">
                  En nuestra Agencia Inmobiliaria hemos pasado por ese proceso,
                  así que sabemos muy bien a lo que te enfrentas al mudarte a
                  Querétaro y estamos preparados para ayudarte a que la
                  transición sea lo más fácil posible. 
                </p>
                <p className="is-size-5">
                  Sabemos las preguntas frecuentes, las inquietudes, las cosas
                  que no te imaginas que van a hacer importantes y al final no
                  solo son importantes, sino que hasta fundamentales. Sabemos
                  qué te conviene pensar a la hora de mudarte, a qué no darle
                  importancia y hasta las sensaciones y sentimientos que van a
                  cruzar por tu cabeza.
                </p>
                <Img
                  fluid={data.imageFive.childImageSharp.fluid}
                  alt="Vivir en Querétaro"
                />
              </div>
              <div className="column"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="hero is-medium" id="contacto">
        <div className="hero-head">
          <div className="container">
            <div className="columns">
              <div classname="column is-half">
                <h3 className="is-size-3">
                  ¿Quieres estar en contacto con nosotros?
                </h3>
                <MyForm />
              </div>
              <div classname="column is-half"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};
