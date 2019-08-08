<template>
    <Layout>
        <div id="card-container" v-for="{ node } in $page.allBlogPost.edges" :key="node._id">
            <g-link :to="node.path">
                <div class="blog-card">
                    <div class="blog-post">
                        <p class="title">{{ node.title }}</p>
                        <p class="desc" v-html="node.description"></p>
                        <div style="display: flex; justify-content: flex-start; margin-top:10px;">
                            <small>{{ node.date }}</small>
                        </div>
                    </div>
                    <g-image :src="node.image" />
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
                    date (format: "D MMMM YYYY")
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
    .title {
        font-size: 1.3em;
        font-weight: bold;
        font-family: Merriweather;
        padding: 0;
    }
    .desc {
        line-height: 1.5em;
        font-size: 16px;
    }
    #card-container {
        margin: 0px 60px;
    }
    .blog-card {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        height: 100%;
    }
    .blog-card>img {
        object-fit: cover;
        width: 30%;
        height: 100%;
    }
    .blog-post {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        margin-right: 20px;
    }
    small {
        align-self: flex-end;
        font-size: 11px;
        color: #7a7a7a;
    }
    @media only screen and (max-width: 700px) {
        #card-container {
            padding: 0 10px;
            margin: 0;
        }
    }
</style>