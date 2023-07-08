import { refs } from "."

// export function createMarkup(array){
//     const markup  = array.map(({picture_id,views, downloads, likes, comments}) =>`<a href="">
//     <div class="photo-card">
//     <img src="${picture_id}" alt="" loading="lazy" />
//     <div class="info">
//       <p class="info-item">
//         <b>Likes</b>${likes}
//       </p>
//       <p class="info-item">
//         <b>Views</b>${views}
//       </p>
//       <p class="info-item">
//         <b>Comments</b>${comments}
//       </p>
//       <p class="info-item">
//         <b>Downloads</b>${downloads}
//       </p>
//     </div>
//     </div></a>`).join('')
//     refs.galleryEl.insertAdjacentElement('beforeend', markup)
//     }
    export function renderMarkupGallery(){
        refs.galleryEl.insertAdjacentHTML('beforeend', createMarkup(array))
    }

 function createMarkup(images){
    return images.map(({tags, likes, views, comments, downloads}) => `<a class = "js-gallery" href=">  
    <div class="photo-card">
         <img src="" alt="${tags}" loading="lazy" width = "400" />
         <div class="info">
           <p class="info-item">
             <b>Likes</b>${likes}
           </p>
           <p class="info-item">
           <b>Views</b>${views}
           </p>
           <p class="info-item">
             <b>Comments</b>${comments}
           </p>
           <p class="info-item">
             <b>Downloads</b>${downloads}
           </p>
         </div>
       </div></a>`
     ).join('');
 
 }
 export function renderGallery(images){
     refs.galleryEl.insertAdjacentHTML('beforeend', createMarkup(images))
 }