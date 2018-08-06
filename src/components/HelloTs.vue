<template>
    <div>
        <h1>Hello Ts</h1>
        <router-link to='/'>Hello Vue</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Route from 'vue-router';

@Component({})
export default class HelloTs extends Vue {
    public created() {
        console.log('Hello TS created');
    }

    public beforeRouteEnter(to: Route, from: Route, next: Function) {
        console.log('beforeRouteEnter');
        next();
    }

    public beforeRouteLeave(to: Route, from: Route, next: Function) {
        console.log('beforeRouteLeave');
        next();
    }
}
</script>
