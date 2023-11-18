function onClick(evt) {
    evt.preventDefault()
    if(evt.target.nodeName !== 'IMG') {
        return
    }
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionDelay: 250,
        scrollZoomFactor: false,      
    });

}
export {onClick}