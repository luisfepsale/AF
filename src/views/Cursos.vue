<template>
  <!-- Provides the application the proper gutter -->
  <v-container>
    <h1 class="text-h3 font-weight-thin" style="color: #f48fb1">Cursos</h1>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12"> </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="(data, i) in mycursos"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        xs="2"
      >
        <SimpleCard :cardid="i" :cardInfo="data" />
      </v-col>
    </v-row>

    <v-row align="center" justify="center">
      <v-col class="text-center" cols="12"> </v-col>
    </v-row>
  </v-container>
</template>
<script>
import SimpleCard from "@/components/SimpleCard";
export default {
  components: {
    SimpleCard,
  },
  data() {
    return {
      titleView: this.$store.state.interests,
    };
  },
  computed: {
    mycursos() {
      return this.$store.state.cursos;
    },
    myCourses() {
      return this.$store.state.courses;
    },
    title() {
      return this.$store.getters.bigTitle;
    },
  },
};
</script>