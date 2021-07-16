
const checkGaners =(id) => {
  const list = JSON.parse(localStorage.getItem('cinema'));
  
  return list.filter(item => item.id === id);
}
const reducer = (movies, action) => {
         
    switch(action.type){
        case "Home": 
           return checkGaners(action.id);
        case "NewMovies":
           return checkGaners(action.id);

        case "HighestRated":
           return checkGaners(action.id);
                       
        case "MostPopular":
           return checkGaners(action.id);
        
        default:
           return movies;
    }

};
export default reducer;
   