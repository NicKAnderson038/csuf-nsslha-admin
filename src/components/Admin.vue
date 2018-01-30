<template>
  <v-layout>
    <v-flex lg10 md10 xs10 sm10 offset-sm1>
      <v-card style="margin-top:60px;">
        <!-- <v-btn color="primary" @click="pressed()">Button</v-btn> -->
        <div class="text-xs-left">
          <v-btn color="success" to="/">Home Page</v-btn>
          <v-btn color="error" to="delete-user">Delete Page</v-btn>
          <v-btn color="primary" @click="alert = !alert">Number Of Respondents</v-btn>
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
              <td class="text-xs-right">{{ props.item.Email }}</td>
              <td class="text-xs-right">{{ props.item.Phone }}</td>
              <td class="text-xs-right">{{ props.item.Nsslha }}</td>
              <td class="text-xs-right">{{ props.item.Csha }}</td>
              <td class="text-xs-right">{{ props.item.Attendance }}</td>
              <!-- <td class="text-xs-right">
                <v-btn flat color="error" left @click="deleteName(props.item.id)">Delete</v-btn>
            </td> -->
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
          text: "Email",
          value: "Email"
        },
        {
          text: "Phone",
          value: "Phone"
        },
        {
          text: "Nsslha",
          value: "Nsslha"
        },
        {
          text: "Csha",
          value: "Csha"
        },
        {
          text: "Attendance",
          value: "Attendance"
        }
        // {
        //   text: "Delete",
        //   value: "Delete"
        // }
      ],
      items: [],
      image:
        "https://wallpaper.wiki/wp-content/uploads/2017/05/Adventure-Time-Treasury.jpg"
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
    }
  },
  methods: {
    pressed() {
      // /* accessing mutations */
      // this.$store.commit("increment", 10);
      // /* accessing actions */
      this.$store.dispatch("actIncrement", 20);
      this.$store.dispatch("getFetch");
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
