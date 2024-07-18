function enlarge(element) {
    var mediaContent = element.querySelector('.media-content');
    var imgSrc = mediaContent.src;
    
    // Sadece resim içeren kutular için büyütme işlemi yap
    if (mediaContent.tagName === 'IMG') {
        document.getElementById('enlargedImg').src = imgSrc;
        document.getElementById('enlargedContainer').style.visibility = 'visible';
    }
}

function shrink() {
    document.getElementById('enlargedContainer').style.visibility = 'hidden';
}
