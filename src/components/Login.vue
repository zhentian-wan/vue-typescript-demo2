<template>
    <section>
        <button v-if="!login.isLoggedIn" @click="loginMutation">Login</button>
        <p v-else>Hello {{login.user}}</p>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Mutation} from 'vuex-class';
import {LoginState} from '../types';

@Component()
export default class Login extends Vue{
    @State login: LoginState;
    @Mutation('login') loginMutation;
}
</script>

