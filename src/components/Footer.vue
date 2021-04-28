<template>
  <footer class="footer">
    <div class="content">
      <div class="columns">
        <div class="container has-text-centered">
          <div class="column">
            <p>A Logo would look nice here</p>
            <p>Copyright © {{ date }} YOUR COMPANY, LLC.</p>
            <div class="buttons is-centered">
              <b-button tag="a" href="mailto:guldentechjobs@gmail.com">
                <b-icon pack="fas" size="is-small" icon="envelope"></b-icon>
                <span>Email us at your@email.com</span>
              </b-button>
            </div>
          </div>
        </div>
        <div class="column">
          <p><a href="/">Home</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/services">Services</a></p>
          <p><a href="/products">Products</a></p>
          <p><a href="/products">Store</a></p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      date: new Date().getFullYear(),
    };
  },
};
</script>
