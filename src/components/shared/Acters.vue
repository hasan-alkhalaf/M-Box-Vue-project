<template>
  <div class="actors-section">
    <h1>
      Popular Actors and Directors <font-awesome-icon :icon="['fas', 'film']" />
    </h1>
    <div class="cards">
      <div v-for="user in users" :key="user.id" class="card">
        <a :href="user.Url"
          ><img class="img-card" :src="user.Poster" alt=""
        /></a>
        <div class="info-card">{{ user.Title }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  setup() {
    // make users variable reactive with the ref() function
    const users = ref([
      {
        Title: "Will Smith",

        Poster:
          "https://s.yimg.com/sr/img/1/ae4d38c1-c328-3d37-b536-c21b92a7b966",
        Url: "https://en.wikipedia.org/wiki/Will_Smith",
      },
      {
        Title: "Anthony Quinn",

        Poster:
          "https://s.yimg.com/sr/img/1/fff19837-22c9-311d-a486-26e2c525fa30",
        Url: "https://en.wikipedia.org/wiki/Anthony_Quinn",
      },
      {
        Title: "Martin Sheen",

        Poster:
          "https://s.yimg.com/sr/img/1/4e2c701c-8d07-3b06-90c0-b7b673b2e6bd",
        Url: "https://en.wikipedia.org/wiki/Martin_Sheen",
      },
      {
        Title: "John Goodman",

        Poster: "http://tmsimg.com/assets/v9/AllPhotos/32902/32902_v9_bb.jpg",
        Url: "https://en.wikipedia.org/wiki/John_Goodman",
      },
      {
        Title: "Albert Finney",

        Poster:
          "https://s.yimg.com/sr/img/1/d8c52099-cc3a-31b6-bdf0-e7f8a9595aea",
        Url: "https://en.wikipedia.org/wiki/Albert_Finney",
      },
      {
        Title: "Johnny Depp",

        Poster:
          "http://itsgr9.com/wp-content/uploads/2015/01/Screenshot-2019-08-30-at-19.12.25.png",
      },
    ]);

    return {
      users,
    };
  },
};
</script>


<style lang="scss">
.actors-section {
  background-color: black;

  h1 {
    margin-left: 40px;
    color: white;
    /*     border-left: 5px solid rgb(0, 0, 175);

 */
    padding-top: 30px;
    padding-left: 5px;
  }
  .cards {
    /*     background-color: rgb(0, 0, 0);
 */
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    padding-top: 40px;
    margin-left: 40px;
    margin-right: 40px;
    .card {
      height: 250px;
      width: 150px;
      .img-card {
        height: 150px;
        width: 150px;
        border-radius: 50%;
        cursor: pointer;
        &:hover {
            box-shadow:
       inset 0 -3em 3em rgba(255, 255, 255, 0.1),
             0 0  0 2px rgb(0, 0, 0),
             0.3em 0.3em 1em rgba(255, 254, 254, 0.3);;
        }
      }
      .info-card {
        text-align: center;
        color: white;
        font-size: 18px;
        text-align: center;
        font-family: "Merienda", Helvetica, Arial;
        cursor: pointer;
        &:hover {
          color: blue;
        }
      }
    }
  }
}
</style>
