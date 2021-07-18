<template>
  <div class="header">
    <nav class="header-navbar">
      <img class="navbar-logo" src="./logo.png" alt="logo" />
      <nav class="navbar-mid">
        <a class="active" href="#">Home</a>
        <a href="#">TV Showes</a>
        <a href="#">Movies</a>
        <a href="#">Sourses</a>
      </nav>
      <nav class="navbar-last">
        <a href=""> <font-awesome-icon :icon="['fas', 'search']" />
</a>
        <a href=""><font-awesome-icon :icon="['fas', 'comments']" /></a>
        <a href=""><font-awesome-icon :icon="['fas', 'user-plus']" /></a>
      </nav>
    </nav>
    <div class="header-body">
        <h1 class="header-title">Night Watch</h1>
        <div class="header-details">2021 9sesons 8.8</div>
        <p class="header-text">Lorem Ipsum is simply duem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to</p>
    <div class="header-buttons">
        <button class="button-watch">Watch</button>
        <button class="button-info">More information</button>

    </div>
  </div>
  </div>
</template>
<style lang="scss">
.header {
  background-image: url(https://images.unsplash.com/photo-1585951237313-1979e4df7385?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80);
  background-size: cover;
  height: 600px;
 
  .header-navbar {
    display: flex;
    justify-content: space-between;

    .navbar-logo {
      height: 40px;
      margin:10px 10px;
    }
    .navbar-mid {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      font-size: 18px;
      a{
          color:rgb(130, 134, 138);
          margin-left:35px;
          text-decoration:none;
           &:hover{
              border-bottom: 3px solid rgb(52, 44, 121);
              color:white;
          }
          &.active{
               border-bottom: 3px solid rgb(52, 44, 121);
              color:white;
          }
      }
    }
    .navbar-last {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      a{
          text-decoration: none;
                padding-left: 20px;
                color: white;
                font-size:18px;
                cursor: pointer;
                &:hover{
                  color:blue;
                }

      }
    }
  }
  .header-body{
  
      display: flex;
      flex-direction:column;
      margin: 120px 300px;

    .header-title{
      color:white;
      font-size:80px;
    }
    .header-details{
      color:white;
      font-size: 20px;
      font-weight:bold;
    }
    .header-text{
      color:rgb(158, 153, 153);
      font-size:18px;
      padding:10px 0px;
      font-family: "Merienda", Helvetica, Arial;
    }
    .header-buttons{
      margin-top: 20px;
     
     button{
      border-radius:20px;
      padding: 5px 15px;
      font-size:18px;
       cursor: pointer;

     }
      .button-watch{
        color:white;
            &:hover {
            box-shadow:
       inset 0 -3em 3em rgba(255, 255, 255, 0.1),
             0 0  0 2px rgb(0, 0, 0),
             0.3em 0.3em 1em rgba(255, 254, 254, 0.3);;
        }
        background-image: linear-gradient(to right, rgb(3, 4, 65) , rgb(24, 21, 21));
      }
      .button-info{
        margin-left: 20px;
        
      }
    }
  }
}
</style>