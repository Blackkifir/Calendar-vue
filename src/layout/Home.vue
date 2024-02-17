<script>
  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';

  export default {
    components: {
      Navigation,
      Footer
    }
  }
</script>

<template>
  <Navigation />
    <main class="main">
      <h1>Hello {{ $store.state.info }}</h1>
    </main>
  <Footer />
</template>