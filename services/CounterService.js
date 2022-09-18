const { RestApi } = require('../helpers/api');

export const CounterService = {
  getCounters: () => {
    return RestApi.get('/counters');
  },
  addCounter: () => {
    return RestApi.post('/counters', { value: 0 });
  },
  updateCounter: (id, value) => {
    return RestApi.patch(`/counters/${id}`, { value });
  },
};
