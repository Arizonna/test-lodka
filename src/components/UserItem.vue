<template>
  <li>
    <span>
      {{ user.id }}, {{user.name}}, {{user.username}}, {{user.email}}
    </span>
  </li>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
}
</script>

<style scoped>
 li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}
</style>