import Vue from "vue";
import BootstrapVue from 'bootstrap-vue'
import router from "./routes/index";
import { firestorePlugin } from 'vuefire'
import App from "./App.vue";
import * as firebase from "firebase";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// General configuration for the Vue app
// And Firebase

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyByaInNCvsyQR_WUFeIIxO5uy1Ve7uY1kU",
  authDomain: "pawfectmatch-16917.firebaseapp.com",
  projectId: "pawfectmatch-16917",
  storageBucket: "pawfectmatch-16917.appspot.com",
  messagingSenderId: "104404759553",
  appId: "1:104404759553:web:11e6dfeeeca4f72d277c00",
  measurementId: "G-E2D1ZKNLX3"
};

firebase.initializeApp(configOptions);

firebase.auth().onAuthStateChanged(user => {
    store.dispatch("fetchUser", user);
});

// Tell Vue the plugins it needs to use
Vue.use(firestorePlugin);
Vue.use(BootstrapVue);

// Export the database object to the components
export const db = firebase.firestore();

// Initialisation of the Vue app
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
