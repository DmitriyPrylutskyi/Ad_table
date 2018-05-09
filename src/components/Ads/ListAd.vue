<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Ads</h1>
        <v-card
          class="elevation-12 mb-5"
          v-for="ad in myAds"
          :key="ad.id"
        >
          <v-layout>
            <v-flex xs4>
              <v-card-media
                :src="ad.imageSrc"
                height="200px">
              </v-card-media>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <div>
                  <h2 class="text--primary">{{ad.title}}</h2>
                  <p>{{ad.description}}</p>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      name: "ListAd",
      data () {
        return {

        }
      },
      computed : {
        myAds () {
          return this.$store.getters.myAds
        }
      }

    }
</script>

<style scoped>

</style>
