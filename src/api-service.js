import axios from "axios";
import { renderMarkupGallery } from "./craetmarkup";

const BASE_URL = 'https://pixabay.com/api/videos/';
const API_KEY = '38060997-efaa6414bf9eafc84e286c70f';

export async function fetchGalleryImg(name, page){
    try{
        const response = await axios(
            `${BASE_URL}?key=${API_KEY}&q=${name}&safesearch=true&page=${page}&per_page=40`
          );

          console.log(response.data.hits)
          renderMarkupGallery(response.data.hits);
          return response;
      
    }
    catch(error){
        console.log(error)
    }
}

// export default class NewApiService{
//     constructor(){
//         this.searchQuery = '';
//         this.page = 1;
//     this.per_page = 40
//     }
        
//     async feetchGallery() {
//         const axiosOptional = {
//             method: 'get',
//             url: 'https://pixabay.com/api/',
//         params: {
//             key :'38060997-efaa6414bf9eafc84e286c70f',
//             q: 'this.${searchQuery}',
//             image_type: 'photo',
//             orientation: 'horizontal',
//             safesearch: true,
//             page :`this.${page}`,
//             per_page: `this.${per_page}`
//         }
//         }
//         try{
// const response = await axios (axiosOptional);
// const data  = response.data
// console.log(response)
// this.incrementPage()
// return data
//     }
//     catch(error){
//         console.log(error)
//     }
//     }

// incrementPage(){
//     this.page += 1;
// }
// resetPage(){
//     this.page = 1;
// }

// get query(){
//    return this.searchQuery
// }
// set query(newQuery){
// this.query = newQuery
// }
// }


 
