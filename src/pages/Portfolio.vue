<template>
  <Layout>
    <div id="portfolio" class="content">
        <h1>Portfolio</h1>
        <div v-for="(val, key) in portfolios" :key="key" class="content-text">
            <div class="link-wrapper">        
                <p class="label">{{ val.field }}</p>
            </div>
            <div class="portfolio-container">
                <div v-for="(val, key) in val.imgs" :key="key" class="link-wrapper">
                    <a v-bind:href="val.link" class="p-link" target="_blank">
                        <g-image :src="val.src" alt="" class="portfolio-img" width="400" quality="75"/>
                    </a>
                </div>
            </div>
            <a v-bind:href="val.link" :class="val.class" target="_blank">
                See more on {{val.name}}
            </a>
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
                    class: 'btn btn-github',
                    imgs: [
                        {
                            src: require('~/assets/images/portfolios/programming/gastrip.jpg'),
                            link: 'https://gastrip.herokuapp.com/',
                        },
                        {
                            src: require('~/assets/images/portfolios/programming/football-pwa.png'),
                            link: 'https://premiere-league-app-100.firebaseapp.com/',
                        },
                        {
                            src: require('~/assets/images/portfolios/programming/saksi.png'),
                            link: 'https://github.com/suryawiguna/saksi',
                        },
                        {
                            src: require('~/assets/images/portfolios/programming/geopark.png'),
                            link: 'https://geopark.netlify.com/',
                        },
                        {
                            src: require('~/assets/images/portfolios/programming/mbx.png'),
                            link: 'https://github.com/suryawiguna/mbx',
                        },
                    ]
                },
                {
                    field: 'UI Design',
                    name: 'Behance',
                    link: 'https://behance.net/suryawiguna',
                    class: 'btn btn-behance',
                    imgs: [
                        {
                            src: require('~/assets/images/portfolios/uidesign/cover.jpg'),
                            link: 'https://www.behance.net/gallery/83639655/Fruito-Web',
                        },
                        {
                            src: require('~/assets/images/portfolios/uidesign/geopark_cover.jpg'),
                            link: 'https://www.behance.net/gallery/82942741/Batur-Global-Geopark-Website-Concept',
                        },
                    ]
                },
                {
                    field: 'Graphic Design',
                    name: 'Instagram',
                    link: 'https://instagram.com/swgcreative',
                    class: 'btn btn-instagram',
                    imgs: [
                        {
                            src: require('~/assets/images/portfolios/graphicdesign/piesusu.jpg'),
                            link: 'https://www.instagram.com/p/BrM9GXdB9nc/',
                        },
                        {
                            src: require('~/assets/images/portfolios/graphicdesign/ig.jpg'),
                            link: 'https://www.instagram.com/p/BzfSks5gYEU/',
                        }
                    ]
                },
                {
                    field: 'Photography',
                    name: 'Shutterstock',
                    link: 'https://www.shutterstock.com/g/suryawigunaa',
                    class: 'btn btn-shutterstock',
                    imgs: [
                        {
                            src: require('~/assets/images/portfolios/photography/sky.jpg'),
                            link: 'https://www.shutterstock.com/image-photo/big-wall-meeting-sky-afternoon-1205154844',
                        },
                        {
                            src: require('~/assets/images/portfolios/photography/stairs.png'),
                            link: 'https://www.shutterstock.com/image-photo/stairwell-bottom-your-life-1360709387',
                        },
                        {
                            src: require('~/assets/images/portfolios/photography/lotus.png'),
                            link: 'https://www.shutterstock.com/image-photo/lotus-bee-were-together-beautiful-day-1213547590',
                        },
                    ]
                }
            ],
        }
    },
}
</script>

<style>
    .portfolio-container {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .p-link {
        filter: brightness(80%);
        flex: 1 0 50%;
        margin: 5px;
        transition: all .05s ease-in-out;
    }
    .p-link:hover {
        filter: brightness(100%);
        transform: scale(1.01);
    }
    .portfolio-img {
        width: 100%;
        height: 100%;
    }
    @media only screen and (max-width: 850px){
        .link-wrapper {
            width: 50%;
        }
    }
</style>