import {createApp} from 'vue'
import App from './App.vue'
import './style.css';
// element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const  app = createApp(App);

app.use(ElementPlus)

app.mount('#app')
