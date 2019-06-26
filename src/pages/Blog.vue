<template>
    <Layout>
        <div v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
            <g-link :to="node.path">
                <div class="blog-card">
                    <g-image :src="node.image" />
                    <div class="blog-post">

                        <h5 class="title">
                                {{ node.title }}
                        </h5>
                        <p v-html="node.description"></p>
                        <div style="display: flex; justify-content: flex-end;">
                            <small>{{ node.date }}</small>
                        </div>
                    </div>
                </div>
            </g-link>
        </div>
    </Layout>
</template>

<page-query>
    query Home ($page: Int) {
        allBlogPost (page: $page) {
            edges {
                node {
                    _id
                    title
                    path
                    slug
                    description
                    date (format: "D MMM YYYY")
                    image
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
    .blog-card {
        margin: 0;
        border: 1px solid #dfdfdf;
        border-radius: 10px;
    }
    .blog-card>img {
        object-fit: cover;
        width: 100%;
        height: 300px;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
    }
    .blog-post {
        padding: 30px;
    }
    .blog-card:hover {
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
    @media only screen and (max-width: 600px) {
        .blog-card>img {
            height: 150px;
        }
    }
</style>