<template>
  <Layout>
    <div id="profile" class="content">
        <h1>Profile</h1>
        <div class="image">
            <g-image src="~/assets/images/me2.jpg" alt="" id="me"/>
        </div>
        <div v-for="(value, key) in profile" :key="key" class="content-text">
            <p class="label">{{ key }}</p>
            <h4 class="text">{{ value }}</h4>
        </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Profile'
  },
  data: function() {
        return {
            profile: {
                Name: 'I Ketut Surya Wiguna',
                "Nick Name": 'Surya',
                Birthday: 'February 28, 1998',
                Titles: 'Web Developer, Graphic Designer',
                Location: "Denpasar, Bali",
                Gender: "Male",
                Nationality: "Indonesia"
            },
        }
    },
}
</script>
