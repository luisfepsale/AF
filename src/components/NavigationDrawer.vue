<template>
  <v-navigation-drawer app permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h5"
          >Luís Felipe - 190380
        </v-list-item-title>
        <v-list-item-subtitle style="word-break: break-word"
          >Desenvolvimento Web - Lab</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        link
        @click="$router.push(item.address)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <br />
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ["items"],
};
</script>


