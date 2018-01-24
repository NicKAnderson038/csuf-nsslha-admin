<template>
  <v-dialog v-model="dialog" max-width="260">
          <v-card>
            <v-card-title class="headline">Delete {{ props.item.Name }}?</v-card-title>
            <v-card-text>Permanently remove {{ props.item.Name }} from the data table?</v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" flat="flat" right @click="deleteName(props.item.id)">Delete</v-btn>
              <v-btn color="grey darken-1" flat="flat" @click.native="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      props: props
    };
  },
  props: ["props"],
  methods: {
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
        this.dialog = false;
        this.fetch();
        return;
      } catch (err) {
        throw new Error(err);
      }
    }
  }
};
</script>
