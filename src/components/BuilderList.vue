<template>
  <section>
    <article v-for="book in books" :key="book.id">
      <figure>
        <img :src="book.cover" :alt="book.title" />
        <figurecaption>{{ book.pages }}</figurecaption>
      </figure>
      <div class="content-data">
        <hgroup>
          <h3>{{ book.title }}</h3>
          <img :src="`${book.language}.svg`" :alt="book.language" />
        </hgroup>
        <p class="author">{{ book.author }}</p>
        <section>
          <p>Categories:</p>
          <ul>
            <li v-for="category in book.categories" :key="category.catefory_id">
              {{ category.name }}
            </li>
          </ul>
        </section>
      </div>
      <blockquote>{{ book.content }}</blockquote>
    </article>
  </section>
</template>

<script>
export default {
  name: "BuilderList",
  props: {
    books: Array,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
article {
  display: flex;
  padding: 20px 0;
}
article:not(:last-child) {
  border-bottom: 1px dashed #888;
}
h3 {
  margin-bottom: 5px;
  color: #000;
}
p {
  margin-top: 0;
  padding-top: 0;
}
.author {
  font-size: 10px;
  font-style: italic;
}
figure {
  width: 20%;
  position: relative;
}
figure img {
  width: 100%;
}
figure figurecaption {
  position: absolute;
  bottom: 0;
  right: -5px;

  font-weight: bold;
  font-size: 12px;
  color: white;
  padding: 5px 10px;
  background-color: green;
  border-radius: 5px;
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0, 69, 0, 0.64);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0, 69, 0, 0.64);
  box-shadow: 2px 2px 5px 0px rgba(0, 69, 0, 0.64);
}
.content-data {
  display: flex;
  flex-direction: column;
}
hgroup {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
hgroup img {
  margin-left: 10px;
}
blockquote {
  display: none;
}
</style>
