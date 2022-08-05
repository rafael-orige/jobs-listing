const addFilter = (state, payload) => {
  const { jobs } = state;

  jobs.filter = [...jobs.filter, payload];
};

const removeFilter = (state, payload) => {
  const { jobs } = state;

  jobs.filter = jobs.filter.filter((item) => item !== payload);
};

const clearFilters = (state) => {
  const { jobs } = state;

  jobs.filter = [];
};

const mutations = { addFilter, removeFilter, clearFilters };
export default mutations;
