<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md6>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login form</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form ref="form" v-model="valid" validation>
              <v-text-field
                prepend-icon="email"
                name="email"
                label="Email"
                type="email"
                :rules="emailRules"
                required
                validate-on-blur
                v-model="email"
              >
              </v-text-field>
              <v-text-field
                id="password"
                prepend-icon="lock"
                name="password"
                label="Password"
                type="password"
                :counter="6"
                :rules="passwordRules"
                required
                validate-on-blur
                v-model="password"
              >
              </v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              :disabled =!valid
              @click="onSubmit"
            >
              Login
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
    export default {
      data () {
        return {
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
          ],
          password: '',
          passwordRules: [
            v => !!v || 'Password is required',
            v => (v && v.length >= 6) || 'Password must be no less than 6 characters'
          ],
          valid: false
        }
      },
      name: "Login",
      methods: {
        onSubmit () {
          if (this.$refs.form.validate()) {
            const user = {
              email: this.email,
              password: this.password
            }
            console.log(user);
          }
        }
      }
    }
</script>

<style scoped>

</style>
