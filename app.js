import Vue from 'nativescript-vue';


import loginpage from './components/loginpage'
import retaurants from './components/restaurants'
import welcome from './components/welcome'
// Uncommment the following to see NativeScript-Vue output logs
// Vue.config.silent = false;

new Vue({

    template: `
        <Frame>
            <loginpage />
            <welcome/>
            <restaurants />

        </Frame>`,

    components: {
        loginpage,
        welcome,
        retaurants

    }
}).$start();