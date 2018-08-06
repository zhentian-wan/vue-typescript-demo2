<template>
  <div class="hello">
    <h1 v-colorDirective.background = "{color: 'white', background: 'green'}">{{ msg }}</h1>
    <h2>{{ fullMessage }}</h2>
    <button @click="click">Click</button>
    <button @click="parentClicked">Parent Click</button>
    <router-link to='/hello-ts'>HelloTS</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Parent from './Parent';
import colorDirective from '../directives/color-directive';

@Component({
    directives: {
        colorDirective
    }
})
export default class HelloWorld extends Parent {
  @Prop() private msg!: string;

  // replace computed props
  get fullMessage() {
    return `${this.msg} should be fullmessage from a getter`;
  }

  public created() {
    console.log('Component is created');
  }

  public click() {
    alert('Should replace what used to be defined in methods objects');
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
