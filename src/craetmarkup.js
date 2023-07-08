import { refs } from "."

export function createMarkup(array){
    return array.map(({picture_id,views, downloads, likes, comments}) =>`<a href="">
    <div class="photo-card">
    <img src="${picture_id}" alt="" loading="lazy" />
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
    </div></a>`).join('')
    }
    export function renderMarkupGallery(){
        refs.galleryEl.insertAdjacentHTML('beforeend', createMarkup(array))
    }