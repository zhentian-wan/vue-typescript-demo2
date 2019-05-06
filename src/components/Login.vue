<template>
    <section v-if="login">
        <button v-if="!login.isLoggedIn" @click="loginMutation">Login</button>
        <p v-else>Hello {{login.user}}</p>
    </section>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {State, Mutation, namespace} from 'vuex-class';
import {LoginState} from '../types';

const LoginMutation = namespace('login', Mutation)

@Component()
export default class Login extends Vue{
    @State login: LoginState;
    @LoginMutation('login') loginMutation;
}
</script>

