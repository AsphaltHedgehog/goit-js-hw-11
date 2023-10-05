// function that create or delete btn on purpose


export function loadMoreBtn(totalHits, refs) {
  if (!refs.loadMoreBtn.classList.contains('is-visible') || totalHits < 40) {
    return
  };
  refs.loadMoreBtn.classList.remove('is-visible')
}

export function deleteLoadMoreBtn(refs) {
  if (refs.loadMoreBtn.classList.contains('is-visible')) {
    return
  }
  refs.loadMoreBtn.classList.add('is-visible')
}