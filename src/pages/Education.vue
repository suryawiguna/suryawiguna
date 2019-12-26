<template>
  <Layout>
    <div id="education" class="content">
        <h1>Education</h1>
        <div v-for="(val, key) in educations" :key="key" class="content-text">
            <p class="label">{{ val.years }}</p>
            <h4 class="text">{{ val.name }}</h4>
            <p class="info">{{ val.desc }}</p>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Education'
  },
  data: function() {
        return {
            educations: [
                {
                    years: '2015-2019',
                    name: 'STMIK STIKOM Bali',
                    desc: 'Bachelor of Information System'
                },
                {
                    years: '2012-2015',
                    name: 'SMAN 5 Denpasar',
                    desc: ''
                },
                {
                    years: '2009-2012',
                    name: 'SMPN 6 Denpasar',
                    desc: ''
                },
                {
                    years: '2003-2009',
                    name: 'SDN 2 Sesetan',
                    desc: ''
                }
            ]
        }
    },
}
</script>
