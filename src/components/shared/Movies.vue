<template>
  <div class="movie-section">
    <h1>Trending Tv shows <font-awesome-icon :icon="['fas', 'tv']" /></h1>
    <div class="movie-cards">
      <div v-for="user in users.Search" :key="user.id" class="movie-card">
        <img
          class="img-card"
          :src="user.Poster"
          alt=""
        />
        <div class="info-card">
          <h4>Name: {{ user.Title }}</h4>
          <h4>Type:{{user.Type}}</h4>
          <h4>Year:{{user.Year}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref , onMounted, onUnmounted } from 'vue';
export default { 
 
  setup(){
    const users = ref({});
    console.log (users);
    
    
    function  fetchList(){ 
      fetch("https://www.omdbapi.com/?apikey=2bd5e844&s=all&page=1")
        .then(response => response.json()) //You need to make the users to json  
        .then(info=>users.value = info)
        .catch(err => console.log (err.message))
    }
    
    onMounted(() => {
      console.log ("Mount : movieAPI  Mounted ⭕");
   
      fetchList(); 
       
    });
    onUnmounted(() => console.log("unMount: movieAPI Unounted ❌ "));
    return {
      users }
  }
  
};
/* import { ref } from "vue";

export default {
  setup() {
    // make users variable reactive with the ref() function
    const users = ref([
      {
        Title: "Robert De Niro",
        Year: "2005",
        imdbID: "tt0372784",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "Batman v Superman: Dawn of Justice",
        Year: "2016",
        imdbID: "tt2975590",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
      },
      {
        Title: "Batman",
        Year: "1989",
        imdbID: "tt0096895",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTYwNjAyODIyMF5BMl5BanBnXkFtZTYwNDMwMDk2._V1_SX300.jpg",
      },
      {
        Title: "Batman Returns",
        Year: "1992",
        imdbID: "tt0103776",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg",
      },
      {
        Title: "Batman Forever",
        Year: "1995",
        imdbID: "tt0112462",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
      },
      {
        Title: "Batman & Robin",
        Year: "1997",
        imdbID: "tt0118688",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
      },
      {
        Title: "The Lego Batman Movie",
        Year: "2017",
        imdbID: "tt4116284",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg",
      },
      {
        Title: "Batman: The Animated Series",
        Year: "1992–1995",
        imdbID: "tt0103359",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTM3MTRkZjQtYjBkMy00YWE1LTkxOTQtNDQyNGY0YjYzNzAzXkEyXkFqcGdeQXVyOTgwMzk1MTA@._V1_SX300.jpg",
      },
      {
        Title: "Batman: Under the Red Hood",
        Year: "2010",
        imdbID: "tt1569923",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNmY4ZDZjY2UtOWFiYy00MjhjLThmMjctOTQ2NjYxZGRjYmNlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
      },
      {
        Title: "Batman: The Dark Knight Returns, Part 1",
        Year: "2012",
        imdbID: "tt2313197",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzIxMDkxNDM2M15BMl5BanBnXkFtZTcwMDA5ODY1OQ@@._V1_SX300.jpg",
      },
    ]);

    return {
      users,
    };
  },
}; */
</script>


<style lang="scss">
.movie-section {
  background-color: rgb(0, 0, 0);
  color: white;
  h1 {
    margin-left: 40px;
    padding-top: 30px;

    border-left: 5px solid rgb(197, 197, 202);
    padding-top: 5px;
    padding-left: 5px;
    
    font-awesome-icon{
    font-size: 18px;
}
  }
  .movie-cards {
/*     background-color: rgb(29, 29, 49);
 */    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
    height: auto;
    padding-top: 40px;
    margin-left: 40px;
    margin-right: 40px;

    .movie-card {
      border: 1px solid rgb(59, 39, 150);
      border-radius: 10%;
      overflow: hidden;
      height: 300px;
      width: 200px;
      background-color: rgb(37, 32, 32);
      margin: 10px auto;
      position: relative;
      cursor: pointer;

        &:hover {
            box-shadow:
       inset 0 -3em 3em rgba(255, 255, 255, 0.1),
             0 0  0 2px rgb(0, 0, 0),
             0.3em 0.3em 1em rgba(255, 254, 254, 0.3);;
        }

      .img-card {
        height: 200px;
        width: 200px;
      }
      .info-card {
        text-align: center;
        padding-top: 10px;
        color:#868484;
        font-family:'Courier New', Courier, monospace;
      }
    }
  }
}
</style>
