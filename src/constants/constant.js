const date = () => { return new Date();};
const apiKey="key";
const year = date().getFullYear(); // used for the query  
const isoCurrentDate = date().toISOString().substring(0,10); // used for the query 
export const imgPath = 'https://image.tmdb.org/t/p/w1280';
export const search = `https:/api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
export const populary = `https:/api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}&page=1`;
export const theNewst =`https:/api.themoviedb.org/3/discover/movie?primary_release_year=${year}&sort_by=vote_average.desc&api_key=${apiKey}&page=1`;
export const all = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${year-2}-01-01&primary_release_date.lte=${isoCurrentDate}&vote_average.gte>7`;
export const highestReted = `https:/api.themoviedb.org/3/discover/movie/?certification_country=US&certification=R&sort_by=vote_average.desc&api_key=${apiKey}`;
export const getTrailerUrl=(id)=> {return `https://api.themoviedb.org/3/discover/movie/${id}/videos?api_key=${apiKey}&language=en-US`};
export const tim = 5000;
export  const sizes = {
        down(size){
            const sizes ={
               xs:"575.98px",
               sm:"767.98px",
               md:"991.98px",
               lg:"1199.98px",
               xl:"2000px"
            }   
            return`@media (max-width: ${sizes[size]})`;
        }

}
