import { createApp } from "vue";
import App from "./App.vue";
import store from './store'
import router from './router'
import AppModal from "./components/AppModal.vue";

const app = createApp(App);


app.use(store);
app.use(router);
app.component("app-modal", AppModal);

app.mount("#app");
