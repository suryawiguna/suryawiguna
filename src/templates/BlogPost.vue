<template>
  <Layout>
    <div class="article" style="margin-top:25px;">
      <h1 style="margin:10px 0; font-family: Volkorn">{{ $page.blogPost.title }}</h1>
      <small style="color: #7a7a7a;">{{ $page.blogPost.date }}</small>
      <g-image :src="$page.blogPost.image"/>
      <div id="paragraph" v-html="$page.blogPost.content" style="line-height: 2em; margin-top: 10px; margin-bottom: 10px;"/>
    </div><br>
    <g-link to="/blog" style="text-decoration: none; border:1px solid black;padding:10px;border-radius:20px;">
        <span class="mdi mdi-arrow-left"></span> Back
    </g-link>
  </Layout>
</template>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
      content
    }
  }
</page-query>

<script>
    import Layout from "~/layouts/BlogLayout.vue"

    export default {
        metaInfo () {
            return {
                title: this.$page.blogPost.title
            }
        },
        components: {
            Layout
        }
    }
</script>

<style scoped>
</style>