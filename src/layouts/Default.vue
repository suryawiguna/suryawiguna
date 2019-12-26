<template>
  <div id="app" class="container">
        <div class="nav-container">
            <div id="main-nav">
                <g-link id="profile-nav" to="/" exact>
                    <li><span>Profile</span></li>
                </g-link>
                <g-link id="experience-nav" to="/experience" exact>
                    <li><span>Experience</span></li>
                </g-link>
                <g-link id="skill-nav" to="/skill" exact>
                    <li><span>Skill</span></li>
                </g-link>
                <g-link id="portfolio-nav" to="/portfolio" exact>
                    <li><span>Portfolio</span></li>
                </g-link>
                <g-link id="education-nav" to="/education" exact>
                    <li><span>Education</span></li>
                </g-link>
                <g-link id="contact-nav" to="/contact" exact>
                    <li><span>Contact</span></li>
                </g-link>
                <g-link to="/blog" exact>
                    <li><span>Blog</span></li>
                </g-link>
            </div>
        </div>

        <div id="main">
            <slot/>
        </div>
    </div>
</template>

<style scoped>
    .container {
      margin: 0 auto;
    display: grid;
    grid-template-columns: 150px 80%;
    grid-template-areas: "nav main";
    width: 100%;
    max-width: 1080px;
    height: 100vh;
  }
  .nav-container {
      grid-area: nav;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    border-right: 1px solid #E0E0E0;
    border-top: none;
    position: fixed;
    width: 150px;
    height: 100vh;
    overflow: auto;
  }

  #main-nav {
    grid-row: 1;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    background-color: white;
    overflow-x: hidden;
  }
  
  #main-nav a {
    text-decoration: none;
    color: rgb(29, 29, 29);
    padding: 1.75em;
    font-size: 14px;
  }
    #main-nav a li {
        padding: 0;
        list-style: none;
    }
    #main-nav a li span {
        border-radius: 100px;
        padding: 5px 10px;
    }
    #main-nav a:hover li span {    
        font-weight: bold;
        background-color: #fffeaf;
    }
    #main {
        grid-area: main;
        display: grid;
    }
  
  @media only screen and (max-width: 600px) {
    .container {
      grid-gap: 0;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 50px;
      grid-template-areas: 
      "main"
      "nav";
      width: 100%;
      max-width: 100%;
      height: 100%;
      max-height: 100%;
    }
    .nav-container {
        grid-area: nav;
        display: grid;
        grid-row: 2/3;
        z-index: 1;
        overflow-x: auto;
        border-top: 1px solid #E0E0E0;
        background-color: #FFFFFF;
        border-right: none;
        bottom: 0;
        position: fixed;
        width: 100%;
        height: 50px;
        overflow-y: hidden;
    }
    #main {
        grid-area: main;
        grid-row: 1/2;
        height: 100%;
        overflow-y: auto;
    }
    #main-nav {
      display: flex;
      overflow-x: scroll;
    }
    #main-nav a {
      flex: 1 0 100px;
      padding: 1.5em;
      font-size: 12px;
      text-align: center;
    }
  }
</style>
