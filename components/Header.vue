<template>
  <header>
	  <ul>
                  <li>
                    <nuxt-link to="/">
                      <img src="/logo.png">
                    </nuxt-link>
                  </li>
                  <li class="username"><button class="button">Log In</button></li>
	  </ul>
	  <h1>Rewards</h1>
  </header>
</template>
<style scoped>
ul{
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.username{
  margin-left: auto;
}
li{
  margin-top: auto;
  margin-bottom: auto;
}
h1{
  background: #0274BB;
  color: white;
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 2.5em;
  padding-bottom: 2.5em;
  margin-bottom: 1em;
}
img{
  height: 3rem;
}
.button{
  padding-left: 3rem;
  padding-right: 3rem;
}
</style>
