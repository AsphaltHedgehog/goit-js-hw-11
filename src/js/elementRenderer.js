function drawnResultCards(array, refs, gallery) {
  const fragment = document.createDocumentFragment()
  // =============================================

  array.map(el => {
    const card = document.createElement('div');
    card.classList.add('photo-card');
    card.innerHTML = `<a href="${el.largeImageURL}" class="js-lightbox-img">
      <img height="240px" width="426px" src="${el.largeImageURL}" alt="${el.tags}" loading="lazy"/>
      </a>
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
  gallery.refresh()
};

export default drawnResultCards