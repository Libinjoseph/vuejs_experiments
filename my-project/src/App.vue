<template>
  <div id="app">
    <hello></hello>
    <ul>
      <li><router-link to="/" a class="active">Go to Foo</router-link></li>
      <li><router-link to="/bar">Go to Bar</router-link></li>li>
    </ul>
    <h3>Main component</h3>
    <router-view></router-view>
    <!-- route outlet -->
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    name: 'app',
    components: {
      Hello
    }
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: yellow;
  }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
}

li {
    float: left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover {
    background-color: #111;
}
</style>
