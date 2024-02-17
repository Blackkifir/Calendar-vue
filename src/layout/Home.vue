<script>
  import Navigation from '../components/Navigation.vue';
  import Calendar from '../components/Calendar.vue';
  import Footer from '../components/Footer.vue';

  export default {
    components: {
      Navigation,
      Footer,
      Calendar,
    }
  }
</script>

<template>
  <Navigation />
    <main class="main">
      <Calendar />
    </main>
  <Footer />
</template>