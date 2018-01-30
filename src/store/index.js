import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    message: "Hello From Vuex",
    count: 0,
    user: {
      Name: "Test",
      id: "1234"
    },
    items: [],
    id: ""
  },
  mutations: {
    // sycronous
    increment(state, payload) {
      console.log((state.count += payload));
    }
  },
  actions: {
    // async || sycronous
    async deleteName(state) {
      const request = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        const response = await fetch(
          `https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha/${
            state.id
          }`,
          request
        );
        // const data = await response.json();
        console.log("Delete Successful: ", response.ok);
        this.dialog = false;
        this.fetch();
        return;
      } catch (err) {
        throw new Error(err);
      }
    },
    async fetch() {
      try {
        const response = await fetch(
          "https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha"
        );
        const data = await response.json();
        console.log("It worked! ", data);
        // this.items = data;
        state.items = data;
        return;
      } catch (error) {
        throw new Error(err);
      }
    },
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
    async deleteName(state) {
      const request = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        const response = await fetch(
          `https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha/${
            state.idHolder
          }`,
          request
        );
        // const data = await response.json();
        console.log("Delete Successful: ", response.ok);
        this.dialog = false;
        this.fetch();
        return;
      } catch (err) {
        throw new Error(err);
      }
    },
    async fetch(state) {
      try {
        const response = await fetch(
          "https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha"
        );
        const data = await response.json();
        console.log("It worked! ", data);
        state.items = data;
        return;
      } catch (error) {
        throw new Error(err);
      }
    },
    message(state) {
      return state.message.toUpperCase();
    },
    counter(state) {
      return state.count;
    },
    findUser(state) {
      return state.user;
    }
  }
});

/**
 * commit -- accesses mutations
 * dispatch -- accesses actions
 * .vue files -- before accessing vuex, proceed every cmd with this.$store
 * within store -- proceed every cmd with state.'method name'
 */
