<template>
  <div id="wrapper">
    <JobCard v-for="job in filteredJobs" :key="job.id" v-bind="job" />
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
import JobCard from './JobCard.vue';

export default {
  components: {
    JobCard,
  },
  setup() {
    const store = useStore();
    const list = computed(() => store.state.jobs.list);
    const filter = computed(() => store.state.jobs.filter);

    const orderedJobs = computed(() => {
      const sortJobs = list;

      const sortFn = (job) => {
        if (job.new && job.featured) return -1;
        if (job.featured) return -1;
        if (job.new) return 1;

        return 0;
      };

      return sortJobs.value.sort((job) => sortFn(job));
    });

    const filteredJobs = computed(() => {
      const job = orderedJobs;
      if (!filter.value) return job.value;

      const filterFn = (item) => {
        const arr = [item.role, item.level, ...item.languages, ...item.tools];

        if (filter.value.every((filt) => arr.includes(filt))) return true;
        return false;
      };

      return job.value.filter((item) => filterFn(item));
    });

    return {
      orderedJobs,
      filteredJobs,
    };
  },
};
</script>

<style lang="scss" scoped>
#wrapper {
  margin: auto;
  max-width: 1200px;
  padding: 20px;
}
</style>
