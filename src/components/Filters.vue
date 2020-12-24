<template>
  <CategoriesSelector :categories="categories" />
</template>

<script>
import CategoriesSelector from "../components/CategoriesSelector";

export default {
  name: "Filters",
  components: {
    CategoriesSelector,
  },
  props: {
    categories: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
