<template>
  <v-layout column>
      <v-flex xs6 offset-xs3>
          <div class="white elevation-2">
              <v-toolbar flat dense class="cyan" dark>
                  <v-toolbar-title>Register</v-toolbar-title>
              </v-toolbar>

              <div class="pl-4 pr-4 pt-2 pb-2">
                <v-text-field

         label="Label Text"
         v-model="email"
       ></v-text-field>

       <v-text-field

          label="Password"
          v-model="password"
      ></v-text-field>

              </div>
              <br>
              <div class="error" v-html="error" />
              <br>
              <v-btn class="cyan"
                  @click="register">
                  Register
              </v-btn>

          </div>
      </v-flex>
  </v-layout>

</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'
  export default {

    data() {
      return {
        email: 'abc',
        password: '123',
        error: null
      }
    },
    methods: {
      async register() {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red
  }
</style>
