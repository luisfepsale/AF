<template>
      <v-container>
    <h1 class="text-h3 font-weight-thin mb-5" style="color: #F48FB1">
        API (Dados de Usuários em uma lista)
    </h1>
    
    
          <ListComponent :users="users"/>


      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12"> </v-col>
      </v-row>
   
  </v-container>
</template>
<script>
import ListComponent from '../components/ListComponent.vue'
const axios = require('axios');
export default {
    components: {
        ListComponent
    },
    name:'Api.vue',
    data() {
        return{
            users: []
        }
    },
    mounted() {
        this.getUsers();

    },
    methods: {
        async getUsers(){

            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            if(response.status == 200){
                this.users = response.data;

            }else{
                console.error("ocorreu erro ao carregar a api, aguardar ate carregar");
            }
            
            
        }
    },
    
}
</script>
