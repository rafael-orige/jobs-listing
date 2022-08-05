import jobs from '@/assets/data.json';
import getters from './jobs.getters';
import mutations from './jobs.mutations';

const initialState = {
  list: jobs,
  filter: [],
};

const jobsSlice = {
  initialState,
  getters,
  mutations,
};

export default jobsSlice;
