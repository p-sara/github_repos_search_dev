<template>
    <div class="has-text-centered my-5">
<figure class="image is-inline-block is-128x128">
  <img class="is-rounded" :src="avatarUrl">
</figure>
</div>
</template>
<script>
export default {
  name: 'User',
  props: ['avatarUrl']
}
</script>