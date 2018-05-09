<template>
  <v-container>
    <v-layout>
      <v-flex xs12>
        <v-card>
            <v-card-media
              :src="ad.imageSrc"
              height="200px">
            </v-card-media>
            <v-card-text>
              <div>
                <h2 class="text--primary">{{ad.title}}</h2>
                <p>{{ad.description}}</p>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat class="warning">Edit</v-btn>
              <v-btn class="success">Buy</v-btn>
            </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: "Ad",
      props: ['id'],
      data () {
        return {

        }
      },
      computed: {
        ad () {
          const id = this.id;
          return this.$store.getters.adById(id)
        }
      }
    }
</script>

<style scoped>

</style>
