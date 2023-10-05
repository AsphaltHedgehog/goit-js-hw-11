// js-libs import
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";

// CSS import
// ==========================================================
import "simplelightbox/dist/simple-lightbox.min.css";


// js-files and functions import
// ========================================================
import refs from './js/refs.js'

import { fetchSearch } from './js/searchApi.js'
import fetchData from './js/fetchData.js';
import { loadMoreBtn, deleteLoadMoreBtn } from './js/loadMoreBtn.js'
import loadMore from './js/loadMoreApi.js'
import drawnResultCards from './js/elementRenderer.js';

// main js code
// ========================================================

const gallery = new SimpleLightbox('.js-lightbox-img');


//
//
//
// =============================================================

refs.searchForm.addEventListener('submit', (ev) => fetchData(ev,refs,fetchSearch,drawnResultCards,deleteLoadMoreBtn,loadMoreBtn,gallery));


// ========================================================

refs.loadMoreBtn.addEventListener('click', () => loadMore(refs,fetchSearch,drawnResultCards,gallery,deleteLoadMoreBtn))
