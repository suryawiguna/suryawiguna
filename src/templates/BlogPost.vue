<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.blogPost.title }}</h1>
      <small style="color: #7a7a7a;">{{ $page.blogPost.date }}</small>
      <div id="paragraph" v-html="$page.blogPost.content"/>
    </div><br>
    <vue-disqus shortname="suryawigunaa" :identifier="$page.blogPost.title"></vue-disqus>
    <br><br>
    <g-link id="all-post" to="/blog">
        <span class="mdi mdi-arrow-left"></span> All posts
    </g-link>
    <br>
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

<style>
    .article {
        margin-top:25px 0;
    }
    .article>h1 {
        margin: 20px 0 10px;
        font-family: Merriweather;
        font-size: 2.3em;
    }
    #paragraph>h2 {
        margin-top: 30px;
    }
    #paragraph>p {
        font-size: 17px;
        line-height: 2em;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    #paragraph>p>img {
        max-width: 70%;
    }
    #all-post {
        text-decoration: none;
        border:1px solid #bbbbbb;
        color: #888888;
        padding:10px;
        border-radius:20px;
    }
    #all-post:hover {
        color: #444444;  
        border:1px solid #444444;
    }
    @media only screen and (max-width: 700px) {
        #paragraph>p>img {
            max-width: 100%;
        }
    }
</style>