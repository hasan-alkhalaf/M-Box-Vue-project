<template>
  <div class="soon">
    <div class="soon-now">
      <img class="left-side">
      
      <div class="right-side">
        <br />
        COMING SOON <span class="2021">2021</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.soon {
  background-color: rgb(0, 0, 0);
  height: 400px;
  display: flex;

  .soon-now {
    display: flex;
    flex-direction: row;
    width: 1200px;
    height: 250px;
    border-radius: 20px;
    margin: 100px auto;
  box-shadow:
       inset 0 -3em 3em rgba(255, 255, 255, 0.1),
             0 0  0 2px rgb(0, 0, 0),
             0.3em 0.3em 1em rgba(255, 254, 254, 0.3);
    overflow: hidden;
    justify-content: space-between;
    .left-side {
     
      width: 50%;
      background-image: url(./big-duck.png);
      background-size: cover;
    }
    .right-side {
      width: 50%;
      color: rgb(255, 255, 255);
      font-size: 50px;
      height: auto;
  background-image: linear-gradient(to right, rgb(3, 4, 65) , rgb(24, 21, 21));
      display: flex;
      flex-direction: column;
      justify-content: center;
      justify-content: space-around;
      text-align: center;
              font-family: "Courier New", Courier, monospace;

      span {
        color: rgb(0, 255, 102);
        font-size: 35px;
        font-weight: bold;
      }
    }
  }
}
</style>