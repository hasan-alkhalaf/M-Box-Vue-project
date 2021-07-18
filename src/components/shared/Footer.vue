<template>
  <footer>
    <nav class="footer-nav">
      <img class="footer-logo" src="./logo.png" alt="" />
      <nav  class="nav-col">
        <a href="#">voice over and subtitle</a>
        <a href="#">Media Center</a>
        <a href="#">Privacy</a>
        <a href="#">Contact us</a>
      </nav>
      <nav class="nav-col">
        <a href="#">Voice discription</a>
        <a href="#">Investor Relations</a>
        <a href="#">Legal provisions</a>
        
      </nav>
      <nav class="nav-col">
        <a href="#">Help center</a>
        <a href="#">Job apportunities</a>
        <a href="#">Cookies Preferences</a>
      </nav>
      <nav class="nav-col">
        <a href="#">Gift Cards</a>
        <a href="#">Terms of Use</a>
        <a href="#">Corporate Information</a>
      </nav>
    </nav>

    
  </footer>
</template>
<style lang="scss">
footer {
  height: 300px;
  max-width: 100%;
  background-color: #1b1818;
 font-family: "Merienda", Helvetica, Arial;
 
  .footer-nav {
    margin: 0px auto;
    display: flex;
    justify-content: space-around;
    .footer-logo{
        height:40px;
        margin-top:125px;
        cursor: pointer;
    }
    .nav-col{
        display: flex;
        flex-direction:column;
        margin-top:100px;
        a{
            color:white;
            text-decoration:none ;
            padding: 5px;
            &:hover{
                color:blue;
            }
        }
    }
  }
}
</style>