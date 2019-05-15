<template>
    <Layout>
        <div class="blog-container" v-for="(val, key) in $page.blogPost.edges" :key="key">
            <g-link :to="val.node.path">
                <div class="blog-post">
                    <h5 class="title">
                            {{ val.node.title }}
                    </h5>
                    <p v-html="val.node.excerpt"></p>
                    <div style="display: flex; justify-content: flex-end;">
                        <small>{{ val.node.date }}</small>
                    </div>
                </div>
            </g-link>
        </div>
    </Layout>
</template>

<page-query>
    query BlogPost {
        blogPost: allBlogPost {
            edges {
                node {
                    title
                    path
                    excerpt
                    date (format: "D MMM YYYY")
                }
            }
        }
    }
</page-query>

<script>
    import Layout from "~/layouts/BlogLayout.vue"

    export default {
        metaInfo: {
            title: 'Blog'
        },
        components: {
            Layout
        }
    }
</script>

<style scoped>
    a {
        text-decoration: none;
        color: #000000;
    }
    div>h5 {
        text-decoration: none;
        font-family: Volkorn;
        font-weight: bold;
        color: #000000;
        font-size: 1.7em;
    }
    div>p {
        line-height: 1.5em;
        font-size: 17px;
    }
    .blog-container {
        margin: 25px 0;
    }
    .blog-post {
        padding: 30px;
        border: 1px solid #dfdfdf;
        border-radius: 10px;
    }
    .blog-post:hover {
        border: 1px solid #444444;
    }
    small {
        font-size: 11px;
        color: #7a7a7a;
    }
    .title {
        font-size: 1.5em;
        margin-bottom: 5px;
        font-weight: bold;
        font-family: 'Merriweather';
    }
    @media only screen and (max-width: 1080px) {
        .blog-container {
            margin: 30px 0;
        }
    }
    @media only screen and (max-width: 700px) {
        .blog-container {
            margin: 20px auto;
        }
    }
</style>