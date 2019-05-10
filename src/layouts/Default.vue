<template>
  <div id="app" class="container">
        <div class="nav-container">
            <div id="main-nav">
              <g-link id="profile-nav" to="/" exact>Profile</g-link>
              <g-link id="experience-nav" to="/experience" exact>Experience</g-link>
              <g-link id="skill-nav" to="/skill" exact>Skill</g-link>
              <g-link id="portfolio-nav" to="/portfolio" exact>Portfolio</g-link>
              <g-link id="education-nav" to="/education" exact>Education</g-link>
              <g-link id="contact-nav" to="/contact" exact>Contact</g-link>
              <a id="blog-nav" href="https://suryawiguna.home.blog">Blog</a>
            </div>
        </div>

        <div id="main">
            <slot/>
        </div>
    </div>
</template>