<template>
    <div class="flex-container">
        <div class="row"> 
            <h1>Sorry, page not found.</h1>
            <g-link to="/"><span class="mdi mdi-home"></span> Take me home</g-link>
        </div>
    </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Page not found'
  }
}
</script>

<style scoped>
    html, body {
    height: 100%;
}
body {
    margin: 0;
}
.flex-container {
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
}
.row {
    padding: 20px;
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.flex-item {
    padding: 5px;
    width: 20px;
    height: 20px;
    margin: 10px;
    line-height: 20px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
}
h1 {
    text-align: center;
}
a {
    text-decoration: none;
    text-align: center;
    border:1px solid #bbbbbb;
    color: #888888;
    border-radius: 50px;
    padding: 10px;
}
a:hover {
    color: #444444;  
    border:1px solid #444444;
}
</style>
