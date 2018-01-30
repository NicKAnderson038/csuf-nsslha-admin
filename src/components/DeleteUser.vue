<template>
  <v-layout>
    <v-flex lg10 md10 xs10 sm10 offset-sm1>
      <v-card style="margin-top:60px;">
        <!-- <v-btn color="primary" @click="pressed()">Button</v-btn> -->
        <div class="text-xs-left">
          <v-btn color="success" to="/">Home Page</v-btn>
          <v-btn color="warning" to="admin">Admin Page</v-btn>
        </div>
        <v-alert color="info" icon="check_circle" :value="alert" transition="scale-transition">
          Total number of respondents is: <strong>{{items.length}}</strong>
        </v-alert>
        <v-card-media :src="image" height="360px">
        </v-card-media>
        <!-- <v-parallax :src="image" height="300"></v-parallax> -->
        <v-data-table v-bind:headers="headers" :items="items" hide-actions class="elevation-1">
          <template slot="items" slot-scope="props">
              <td>{{ props.item.Name }}</td>
              <td class="text-xs-right">
                <v-btn flat color="error" left @click="deleteName(props.item.id)">Delete</v-btn>
            </td>
</template>
  </v-data-table>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      alert: false,
      clipped: false,
      headers: [
        {
          text: "Names",
          align: "left",
          sortable: false,
          value: "name"
        },
        {
          text: "Delete",
          value: "Delete"
        }
      ],
      items: [],
      image: "https://images3.alphacoders.com/205/thumb-1920-205149.jpg"
    };
  },
  created() {
    try {
      // this.$store.dispatch("fetch");
      // this.fetch();
      this.items = this.$store.state.items;
      this.message;
      this.count;
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
    },
    deleteGetter() {
      return this.$store.getters.deleteName;
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
    deleteName(id) {
      this.$store.state.id = id;
      this.deleteGetter;
    }
    // async fetch() {
    //   try {
    //     const response = await fetch(
    //       "https://fn5nx4fsp7.execute-api.us-east-1.amazonaws.com/dev/nsslha"
    //     );
    //     const data = await response.json();
    //     console.log("It worked! ", data);
    //     this.items = data;
    //     return;
    //   } catch (error) {
    //     throw new Error(err);
    //   }
    // }
  }
};
</script>

<style>
.table__overflow {
  margin-top: 40px;
}
</style>
