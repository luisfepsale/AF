<template>
  <!-- Provides the application the proper gutter -->
  <v-container>
    <h1 class="text-h3 font-weight-thin" style="color: #F48FB1">
        Carreira
    </h1>
    
      <v-row>
        <v-col
          v-for="(data, i) in myCards"
          :key="i"
          cols="12"
          sm="8"
          md="6"
          xs="4"
        >
          <CardCarreira :cardid="i" :cardInfo="data" />
        </v-col>
      </v-row>

      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12"> </v-col>
      </v-row>
   
  </v-container>
</template>
<script>
import CardCarreira from "@/components/CardCarreira";
export default {
  components: {
    CardCarreira,
  },
  data() {
    return {
      titleView: this.$store.state.carreira,
    };
  },
  computed: {
    myCards() {
      return this.$store.state.carreira;
    },
    title() {
      return this.$store.getters.bigTitle;
    },
  },
};
</script>