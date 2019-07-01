---
title: Punya Website Pribadi
date: 2019-07-01 16:33:00
slug: punya-website-pribadi
description: "Cerita migrasi website pribadi ke gridsome"
image: "./images/1.jpg"
---

Sudah lama aku ingin punya website pribadi yang jadi tempat untuk membentuk personal branding dan menuangkan pikiran ke dalam tulisan lewat blog. Namun, setelah aku coba berbagai platform mulai dari blog mainstream seperti Blogspot, Wordpress, hingga yang agak indie seperti GitHub Pages, semua websiteku yang sebelumnya itu masih tradisional dan aku merasa kurang memiliki kendali yang sepenuhnya atas websiteku sendiri. Akhirnya aku mengenal Vue.js dengan segala fiturnya dan site generator yang memanfaatkan Vue.js [Gridsome](https://gridsome.org) contohnya, yang aku pakai untuk membuat websiteku sekarang ini.

## Kenapa Gridsome?

![logo gridsome](./images/gridsome.png)

Memang selain Gridsome, ada juga Nuxt dan Vuepress yang sama-sama pakai Vue.js. Tapi aku memilih untuk memakai Gridsome. Kenapa? Pertama, aku lihat Gridsome lebih simple dan cocok untuk website yang gak terlalu kompleks seperti website pribadi jika dibandingkan dengan yang lainnya dengan fitur yang lebih banyak dan kurasa gak bakal kepakai. Hal yang membuat gridsome menarik adalah mudahnya membuat halaman, manajemen kode yang enak, hot reload, GraphQL, static file generation, dan yang paling kentara, tiap klik link gak ada loading lagi di browser.

## Markdown dan GraphQL

Beberapa hal baru yang aku pelajari saat develop website pakai gridsome adalah Markdown dan GraphQL selain Vue.js juga pastinya. Markdown dan GraphQL ini paling terasa saat *ngeblog*. Jadi biasanya orang *ngeblog* akan pakai text editor, tapi di Gridsome ini untuk buat postingan itu pakai file Markdown. Markdown itu intinya adalah file berekstensi .md yang punya format sendiri yang biasanya dipakai untuk membuat file statis seperti dokumentasi dan bisa juga untuk blog. Contohnya seperti ini:



Sedangkan GraphQL itu merupakan bahasa query untuk mengambil data, yang penggunaannya familiar seperti JSON. Jadi ringkasnya setiap file .md yang ada akan menjadi sebuah postingan blog yang diterjemahkan lewat GraphQL ini. Explore lebih jauh di [websitenya GraphQL](https://graphql.org).



Untuk sekarang aku sudah cukup puas dengan websiteku sekarang, semoga dengan ini saya bisa lebih sering menulis untuk berbagi ke kalian tentang apapun yang terlintas.