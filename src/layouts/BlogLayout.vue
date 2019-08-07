<template>
  <div id="app" class="container">
        <div class="nav-container">
            <div id="main-nav">
              <g-link id="nav-title" to="/blog" >Blog</g-link>
              <g-link id="about-me" to="/" exact>
                <li><span>About Me</span></li>
              </g-link>
            </div>
        </div>

        <div id="main">
            <div class="blog-container">
                <slot/>
            </div>
            <footer>
                <small>Blog by <g-link to="/">Surya Wiguna</g-link></small>
            </footer>
        </div>
    </div>
</template>

<style scoped>
.container {
      margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 1fr;
    grid-template-areas: 
        "nav"
        "main";
    width: 100%;
    max-width: 100%;
    height: 100vh;
  }
  .nav-container {
      grid-area: nav;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #E0E0E0;
    position: fixed;
    width: 100%;
    max-width: 100%;
    height: 60px;
    background-color: white;
  }
  .blog-container {
      margin: 30px 0;
      display: grid;
      grid-gap: 30px;
      grid-template: 1fr/1fr;
      width: 100%;
  }
  #main-nav {
      width: 100%;
      max-width: 800px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
  }
  .active {
      font-weight: bold;
      color: black;
  }
  a {
      text-decoration: none;
  }
  #main-nav a {
        text-decoration: none;
        color: rgb(29, 29, 29);
        font-size: 14px;
        height: 100%;
      display: flex;
      align-items: center;
  }
  #main-nav a li {
      padding: 0;
        list-style: none;
  }
  #main-nav a li span {
        border-radius: 100px;
        padding: 5px 10px;
        background-color: #fafafa;
    }
  #main-nav a:hover li span {
        background-color: #ecfbff;
    font-weight: bold;
  }
  #main {
    grid-area: main;
    width: 100%;
    max-width: 800px;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-self: center;
  }
  #nav-title {
        font-size: 1.5em !important;
        font-weight: bold;
        font-family: Merriweather;
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
    footer {
        display: flex;
        justify-content: center;
        margin: 50px 0 40px;
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
    #main-nav {
        width: 100%;
    }
    #main {
        grid-area: main;
        overflow-y: auto;
    }
    #main-nav a {
      font-size: 14px;
    }
    .blog-post {
      margin: 20px 10px;
    }
  }
    @media only screen and (max-width: 1080px) and (min-width: 700px) {
        #main {
            padding: 0 80px;
        }
    }
</style>