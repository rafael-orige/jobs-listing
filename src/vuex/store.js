import { createStore } from 'vuex';
import jobsSlice from './jobs/jobs.slice';

const store = createStore({
  state: {
    jobs: { ...jobsSlice.initialState },
  },
  getters: { ...jobsSlice.getters },
  mutations: { ...jobsSlice.mutations },
});

export default store;
