<template>
<div class="columns">
    <div class="column is-3 is-offset-5 notification is-danger">
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