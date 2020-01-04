<template>
    <Layout>
        <div id="experience" class="content">
            <h1>Experience</h1>
            <div v-for="(val,key) in experiences" :key="key" class="content-text">
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
        title: 'Experience'
    },
    data: function() {
        return {
            experiences: [
                {
                    years: '2019-now',
                    name: 'Ganeca Digital',
                    desc: 'Web developer (Laravel)'
                },
                {
                    years: '2019-now',
                    name: 'Freelance',
                    desc: 'Web developer'
                },
                {
                    years: '2019-now',
                    name: 'KSU Sedana Graha',
                    desc: 'IT Officer & Progammer'
                },
                {
                    years: '2019',
                    name: 'Kelas Membangun Progressive Web Apps (Dicoding.com)',
                    desc: 'Graduated'
                },
                {
                    years: '2019',
                    name: 'Fullstack Web Developer Course (BuildWithAngga.com)',
                    desc: 'Graduated'
                },
                {
                    years: '2018',
                    name: 'Mobile Web Specialist by Google Developers Kejar',
                    desc: 'Participant'
                },
                {
                    years: '2018',
                    name: 'Mobile Web Specialist by Google Developers Kejar',
                    desc: 'Participant'
                },
                {
                    years: '2018',
                    name: 'Internship as Web Developer',
                    desc: 'Developing web-based system to recording witnesses for the election of a Balinese governor from one of the parties'
                },
                // {
                //     years: '2018',
                //     name: 'CV. Artibali Mesari',
                //     desc: 'Internship Program as a Web Developer'
                // },
                {
                    years: '2016-now',
                    name: 'SWG Creative',
                    desc: 'Founder, Graphic Designer'
                },
                {
                    years: '2017',
                    name: 'Indonesia Android Kejar - Beginner',
                    desc: 'Member'
                },
                {
                    years: '2016-2017',
                    name: 'Unit Kegiatan Mahasiswa Programming of STIKOM Bali (UKM PROGRESS)',
                    desc: 'Chairman'
                },
                {
                    years: '2015-2016',
                    name: 'Unit Kegiatan Mahasiswa Programming of STIKOM Bali (UKM PROGRESS)',
                    desc: 'Vice Chairman 2'
                }
            ]
        }
    }
}
</script>
