<template>
  <div>
    <div class="columns">
      <div class="column is-one-third is-offset-one-third">
        <div class="card mb-5">
          <div class="card-content">
            <form
              action=""
              method="get"
              class="form"
              @submit.prevent="passFormData(name, type)"
            >
              <div class="field">
                <div class="control my-5">
                  <label class="label" for="name">Enter name:</label>
                  <input
                    class="input is-rounded"
                    type="text"
                    name="name"
                    aria-label="Name"
                    id="name"
                    placeholder="Type name"
                    v-model="name"
                  />
                </div>
              </div>
              <div class="field">
                <div class="control mb-5">
                  <label class="label" for="type">Enter type:</label>
                  <div class="select is-rounded is-fullwidth">
                    <select name="type" aria-label="Type" id="type" v-model="type">
                      <option>user</option>
                      <option>organisation</option>
                    </select>
                  </div>
                </div>
              </div>
              <div class="has-text-centered">
                <input
                  class="button is-primary is-large is-rounded"
                  :disabled="!name || !type"
                  type="submit"
                  value="Search"
                />
              </div>
              <a tabindex="0" @click="clearData()" @keydown.enter="clearData()">Clear data</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      name: null,
      type: null
    };
  },
  methods: {
    passFormData(name, type) {
      this.$emit("form-data", {
        name,
        type,
      });
    },
    clearData() {
        this.name = null;
        this.type = null;
    }
  },
};
</script>
<style scoped>
.card {
  border-radius: 10px;
  background-color: #ffffffa3;
}
</style>
