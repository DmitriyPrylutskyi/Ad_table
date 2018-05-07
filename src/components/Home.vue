<template>
  <section>
    <v-container fluid>
      <v-layout>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.imageSrc"
              :to="'/ad/' + ad.id"
            >
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad in ads"
          :key="ad.id"
        >
          <v-card>
            <v-card-media
              :src="ad.imageSrc"
              height="200px">
            </v-card-media>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
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
    name: "Home"
  }
</script>

<style scoped>

</style>
