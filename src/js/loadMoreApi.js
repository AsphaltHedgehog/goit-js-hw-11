import { Notify } from "notiflix";

async function loadMore(refs, fetchSearch, drawnResultCards, gallery, deleteLoadMoreBtn) {
  refs.page += 1;
  try {
    const response = await fetchSearch(refs.searchQuery, refs.page);
    if (response.data.totalHits < refs.page * 40 ) {
      deleteLoadMoreBtn(refs)
      Notify.info("We're sorry, but you've reached the end of search results.");
    }

    drawnResultCards(response.data.hits, refs, gallery);
    gallery.refresh()
  }
  catch (error) {
    console.log(error);
  };
};

export default loadMore