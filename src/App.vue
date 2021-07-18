<template>
<HeaderComponent />
<MoviesComponent />
<ActersComponent />
<SoonComponent />
<RegisterComponent />

 <FooterComponent />


</template>

<script>
import HeaderComponent from "./components/shared/Header.vue";
import FooterComponent from "./components/shared/Footer.vue";
import MoviesComponent from "./components/shared/Movies.vue";
import ActersComponent from "./components/shared/Acters.vue";
import RegisterComponent from "./components/shared/Register.vue";
import SoonComponent from "./components/shared/Soon.vue";
export default {
  components: { HeaderComponent, FooterComponent,MoviesComponent, ActersComponent,RegisterComponent,SoonComponent },
  setup() {
    return {};
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');

</style>

