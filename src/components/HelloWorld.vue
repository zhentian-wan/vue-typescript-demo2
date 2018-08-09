<template>
  <div class="hello">
    <h1 v-colorDirective.background = "{color: 'white', background: 'green'}">{{ msg }}</h1>
    <h2>{{ fullMessage }}</h2>
    <MyCheckbox :value="checkbox.value" :title="checkbox.title" v-model="checkbox.checked"/>
    <button @click="click">Click</button>
    <button @click="parentClicked">Parent Click</button>
    <router-link to='/hello-ts'>HelloTS</router-link>
  </div>
</template>

<script lang="ts">
    import {Component, Inject, Prop, Vue, Watch} from 'vue-property-decorator';
import Parent from './Parent';
import colorDirective from '../directives/color-directive';
import MyCheckbox from './MyCheckbox.vue';
    import {AxiosInstance} from "axios";

type Sum = {
    acc: number
};

@Component({
    components: {MyCheckbox},
    directives: {
        colorDirective
    }
})
export default class HelloWorld extends Parent {

  checkbox = {
      title: 'Do you love Vue?',
      value: 'checkbox-id',
      checked: true
  };

  sum= {
      acc: 0
  };

  @Inject() http: AxiosInstance;

  @Prop({
      type: String,
      default: 'Vue'
  }) private msg!: string;

  // replace computed props
  get fullMessage() {
    return `${this.msg} should be fullmessage from a getter`;
  }

  public created() {
      this.http.get('https://jsonplaceholder.typicode.com/users')
          .then(console.log)
  }

  public click() {
      this.sum.acc++;
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
