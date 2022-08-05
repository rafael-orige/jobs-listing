import { reactive } from 'vue';
import list from '@/assets/data.json';

const state = reactive({
  jobs: list,
  filter: [],
});

export default { state };
