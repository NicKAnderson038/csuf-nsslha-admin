<template>
   <v-layout>
    <v-flex lg10 md10 xs10 sm10 offset-sm1>
      <v-card style="margin-top:60px;">
        <v-card-media src="https://wallpaper.wiki/wp-content/uploads/2017/05/Adventure-Time-Treasury.jpg" height="260px">
        </v-card-media>
   <v-data-table
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.Name }}</td>
      <td class="text-xs-right">{{ props.item.Email }}</td>
      <td class="text-xs-right">{{ props.item.Phone }}</td>
      <td class="text-xs-right">{{ props.item.Nsslha }}</td>
      <td class="text-xs-right">{{ props.item.Csha }}</td>
      <td class="text-xs-right">{{ props.item.Attendance }}</td>
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
      clipped: false,
      headers: [
        {
          text: "Names",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Email", value: "Email" },
        { text: "Phone", value: "Phone" },
        { text: "Nsslha", value: "Nsslha" },
        { text: "Csha", value: "Csha" },
        { text: "Attendance", value: "Attendance" }
      ],
      items: []
    };
  },
  created() {
    try {
      this.fetch();
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
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
