const getJobs = (state) => state.jobs.list;
const getFilter = (state) => state.jobs.filter;

const getters = {
  getJobs,
  getFilter,
};
export default getters;
