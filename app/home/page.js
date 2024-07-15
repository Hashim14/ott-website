import CarouselContainer from "../components/CarouselContainer";

const Home = async () => {
  const fetchData = async () => {
    try {
     return await fetch("https://freetestapi.com/api/v1/movies")
      .then((response) => response.json())
      .then((json) => json);
    }
    catch{
      console.log('error');
    }
  
  }
 const movies =  await fetchData()
  return (
   <CarouselContainer movies={movies} />
  );
};

export default Home;
