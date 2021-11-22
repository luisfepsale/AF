<template>
  <v-app>
    <v-system-bar app color="pink lighten-3">
      <v-spacer></v-spacer>
      <v-icon>mdi-wifi-strength-4</v-icon>
      <v-icon>mdi-signal-cellular-outline</v-icon>
      <v-icon>mdi-battery</v-icon>
      <span
        >{{ new Date().getDate() }}/{{ new Date().getMonth() }}/{{
          new Date().getFullYear()
        }}</span
      >
    </v-system-bar>
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
        <v-list-item v-for="item in items" :key="item.title" link>
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
    <v-subheader>Light status bar</v-subheader>

    <v-app-bar app color="pink lighten-4" dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Dashboard</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>

          <v-row align="center" justify="center">
            <v-col class="text-center" cols="12">
              <h3 class="text-h2 font-weight-thin mb-4" style="color: #F48FB1 ">Desenvolvimento de Aplicaçãoes para WEB - Lab</h3>

            </v-col>
          </v-row>
  
      </v-container>
    </v-main>

    <v-footer app padless>
      <v-card flat tile width="100%" class="pink lighten-4 text-center">
        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} —
          <strong>Desenvolvimento para aplicações web</strong>
        </v-card-text>
      </v-card>
    </v-footer>
    <v-bottom-navigation app color="pink lighten-3" v-model="value">


      <v-btn value="favorites">
        <span>Favoritos</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      value: 1,
      items: [
        { title: "Perfil", icon: "mdi-account" },
        { title: "Sair", icon: "mdi-arrow-up-bold-box-outline" },
      ],
      mini: true,
    };
  },
};
</script>
