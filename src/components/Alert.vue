<template>
    <div class="notification is-danger">
  <button class="delete"></button>
  {{message}}
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