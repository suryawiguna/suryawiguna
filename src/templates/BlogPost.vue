<template>
  <Layout>
    <div class="post-container">
        <div class="article">
        <h1>{{ $page.blogPost.title }}</h1>
        <small style="color: #7a7a7a;">{{ $page.blogPost.date }}</small>
        <g-image :src="$page.blogPost.image" style="margin-top:15px;"/>
        <div id="paragraph" v-html="$page.blogPost.content"/>
        </div>
        <div id="share-this">
            <h5>Share This</h5>
            <div id="share-buttons">    
                <!-- Facebook -->
                <a id="share-fb" href="#" target="_blank" class="share-btn" title="Share to Facebook">
                    <span class="mdi mdi-facebook mdi-24px"></span>
                </a>
                <!-- WhatsApp -->
                <a id="share-wa" href="#" target="_blank" class="share-btn" title="Share to WhatsApp">
                    <span class="mdi mdi-whatsapp mdi-24px"></span>
                </a>
                <!-- Twitter -->
                <a id="share-twitter" href="#" target="_blank" class="share-btn" title="Share to Twitter">
                    <span class="mdi mdi-twitter mdi-24px"></span>                
                </a>
                <!-- LinkedIn -->
                <a id="share-linkedin" href="#" target="_blank" class="share-btn" title="Share to LinkedIn">
                    <span class="mdi mdi-linkedin mdi-24px"></span>                
                </a>
                <!-- Email -->
                <a id="share-email" href="#" class="share-btn" title="Share to Email">
                    <span class="mdi mdi-email mdi-24px"></span>
                </a>
            </div>
        </div>
        <vue-disqus shortname="suryawigunaa" :identifier="$page.blogPost.title"></vue-disqus>
        <div class="footer-btn">
            <g-link id="all-post" title="See all posts" to="/blog">
                <span class="mdi mdi-arrow-left"></span> All posts
            </g-link>
        </div>
    </div>
  </Layout>
</template>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM YYYY")
      content
      slug
      image
      description
    }
  }
</page-query>

<script>
    import Layout from "~/layouts/BlogLayout.vue"
    export default {
        computed: {
            getImage() {
                let coverImage = "";
                const cover = this.$page.blogPost.image;
                if (cover != null) {
                    coverImage = `${this.getBaseUrl}${this.$page.blogPost.image.src}`;
                }
                return coverImage;
            },
            getBaseUrl() {
                return "https://suryawiguna.com";
            }
        },
        metaInfo () {
            return {
                title: this.$page.blogPost.title,
                meta: [
                    { name: "twitter:card", content: "summary" },
                    { name: "twitter:title", content: this.$page.blogPost.title },
                    { name: "twitter:description", content: this.$page.blogPost.description },
                    { name: "twitter:site", content: "@suryawigunaa" },
                    { name: "twitter:image", content: this.getImage },
                    { name: "twitter:creator", content: "@suryawigunaa" },
                ],
                script: [{ src: "https://platform.twitter.com/widgets.js", async: true }]
            }
        },
        components: {
            Layout
        },
        mounted() {
            var url = window.location.href;

            document.getElementById('share-fb').href = "https://www.facebook.com/sharer/sharer.php?u="+url;
            document.getElementById('share-wa').href = "https://wa.me/?text=Cek%20postingan%20ini%20"+url;
            document.getElementById('share-twitter').href = "https://twitter.com/share?url="+url+"&amp;text=Surya%20Wiguna%20Blog&amp;hashtags=suryawiguna";
            document.getElementById('share-linkedin').href = "https://www.linkedin.com/shareArticle?mini=true&url="+url;
            document.getElementById('share-email').href = "mailto:?Subject=Simple Share Buttons&amp;Body=Cek%20postingan%20ini%20 "+url;
        }
    }
</script>

<style>
    .post-container {
        padding: 0 40px;
        display: flex;
        flex-direction: column;
    }
    .footer-btn {
        margin: 70px 0 0;
        display: flex;
        justify-content: center;
        align-items:center;
    }
    #paragraph, #sharethis {
        width: 100%;
        max-width: 100%;
    }
    #share-this {
        margin: 40px 0;
    }
    p>a {
        color: #000000;
    }
    #share-buttons {
        display: flex;
    }
    .share-btn {
        display: flex;
        justify-content: center;
        align-content: center;
        margin: 5px;
        color: #ffffff;
        padding: 5px;
        border-radius: 50%;
        height: 35px;
        width: 35px;
    }
    .share-btn:hover {
        box-shadow: 0 0 0px 1px #000000;
    }
    #share-fb {background-color: #3b5998;}
    #share-wa {background-color: #25d366;}
    #share-twitter {background-color: #1DA1F2;}
    #share-linkedin {background-color: #0077B5;}
    #share-email {background-color: #444444;}
    .article>h1 {
        margin: 0px 0 10px;
        font-size: 2em;
        font-family: Merriweather;
    }
    #paragraph>h2 {
        margin-top: 30px;
        font-family: Merriweather;
    }
    #paragraph>p {
        font-size: 17px;
        line-height: 2em;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    img {
        max-width: 100%;
    }
    #all-post {
        font-weight: 400;
        text-decoration: none;
        color: #FFFFFF;
        background-color: #6d6d6d;
        padding: 5px 15px;
        border-radius:20px;
    }
    #all-post:hover {
        font-weight: bold;
        background-color: #2b2b2b;
    }
    @media only screen and (max-width: 700px) {
        .post-container {
            padding: 0 10px;
        }
        #paragraph>p>img {
            max-width: 100%;
        }
    }
</style>