<template>
  <Header />
  <JobsList />
</template>

<script>
import { provide } from 'vue';
import state from './store';
import Header from './components/HeaderComponent.vue';
import JobsList from './components/JobsList.vue';

export default {
  name: 'App',
  components: {
    JobsList,
    Header,
  },
  setup() {
    const { jobs, filter } = state;
    provide('jobs', jobs);
    provide('filter', filter);
  },
};
</script>

<style lang="scss">
html, body {
  min-height: 100vh;
}

#app {
  font-family: 'League Spartan', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f0fafb;
}
</style>
