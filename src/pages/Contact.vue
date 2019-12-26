<template>
  <Layout>
    <div id="contact" class="content">
        <h1>Contact</h1>
        <div class="content-text">
            <div class="skill-items">
                <div v-for="(val, key) in contacts" :key="key" class="skill-item">
                    <a v-bind:href="val.link">
                        <g-image :src="val.src" alt="" class="skill-img"/>
                        <p class="label">{{val.name}}</p>
                    </a>
                </div>
            </div>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Contact'
  },
  data: function() {
        return {
            contacts: [
                {
                    name: 'Email',
                    src: require('~/assets/images/email.png'),
                    link: 'mailto:ketut@suryawiguna.com'
                },
                {
                    name: 'LinkedIn',
                    src: require('~/assets/images/linkedin.png'),
                    link: 'https://www.linkedin.com/in/suryawigunaa'
                },
                {
                    name: 'Instagram',
                    src: require('~/assets/images/instagram.png'),
                    link: 'https://instagram.com/suryawigunaa'
                },
                {
                    name: 'Facebook',
                    src: require('~/assets/images/facebook.png'),
                    link: 'https://facebook.com/suryawigunaa'
                },
                {
                    name: 'Twitter',
                    src: require('~/assets/images/twitter.png'),
                    link: 'https://twitter.com/suryawigunaa'
                },
            ]
        }
    },
}
</script>
