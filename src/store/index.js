import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: "Hello From Vuex",
    count: 0
  },
  mutations: {
    // sycronous
    increment(state, payload) {
      console.log((state.count += payload));
    }
  },
  actions: {
    // async || sycronous
    actIncrement(state, payload) {
      state.commit("increment", payload);
    },
    async getFetch(state, payload) {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts/1"
        );
        const data = await response.json();
        console.log("json tester", data);
        return;
      } catch (error) {
        throw new Error(error);
      }
    }
  },
  getters: {
    message(state) {
      return state.message.toUpperCase();
    },
    counter(state) {
      return state.count;
    }
  }
});

/**
 * commit -- accesses mutations
 * dispatch -- accesses actions
 * .vue files -- before accessing vuex, proceed every cmd with this.$store
 * within store -- proceed every cmd with state.'method name'
 */
