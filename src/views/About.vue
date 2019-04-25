<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Todos />
  </div>
</template>

<script lang="ts">
import Todos from '@/components/Todos.vue'
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  components: {
    Todos
  }
})
export default class About extends Vue{

}
</script>
