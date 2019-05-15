<template>
  <div id="app" class="container">
        <div class="nav-container">
            <div id="main-nav">
              <g-link id="nav-title" to="/blog" >Blog</g-link>
              <g-link id="about-me" to="/" exact>About Me</g-link>
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
    grid-template-columns: 1fr;
    grid-template-rows: 60px auto;
    grid-template-areas: 
        "nav"
        "main";
    width: 70%;
    max-width: 960px;
    height: 100vh;
  }
  .nav-container {
      grid-area: nav;
    display: flex;
    justify-content: flex-start;
    border-bottom: 1px solid #E0E0E0;
    position: fixed;
    width: 70%;
    max-width: 960px;
    height: 60px;
  }

  #main-nav {
      width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: white;
  }
  
  #main-nav a {
        text-decoration: none;
        color: rgb(29, 29, 29);
        font-size: 14px;
        padding: 0 10px;
        height: 100%;
      display: flex;
      align-items: center;
  }
  #main-nav a:hover {    
    font-weight: bold;
  }
  #main {
    padding: 0px 80px;
    grid-area: main;
  }
  #nav-title {
        font-size: 1.5em !important;
        font-weight: bold;
        font-family: 'Merriweather';
  }
  p {
      line-height: 1.4em;
  }
  .blog-post {
      margin: 40px 80px;
      padding: 30px;
      border: 1px solid #dfdfdf;
      border-radius: 10px;
  }
  p>img.g-image {
        height: 100px !important;
    }
  @media only screen and (max-width: 700px) {
    .container {
      grid-gap: 0;
      grid-template-columns: 1fr;
      grid-template-rows: 50px 1fr ;
      grid-template-areas: 
      "nav"
      "main";
      width: 100%;
      max-width: 100%;
    }
    .nav-container {
        grid-area: nav;
        display: flex;
      z-index: 1;
      overflow-x: auto;
      border-top: 1px solid #E0E0E0;
      background-color: #FFFFFF;
      border-right: none;
      top: 0;
      position: fixed;
      width: 100%;
      height: 50px;
      overflow-y: hidden;
    }
    #main {
        grid-area: main;
        overflow-y: auto;
        padding: 0 20px;
    }
    #main-nav a {
      font-size: 14px;
    }
    .blog-post {
      margin: 20px 10px;
    }
  }
</style>