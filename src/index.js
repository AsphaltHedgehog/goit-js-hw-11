
import { Notify } from 'notiflix/build/notiflix-notify-aio';



// ========================================================

import { fetchSearch } from './js/searchApi.js'

// ========================================================

export const refs = {
  page: 1,
  // =======================================
  submitBtn: document.querySelector('#submit'),
  loadMoreBtn: document.querySelector('.load-more'),
  // =======================================
  input: document.querySelector("#searchInput"),
  searchForm: document.getElementById('search-form'),
  // ========================================
  gallery: document.querySelector(".gallery"),
  // ========================================
  searchQuery: '',
};

//
//
//
// =============================================================

refs.searchForm.addEventListener('submit', fetchData);

async function fetchData(ev) {
  ev.preventDefault()
  refs.searchQuery = ev.currentTarget.elements.searchQuery.value;
  try {
    if (refs.input.value.length === 0) {
      Notify.failure("введите что-то для поиска!");
      return;
    }
    refs.page = 1
    refs.gallery.innerHTML = "";

    const response = await fetchSearch(refs.searchQuery, refs.page);

    loadMoreBtn();
    
    drawnResultCards(response.data.hits)
  } catch (error) {
    console.log(error);
    deleteLoadMoreBtn()
  }
}

function drawnResultCards(array) {
  const fragment = document.createDocumentFragment()
  // =============================================

  array.map(el => {
    const card = document.createElement('div');
    card.classList.add('photo-card');
    card.innerHTML = `
      <img height="240px" width="426px" src="${el.largeImageURL}" alt="${el.tags}" loading="lazy"/>
      <div class="info">
        <p class="info-item">
        <b>Likes</b>
        ${el.likes}
        </p>
        <p class="info-item">
        <b>Views</b>
        ${el.views}
        </p>
        <p class="info-item">
        <b>Comments</b>
        ${el.comments}
        </p>
        <p class="info-item">
        <b>Downloads</b>
        ${el.comments}
        </p>
      </div>`;
    fragment.appendChild(card);
  });
  refs.gallery.appendChild(fragment);
};


// ========================================================

refs.loadMoreBtn.addEventListener('click', loadMore)

async function loadMore () {
  refs.page += 1;
  console.log(refs.page);
  try {
    const response = await fetchSearch(refs.searchQuery, refs.page);
    console.log(response.data.totalHits);
    if (response.data.totalHits < refs.page * 40 ) {
      deleteLoadMoreBtn()
      Notify.info("We're sorry, but you've reached the end of search results.");
    }

    drawnResultCards(response.data.hits);
  }
  catch (error) {
    console.log(error);
  };
};










// ==================================================================

function loadMoreBtn() {
  if (!refs.loadMoreBtn.classList.contains('is-visible')) {
    return
  };
  refs.loadMoreBtn.classList.remove('is-visible')
}

function deleteLoadMoreBtn() {
  if (refs.loadMoreBtn.classList.contains('is-visible')) {
    return
  }
  refs.loadMoreBtn.classList.add('is-visible')
}

// ====================================================================

