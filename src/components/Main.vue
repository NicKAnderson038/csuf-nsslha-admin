<template>
  <v-layout>
    <v-flex lg10 md10 xs10 sm10 offset-sm1>
      <v-card style="margin-top:20px;margin-bottom:20px;">
        <!-- <div class="text-xs-center">
          <h1>* * * Survey Admin Portal * * *</h1>
        </div> -->
        <div class="text-xs-left">
          <v-btn color="primary" large to="admin">Admin Page</v-btn>
          <v-btn color="error" large to="delete-user">Delete Page</v-btn>

        </div>

        <v-card-media :src="image" height="600px">
        </v-card-media>
        <!-- <div class="text-xs-center">
          <v-btn color="primary" large to="admin">Admin Page</v-btn>
          <v-btn color="error" large to="delete-user">Delete Page</v-btn>
        </div> -->
        <div class="text-xs-center">
          <h1>* * * Survey Admin Portal * * *</h1>
          </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      image:
        "https://i.pinimg.com/736x/1d/ee/ce/1deece2fc7da25ce906c9bf3a0f104e6.jpg"
    };
  },
  created() {
    try {
      // this.$store.dispatch("fetch");
    } catch (error) {
      console.error(error);
    }
  },
  computed: {
    // fetch() {
    //   return (this.items = this.$store.getters.fetch);
    // },
    message() {
      // return console.log(this.$store.state.message);
      return console.log(this.$store.getters.message);
    },
    count() {
      return console.log(this.$store.getters.counter);
    }
  },
  methods: {
    pressed() {
      // /* accessing mutations */
      // this.$store.commit("increment", 10);
      // /* accessing actions */
      this.$store.dispatch("actIncrement", 20);
      this.$store.dispatch("getFetch");
    },
    async deleteName(id) {
      const request = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      };
      try {
        const response = await fetch(
          `https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha/${id}`,
          request
        );
        // const data = await response.json();
        console.log("Delete Successful: ", response.ok);
        // this.dialog = false;
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
        this.items = data;
        return;
      } catch (error) {
        throw new Error(err);
      }
    }
  }
};
</script>

<style>
.table__overflow {
  margin-top: 40px;
}
</style>
