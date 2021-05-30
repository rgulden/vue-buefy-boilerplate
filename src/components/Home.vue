<template>
  <div>
    <navbar-component></navbar-component>
    <section class="hero is-large is-info">
      <div class="hero-body">
        <div class="container has-text-centered">
          <p class="title">
            Your comapny name
          </p>
          <p class="subtitle">
            Your company super fancy slogan or main statement.
          </p>
          <div class="buttons is-centered">
            <b-button type="is-light">Info Light</b-button>
            <b-button type="is-light">Info Light</b-button>
            <b-button type="is-light">Info Light</b-button>
            <b-button type="is-light">Info Light</b-button>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tile is-ancestor">
          <div class="tile is-parent has-text-centered">
            <article class="tile is-child box">
              <b-icon
                pack="fas"
                size="is-large"
                icon="sync-alt"
                custom-class="fa-spin"
              >
              </b-icon>
              <h1 class="title">Innovation</h1>
              <br />
              <h2 class="subtitle">
                A simple container to divide your page into
                <strong>sections</strong>, like the one you're currently
                reading.
              </h2>
            </article>
          </div>
          <div class="tile is-parent has-text-centered">
            <article class="tile is-child box">
              <b-icon pack="fas" size="is-large" icon="medal"></b-icon>
              <h1 class="title">Excellence</h1>
              <br />
              <h2 class="subtitle">
                A simple container to divide your page into
                <strong>sections</strong>, like the one you're currently
                reading.
              </h2>
            </article>
          </div>
          <div class="tile is-parent has-text-centered">
            <article class="tile is-child box">
              <b-icon pack="fas" size="is-large" icon="handshake"></b-icon>
              <h1 class="title">Integrity</h1>
              <br />
              <h2 class="subtitle">
                A simple container to divide your page into
                <strong>sections</strong>, like the one you're currently
                reading.
              </h2>
            </article>
          </div>
        </div>
      </div>
    </section>
    <footer-component></footer-component>
  </div>
</template>
<script>
import NavbarComponent from "../components/Navbar.vue";
import FooterComponent from "../components/Footer.vue";
export default {
  name: "landingPage",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>
