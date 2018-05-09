<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Create New Ad</h1>
        <v-form ref="form" v-model="valid" validation>
          <v-text-field
            name="title"
            label="Ad Title"
            type="text"
            :rules="titleRules"
            required
            validate-on-blur
            v-model="title"
          >
          </v-text-field>
          <v-text-field
            name="description"
            label="Ad description"
            type="text"
            multi-line
            no-resize
            :rules="descriptionRules"
            required
            validate-on-blur
            v-model="description"
          >
          </v-text-field>
        </v-form>
        <v-layout row>
          <v-flex xs12>
            <v-btn
              color="warning"
              class="black--text"
            >
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 mt-4>
            <img src="" alt="">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 mt-4>
            <v-switch
              label="Add to Promo"
              color="success"
              v-model="promo"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12 mt-4>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              :disabled="!valid"
              @click="createAd"
            >
              Create Ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      data () {
        return {
          title: '',
          titleRules: [
            v => !!v || 'Title is required'
          ],
          description: '',
          descriptionRules: [
            v => !!v || 'Description is required'
          ],
          promo: false,
          valid: false
        }
      },
      name: "NewAd",
      methods: {
        createAd () {
          if (this.$refs.form.validate()) {
            const ad = {
              title: this.title,
              description: this.description,
              promo: this.promo
            };
            console.log(ad);
          }
        }
      }
    }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
