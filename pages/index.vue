<template>
  <section>
    <b-row>
      <b-col class="p-0">
        <div class="banner-container">
          <DdCarousel
            :imgs="banners"
            :speed="10000"
            transitionEffect="fade"
            height="100vh"
            width="100%"
            imgContainerStyle="position: fixed;"
            :imgStyle="
              scrollY > 300
                ? `filter: blur(4px); height: 100%; width: 100%; object-fit: cover;`
                : 'height: 100%; width: 100%; object-fit: cover;'
            "
          />
        </div>
      </b-col>
    </b-row>

    <b-row>
      <b-col class="bg-white">
        <b-row>
          <b-col class="d-none d-lg-flex align-items-center justify-content-center bg-dd-light mt-4">
            <div class="content-img-container p-2">
              <img
                loading="lazy"
                src="https://freesvg.org/img/Noun-project-1063.png"
                alt=""
              />
            </div>
          </b-col>
          <b-col class="col-12 col-lg-8">
            <div class="content-text-box p-2 my-4" id="quem-somos">
              <h2 class="content-title">Quem somos</h2>
              <p>
                Somos uma equipe apaixonada por tecnologia e inovação, que
                acredita no poder da internet para transformar negócios e
                conectar pessoas. Com anos de experiência no mercado digital,
                estamos sempre buscando novas formas de aprimorar nossos
                serviços e oferecer as melhores soluções para nossos clientes.
              </p>
              <p>
                Aqui, trabalhamos com um processo de desenvolvimento ágil, o que
                significa que estamos sempre em contato com nossos clientes e
                adaptando nossas soluções às suas necessidades específicas. Isso
                nos permite criar sites e aplicativos personalizados, que
                atendem às demandas de cada cliente e oferecem uma experiência
                única aos usuários.
              </p>
              <p>
                Nosso objetivo é ajudar nossos clientes a alcançar o sucesso
                online, seja por meio de um ecommerce bem-sucedido, um blog de
                destaque ou um sistema eficiente de agendamento de serviços. Se
                você está procurando uma equipe confiável e comprometida em
                ajudá-lo a alcançar seus objetivos online, você está no lugar
                certo.
              </p>
              <p>
                Obrigado por visitar nosso site. Estamos ansiosos para trabalhar
                com você e ajudá-lo a alcançar o sucesso online!
              </p>
              <img
                class="content-text-box-bg d-flex d-lg-none"
                src="https://freesvg.org/img/Noun-project-1063.png"
                alt=""
              />
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="col-12 col-lg-8">
            <div class="content-text-box p-2 my-4" id="quem-somos">
              <h2 class="content-title">
                Seu <strong>Ecommerce</strong>, seu <strong>Blog</strong>, seus
                <strong>Serviços</strong> e muito mais em um só lugar!
              </h2>
              <p>
                <strong>Desenvolvimento de Ecommerce:</strong> Nós ajudamos
                nossos clientes a criar lojas virtuais de sucesso, fornecendo
                soluções personalizadas e eficazes para atender às suas
                necessidades específicas. Desenvolvemos sites de ecommerce
                responsivos, intuitivos e fáceis de usar, com recursos avançados
                como carrinho de compras, pagamento seguro, gerenciamento de
                inventário, integração com redes sociais e muito mais. Nossa
                equipe de especialistas em marketing digital pode ajudá-lo a
                criar campanhas de publicidade online para promover sua loja
                virtual e aumentar suas vendas.
              </p>
              <p>
                <strong>Desenvolvimento de Blog:</strong> Criar um blog de
                sucesso pode ser um grande desafio, mas nós estamos aqui para
                ajudar. Oferecemos soluções de desenvolvimento de blog
                personalizadas, que incluem design atraente e moderno,
                otimização para mecanismos de busca (SEO), integração com redes
                sociais, comentários e recursos avançados de gerenciamento de
                conteúdo. Nossa equipe de redatores e editores pode ajudá-lo a
                criar conteúdo relevante e envolvente, que atrai mais tráfego
                para seu blog e aumenta sua visibilidade online.
              </p>
              <p>
                <strong>Agendamento de Serviços:</strong> Se você é um
                profissional que oferece serviços, sabe o quão importante é
                gerenciar sua agenda de forma eficiente. Nós oferecemos soluções
                de agendamento de serviços personalizadas, que permitem que você
                gerencie sua agenda de forma fácil e eficiente. Com nosso
                sistema de agendamento online, seus clientes podem marcar e
                gerenciar seus próprios horários, reduzindo o tempo gasto em
                tarefas administrativas e aumentando a satisfação do cliente.
              </p>
              <p>
                Esses são apenas alguns dos serviços que oferecemos. Nosso
                objetivo é ajudar nossos clientes a alcançar o sucesso online,
                seja por meio de uma loja virtual de sucesso, um blog envolvente
                ou um sistema eficiente de agendamento de serviços. Se você está
                procurando uma equipe confiável e comprometida em ajudá-lo a
                alcançar seus objetivos online, você está no lugar certo.
              </p>
              <img
                class="content-text-box-bg d-flex d-lg-none"
                src="https://freesvg.org/img/gahag-0116832233.png"
                alt=""
              />
            </div>
          </b-col>
          <b-col class="d-none d-lg-flex align-items-center justify-content-center bg-dd-light">
            <div class="content-img-container p-2">
              <img
                loading="lazy"
                src="https://freesvg.org/img/gahag-0116832233.png"
                alt=""
              />
            </div>
          </b-col>
        </b-row>

        <b-row>
          <b-col class="p-0 my-4">
            <div class="blog-banner-container border shadow">
              <img
                class="blog-banner"
                loading="lazy"
                src="/img/others/puzzle.jpg"
                alt=""
              />
              <h2 class="blog-title text-dd-shadow text-dd-primary p-2 rounded">
                Seu site altamente personalizável e de fácil manutenção!
              </h2>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "home",

  data() {
    return {
      banners: [
        "/img/ecommerce/ecommerce.jpg",
        "/img/blog/blog.jpg",
        "/img/others/night-cartoon.jpg",
        // "/img/others/night.jpg",
        // "/img/others/studio.jpg",
        // "/img/others/cigarettes.jpg",
        // "/img/others/dashboard.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/d/d7/San_Francisco_Bay_Bridge_Western_Span_at_night.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/9/96/Dai_Stanton%27s_home_studio_2009-03-07.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/1/11/Interpreting_Ecommerce_Website_Analytics.jpg",
        // "https://upload.wikimedia.org/wikipedia/commons/8/82/74_South_Shore_Mall_Cigarettes%2C_Bay_Shore_NY_1979.jpg",
      ],
    };
  },

  computed: {
    ...mapGetters({
      scrollY: "window/getScrollY",
    }),
  },

  methods: {},
};
</script>

<style scoped>
/* .banner-container::after {
  position: absolute;
  content: "";
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background: rgba(var(--dd-primary-rgb), .6);
} */

.content-img-container {
  height: 400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content-img-container img {
  max-height: 100%;
  max-width: 100%;
}

.content-text-box {
  position: relative;
  min-height: 400px;
  overflow: hidden;
}

.content-text-box-bg {
  position: absolute;
  bottom: 0;
  right: 0;
  max-height: 50%;
  max-width: 50%;
  filter: opacity(0.07);
}

.blog-banner-container {
  width: 100%;
  height: 300px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: blur(0);
  transition: filter 0.5s;
}

.blog-banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
}

.blog-title {
  font-size: 2.5rem;
  font-weight: 700;
  position: absolute;
  text-align: center;
  z-index: 1;
}

@media only screen and (max-width: 1200px) {
  .content-text-box {
    height: auto;
  }
}
</style>

