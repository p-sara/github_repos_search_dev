<template>
<div class="columns">
    <div class="column is-one-third is-offset-one-third notification is-danger">
  <button class="delete"></button>
  {{message}}
</div>
</div>
</template>
<script>
export default {
  name: "Alert",
  props: ["message"],
};
</script>
<style scoped>
.notification {
    transition: 0.5s all ease;
}
</style>