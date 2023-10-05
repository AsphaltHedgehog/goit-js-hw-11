import { Notify } from "notiflix";

async function fetchData(ev,refs,fetchSearch,drawnResultCards,deleteLoadMoreBtn,loadMoreBtn,gallery) {
  ev.preventDefault()
  deleteLoadMoreBtn(refs)
  refs.searchQuery = ev.currentTarget.elements.searchQuery.value;
  try {
    if (ev.currentTarget.elements.searchQuery.value.trim().length === 0) {
      Notify.failure("введите что-то для поиска!");
      return;
    }
    refs.page = 1
    refs.gallery.innerHTML = "";

    const response = await fetchSearch(refs.searchQuery, refs.page);
    Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
    loadMoreBtn(response.data.totalHits, refs);
    drawnResultCards(response.data.hits, refs, gallery);
  } catch (error) {
    console.log(error);
    deleteLoadMoreBtn(refs)
  }
}

export default fetchData