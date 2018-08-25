<template>
    <div class="hello">
        <h1 v-colorDirective.background="{color: 'white', background: 'green'}">{{ msg }}</h1>
        <h2>{{ fullMessage }}</h2>
        <MyCheckbox :value="checkbox.value" :title="checkbox.title" v-model="checkbox.checked"/>
        <button @click="click">Click</button>
        <button @click="parentClicked">Parent Click</button>
        <button @click="cacheIt">Cache</button>
        <router-link to='/hello-ts'>HelloTS</router-link>
    </div>
</template>

<script lang="ts">
import { Component, Inject, Prop, Vue, Watch } from "vue-property-decorator";
import Parent from "./Parent";
import colorDirective from "../directives/color-directive";
import MyCheckbox from "./MyCheckbox.vue";
import { AxiosInstance } from "axios";
import { createDecorator } from "vue-class-component";

import { beforeMethod, afterMethod, onException, Metadata } from "kaop-ts";

class Advice {
  static getCached(meta: Metadata<any>) {
    // Access one prop value
    console.log(
      `Cache: ${meta.scope.checkbox.value} -- ${meta.scope.checkbox.checked}`
    );
    // Component name -- method name
    const key = `${meta.scope.$options["_componentTag"]}--${meta.key}`;
    const cached = localStorage.getItem(key);
    if (cached) {
      meta.scope.userName = cached;
      // if have cache then stop here, won't go though the method
      meta.prevent();
      console.log(meta.scope);
    }
  }

  static setCached(meta: Metadata<any>) {
    const key = `${meta.scope.$options["_componentTag"]}--${meta.key}`;

    // From value return by original method are stored in meta.result
    if (meta.result) {
      meta.result.then(() => {
        localStorage.setItem(key, meta.scope.userName);
        console.log(meta.scope);
      });
    }
  }

  static report(meta: Metadata<any>) {
      console.error('Exception ocurred', meta.exception)
  }

  static notify (meta, toServer) {
    // Adding extra params to the function  
    console.log('Notifying', toServer)
  }

}

type Sum = {
  acc: number;
};

const Log = (str?: string) => {
  return createDecorator((component, key) => {
    console.log("Component: ", component);
    console.log("Decorated key: ", key);
    console.log("str: ", str);
  });
};

const NoCache = createDecorator((component: any, key) => {
  if (component.computed && component.computed[key]) {
    console.log("cache", component.computed[key]);
    component.computed[key].cache = false;
  } else {
    throw Error("Not a computed property");
  }
});

@Component({
  components: { MyCheckbox },
  directives: {
    colorDirective
  }
})
export default class HelloWorld extends Parent {
  checkbox = {
    title: "Do you love Vue?",
    value: "checkbox-id",
    checked: true
  };

  userName = null;

  @Log("log out in console")
  sum = {
    acc: 0
  };

  @Inject() http: AxiosInstance;

  @Prop({
    type: String,
    default: "Vue"
  })
  private msg!: string;

  // replace computed props
  @NoCache
  @Log("log out in console")
  get fullMessage() {
    return `${this.msg} should be fullmessage from a getter`;
  }

  public created() {
    this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .then(console.log);
  }

  @beforeMethod(Advice.getCached)
  @afterMethod(Advice.setCached)
  @afterMethod((meta) => Advice.notify(meta, true))
  @onException(Advice.report)
  cacheIt() {
    console.log("Method executed");
    return fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(res => res.json())
      .then(user => (this.userName = user.name));
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
