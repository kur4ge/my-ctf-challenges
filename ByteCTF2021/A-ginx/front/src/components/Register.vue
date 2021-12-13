<template>
  <b-container>
    <b-row>
      <b-form @submit="onSubmit" @reset="onReset">
        <h1>Register</h1>
        <b-form-group label="Username:" label-for="username">
          <b-form-input
            id="username"
            v-model="form.username"
            type="text"
            placeholder="Enter username"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group label="Password:" label-for="password">
          <b-form-input
            id="password"
            v-model="form.password"
            placeholder="Enter password"
            type="password"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button> &nbsp;
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-row>
  </b-container>
</template>

<script>
import { register } from "@/api/api";

export default {
  name: "Register",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      register(this.form).then((res) => {
        let data = res.data;
        if (data.status == 0) {
          alert(data.message);
        } else {
          alert(data.message);
        }
      });
    },
    onReset(event) {
      event.preventDefault();
      this.form.username = "";
      this.form.password = "";
    },
  },
  computed: {},
};
</script>

<style scoped>
form {
  margin: auto;
}
</style>
