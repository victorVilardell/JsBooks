<template>
  <section>
    <select name="categories">
      <option
        v-for="category in categories"
        :key="category.category_id"
        :value="category.category_id"
      >
        {{ category.name }}
      </option>
    </select>
  </section>
</template>

<script>
export default {
  name: "CategoriesSelector",
  props: {
    categories: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
