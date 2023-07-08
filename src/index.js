 export const refs = { 
    searchForm : document.querySelector('#search-form'),
    submitBtn : document.querySelector('button'),
    galleryEl : document.querySelector('.gallery'),
    loader : document.querySelector('.load-more'),
    inputEl : document.querySelector('input')
    
}
// console.log(inputEl)
import renderMarkupGallery from "./craetmarkup"
import { Notify } from "notiflix";
import { fetchGalleryImg } from "./api-service";

// const searchForm = document.querySelector('#search-form');
// const galleryEl = document.querySelector('.gallery');
// const loader = document.querySelector('.load-more');
// const inputEl = document.querySelector('input');



let page = 1;
let per_page =40;
// let query;

refs.searchForm.addEventListener('submit', onSearchFormClick)
async function onSearchFormClick(evt){
  evt.preventDefault();
refs.searchForm.addEventListener('submit', onSearchFormClick)
  const name = refs.searchForm.elements.searchQuery.value.trim();
 if(name === ''){
Notify.failure(`Please, fill all filds!`)
 }
 try{
  const galleryVideo = await fetchGalleryImg(name, page)
  const totalPage = galleryVideo.data.totalHits;
  console.log(totalPage)
  if(galleryVideo.data.hits.length === 0){
    Notify.failure(`Please, fill all filds!`)
  }
else if(totalPage >= 1 && totalPage < 40){
Notify.success(`Hooray!We found ${totalPage} videos`)
}
else if(totalPage > 40){
  Notify.success(`Hooray!We found ${totalPage} videos`)
}
renderMarkupGallery(galleryVideo.data.hits);
 }
 catch(error){
  console.log(error)
 }
  }



//     let name = searchForm.elements.searchQuery.value.trim()
//     if(name === ''){
// return Notify.failure(`Sorry, there are no images matching your search query. Please try again.`)
//     }
//     try{
//         const galleryImg = await fetchVideoGallery(name, page);
//         const totalPage = galleryImg.data.hits
//         if(totalPage >=1 && totalPage < 40){
//             Notify.success(`Hooray! We found ${totalPage} images.`)
//         }else if(galleryImg.data.totalHits.length === 0){
//             Notify.failure(`Sorry, there are no images matching your search query. Please try again.`)
//         }else if(totalPage > 40){
//             Notify.success(`Hooray! We found ${totalPage} images.`)
//         }
//         renderMarkupGallery(galleryImg.data.hits)
//     }
// catch(error){
//     console.log(error)
// }





function clearForm(){
    galleryEl.innerHTML = '';
    page = 1;
}