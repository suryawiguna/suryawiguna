<template>
  <Layout>
    <div class="article">
      <h1>{{ $page.blogPost.title }}</h1>
      <small style="color: #7a7a7a;">{{ $page.blogPost.date }}</small>
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
    <g-link id="all-post" to="/blog">
        <span class="mdi mdi-arrow-left"></span> All posts
    </g-link>
  </Layout>
</template>

<page-query>
  query BlogPost ($path: String!) {
    blogPost (path: $path) {
      title
      date (format: "D MMMM, YYYY")
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
        metaInfo () {
            return {
                title: this.$page.blogPost.title,
                meta: [
                    { name: "twitter:card", content: "summary_large_image" },
                    { name: "twitter:title", content: this.$page.blogPost.title },
                    { name: "twitter:description", content: this.$page.blogPost.description },
                    { name: "twitter:site", content: "@suryawigunaa" },
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
            var firstImage = document.getElementsByClassName("g-image")[0].getAttribute("data-srcset").split(' ')[2];
            console.log(firstImage);
            var meta = document.createElement('meta');
            meta.name = "twitter:image";
            meta.content = "http://www.bmkg.go.id/asset/img/logo/bg_BMKG.jpg";
            
            document.getElementsByTagName('head')[0].appendChild(meta);
            document.getElementById('share-fb').href = "https://www.facebook.com/sharer/sharer.php?u="+url;
            document.getElementById('share-wa').href = "https://wa.me/?text=Cek%20postingan%20ini%20"+url;
            document.getElementById('share-twitter').href = "https://twitter.com/share?url="+url+"&amp;text=Surya%20Wiguna%20Blog&amp;hashtags=suryawiguna";
            document.getElementById('share-linkedin').href = "https://www.linkedin.com/shareArticle?mini=true&url="+url;
            document.getElementById('share-email').href = "mailto:?Subject=Simple Share Buttons&amp;Body=Cek%20postingan%20ini%20 "+url;
        }
    }
</script>

<style>
    #paragraph, #sharethis {
        width: 100%;
        max-width: 100%;
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
        max-width: 100%;
    }
    #all-post {
        justify-self: center;
        text-decoration: none;
        border:1px solid #bbbbbb;
        color: #888888;
        padding:10px 15px;
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