<template>
    <div class="register">

    <div class="register-now">
        <h1>Are you new here!!
        <br>
        REGISTER NOW</h1>
        <button class="btn">REGISTER</button>
    </div>
    </div>
</template>
<style lang="scss">
.register{
background-color: rgb(0, 0, 0);
height: 400px;
display: flex;

.register-now{
    width: 700px;
    height:150px;
    background-image:url("https://images.unsplash.com/photo-1507692812060-98338d07aca3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80");
    border-radius:5px;
    margin: 100px auto;
    padding:20px;
    display:flex;
    border-radius:15px ;
    justify-content:space-between;
          box-shadow:
       inset 0 -3em 3em rgba(255, 255, 255, 0.1),
             0 0  0 2px rgb(0, 0, 0),
             0.3em 0.3em 1em rgba(255, 254, 254, 0.3);;
    h1{
        color: white;
        padding-top:10px;
        font-size: 45px;

    }
    .btn{
        
        color:rgb(255, 255, 255);
        font-size:20px;
        height:40px;
        margin-top:50px;
          background-color:rgb(39, 166, 216);
          border-radius:20px;
         padding: 5px 15px;
             &:hover {
                 cursor: pointer;
            box-shadow:
       inset 0 -3em 3em rgba(255, 255, 255, 0.1),
             0 0  0 2px rgb(0, 0, 0),
             0.3em 0.3em 1em rgba(255, 254, 254, 0.3);;
        }
    }
}
}
</style>