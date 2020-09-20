<template>
  <div id="app">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title my-5">
            Public repositories search
          </h1>
          <p class="py-5 my-5">
            To search for public repositories of a user or an organisation,
            please fill the form
          </p>
          <Form v-on:form-data="getRepositories($event)" />
          <Alert v-if="message" :message="message" />
          <User v-if="avatarUrl" :avatarUrl="avatarUrl" />
          <Repos v-if="repos" :repos="repos" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
import User from "./components/User.vue";
import Repos from "./components/Repos.vue";
import Alert from "./components/Alert.vue";

export default {
  name: "App",
  components: {
    Form,
    User,
    Repos,
    Alert
  },
  data() {
    return {
      repos: null,
      avatarUrl: null,
      message: null
    };
  },
  methods: {
    getRepositories($event) {
      if (this.message) {
        this.message = null;
      }

      return $event.type === "user"
        ? this.getForUser($event.name)
        : this.getForOrganization($event.name);
    },
     // for both getForUser and getForOrganization functions
     // if call for repositories is successful, a call for user avatar can be sent, as extra touch,
    // otherwise alert of failure is shown 
    getForUser(name) {
      this.$http
        .get(`/users/${name}/repos`)
        .catch(error => this.message = error)
        .then((response) => {
          this.repos = response.data

          this.$http
           .get(`/users/${name}`)
           .catch(() => this.avatarUrl = null)
           .then((response) => (this.avatarUrl = response.data.avatar_url));
        });
    },

    getForOrganization(name) {
      this.$http
        .get(`/orgs/${name}/repos`)
        .catch(error => this.message = error)
        .then((response) => {
          this.repos = response.data

          this.$http
           .get(`/orgs/${name}`)
           .catch(() => this.avatarUrl = null)
           .then((response) => (this.avatarUrl = response.data.avatar_url));
        });
    },
  },
};
</script>

<style scoped>
.hero.is-primary {
  /* if gradient can't be displayed, background will fall to what's defined in is-primary class*/
  background: linear-gradient(
    149deg,
    rgba(0, 209, 178, 1) 0%,
    rgba(253, 187, 45, 1) 100%
  );
}
</style>
