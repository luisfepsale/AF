import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)



export default new Vuex.Store({

  state: {
    cards: [
      { title: "HTML", level: "intermediário", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
      { title: "CSS", level: "intermediário", image: "https://upload.wikimedia.org//wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/120px-CSS3_logo_and_wordmark.svg.png" },
      { title: "JavaScript", level: "intermediário", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/260px-Unofficial_JavaScript_logo_2.svg.png" },
      { title: "Laravel", level: "Intermediário", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/250px-Laravel.svg.png" },
      { title: "React.js", level: "Básico", image: "https://www.tshirtgeek.com.br/wp-content/uploads/2021/03/com015.jpg" },
      { title: "Vue.js", level: "Básico", image: "https://vuejs.org/images/logo.svg" },
    ],
    carreira: [
      { title: "Parque Tecnológico de Sorocaba", workload: "Estagiário", date: "Julho/2020 - Janeiro/2021", function: "Atuei na área de desenvolvimento web, Banco de dados, Front-end e Back-end.", image: "https://parquetecsorocaba.com.br/img/logo-parque-rodape.png" },
      { title: "Inova Sorocaba", workload: "Estagiário", date: "janeiro/2020 - Atualmente", function: "Atuando em novas tecnologias da empresa, focadas em Front-end.", image: "https://inovasorocaba.parquetecsorocaba.com.br/img/logo-facebook.jpg" },
    ],
    cursos: [
      { title: "Alura", image: "https://media.glassdoor.com/sqll/2500530/alura-squarelogo-1602197362646.png" },
      { title: "Udemy", image: "https://logodownload.org/wp-content/uploads/2019/07/udemy-logo.png" },
      { title: "Youtube", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png" },
    ],


    title: "Tecnologias"
  },
  mutations: {
  },
  actions: {
  },
  getters: {
    bigTitle(state) {
      return state.title.toUpperCase()
    },
    getImgUrl(state) {
      var images = require.context('../assets/', false, /\.png$/)
      return images('./' + state.cards.image + ".png")
    }
  }
})
