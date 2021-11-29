<template>
<v-app>
  <Toolbar :items ="items"/>
  <NavigationDrawer :items ="items"/>
  <v-main>
    <router-view></router-view>
  </v-main>
  <Footer/>
  <BottomNavigation :items="items"/>
</v-app>
</template>

<script>

  import NavigationDrawer from '@/components/NavigationDrawer'
  import BottomNavigation from '@/components/BottomNavigation'
  import Toolbar from '@/components/Toolbar'
  import Footer from '@/components/Footer'

  export default {
    components:{
      NavigationDrawer,
      BottomNavigation,
      Toolbar,
      Footer
      
    },
    data () { 
      
      return {
        items: [
      {
        title: "Home",
        address: "/",
        icon: 'mdi-view-dashboard',
      },
      {
        title: "Perfil",
        address: "/Perfil",
        icon: "mdi-account",
      },
      {
        title: "Carreira",
        address: "/Carreira",
        icon: 'mdi-account-box',
      },
      {
        title: "Cursos",
        address: "/Cursos",
        icon: "mdi-star",
      },
    ],
       titleView:this.$store.state.cards
        
      }
    },
    computed:{
      myCards(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      }
    }
  }
</script>
