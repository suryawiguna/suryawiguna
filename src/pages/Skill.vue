<template>
  <Layout>
    <div id="skill" class="content">
        <h1>Skill</h1>
        <div v-for="(val, key) in skills" :key="key" class="content-text">
            <h4 class="text">{{val.topic}}</h4>
            <div class="skill-items">
                <div v-for="(val, key) in val.items" :key="key" class="skill-item">
                    <g-image :src="val.src" alt="" class="skill-img" />
                    <p class="label">{{val.label}}</p>
                    <div class="progressBarContainer">
                        <div class="progressBarValue" v-bind:class="val.percent"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Skill'
  },
  data: function() {
        return {
            skills: [
                {
                    topic: 'Programming',
                    items: [
                        {
                            src: require('~/assets/images/laravel.jpg'),
                            label: 'Laravel',
                            percent: 'value-70'
                        },
                        {
                            src: require('~/assets/images/js.png'),
                            label: 'JavaScript',
                            percent: 'value-40'
                        },
                        {
                            src: require('~/assets/images/vuejs.png'),
                            label: 'Vue.js',
                            percent: 'value-30'
                        },
                        {
                            src: require('~/assets/images/android.jpg'),
                            label: 'Android',
                            percent: 'value-10'
                        },
                        {
                            src: require('~/assets/images/bootstrap.jpg'),
                            label: 'Bootstrap',
                            percent: 'value-70'
                        }
                    ]
                },
                {
                    topic: 'Design',
                    items: [
                    {
                        src: require('~/assets/images/xd.png'),
                        label: 'Adobe Xd',
                        percent: 'value-50'
                    },
                    {
                        src: require('~/assets/images/photoshop.jpg'),
                        label: 'Photoshop',
                        percent: 'value-50'
                    },
                    {
                        src: require('~/assets/images/ai.jpg'),
                        label: 'Illustrator',
                        percent: 'value-10'
                    },
                    {
                        src: require('~/assets/images/coreldraw.jpg'),
                        label: 'Corel Draw',
                        percent: 'value-20'
                    }]
                }
            ]
        }
    }
}
</script>
