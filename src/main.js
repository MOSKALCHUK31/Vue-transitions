import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import FirstComponent from './pages/FirstComponent';
import SecondComponent from './pages/SecondComponent';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: FirstComponent},
        {path: '/second', component: SecondComponent}
    ]
});

const app = createApp(App);

app.component('base-modal', BaseModal);
app.use(router);

app.mount('#app');
