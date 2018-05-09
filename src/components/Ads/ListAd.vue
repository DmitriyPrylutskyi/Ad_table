<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">My Ads</h1>
        <v-card
          class="elevation-12 mb-5"
          v-for="ad in ads"
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
      data () {
        return {
          ads: [
            {
              title: 'First ad',
              description: 'Hello i am description',
              promo: false,
              imageSrc: '/static/img/image-1.png',
              id: '1'
            },
            {
              title: 'Second ad',
              description: 'Hello i am description',
              promo: true,
              imageSrc: '/static/img/image-2.png',
              id: '2'
            },
            {
              title: 'Third ad',
              description: 'Hello i am description',
              promo: true,
              imageSrc: '/static/img/image-3.png',
              id: '3'
            }
          ]
        }
      },
      name: "ListAd"
    }
</script>

<style scoped>

</style>
