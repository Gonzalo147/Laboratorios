import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

//PrimeVue
import PrimeVue from 'primevue/config';

import "primevue/resources/themes/lara-light-indigo/theme.css";//theme
//import "primevue/resources/themes/arya-orange/theme.css"
//import "primevue/resources/themes/vela-green/theme.css"
import "primevue/resources/primevue.min.css"; //core
import "primeicons/primeicons.css"; //icons
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import MultiSelect from 'primevue/multiselect';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import i18n from'../src/locales/i18n'

const app = createApp(App);

app.use(i18n);
app.use(PrimeVue);


app.component('pv-button', Button);
app.component('pv-inputMask', InputMask);
app.component('pv-inputNumber', InputNumber);
app.component('pv-inputText', InputText);
app.component('pv-multiSelect', MultiSelect);
app.component('pv-calendar', Calendar);
app.component('pv-textArea', Textarea);
app.component('pv-checkBox', Checkbox);

app.mount('#app')
