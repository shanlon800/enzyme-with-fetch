import count from '../reducers/count';

const createStore = reducer => {
  let state;
  let listeners = [];

  let store = {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
    },

    subscribe(listener) {
      listeners.push(listener);
      return () => {
        listeners = listeners.filter(l => l !== listener);
      }
    }
  };

  store.dispatch({ type: '@@redux/INIT' });

  return store;
};

const store = createStore(count);

export default store;
