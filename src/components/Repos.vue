<template>
  <div>
    <table class="table is-fullwidth mt-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="repo in repos" :key="repo.id">
          <td>
            <a :href="repo.html_url" target="_blank">{{ repo.name }}</a>
          </td>
          <td>{{ repo.description }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Repos",
  props: ["repos"],
};
</script>
<style scoped>
.table {
  border-radius: 10px;
  background-color: #ffffffa3;
}
</style>
