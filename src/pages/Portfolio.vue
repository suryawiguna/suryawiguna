<template>
  <Layout>
    <div id="portfolio" class="content">
        <h1>Portfolio</h1>
        <div v-for="(val, key) in portfolios" :key="key" class="content-text">
            <div class="link-wrapper">        
                <p class="label">{{ val.field }}</p>
            </div>
            <div class="link-wrapper">
                <a v-bind:href="val.link" v-bind:class="val.class" target="_blank">{{val.name}}</a>
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  },
  data: function() {
        return {
            portfolios: [
                {
                    field: 'Programming',
                    name: 'GitHub',
                    link: 'https://github.com/suryawiguna',
                    class: 'btn btn-github'
                },
                {
                    field: 'UI Design',
                    name: 'Behance',
                    link: 'https://behance.net/suryawiguna',
                    class: 'btn btn-behance'
                },
                {
                    field: 'Photo Editing',
                    name: 'Instagram',
                    link: 'https://instagram.com/swgcreative',
                    class: 'btn btn-instagram'
                },
                {
                    field: 'Photograph',
                    name: 'Shutterstock',
                    link: 'https://www.shutterstock.com/g/suryawigunaa',
                    class: 'btn btn-shutterstock'
                }
            ],
        }
    },
}
</script>
