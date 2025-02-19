function playVideo(thumbnail) {
    const videoItem = thumbnail.closest('.video-item'); // Vind het hele video-item
    const video = videoItem.querySelector('video'); // Vind de video in dat item
    const thumbnailImage = videoItem.querySelector('img'); // Vind de thumbnail-afbeelding

    // Verberg de thumbnail en laat de video zien
    thumbnailImage.style.display = 'none'; // Verberg de thumbnail
    video.style.display = 'block'; // Maak de video zichtbaar
    video.play(); // Speel de video af

    // Voeg eventlisteners toe voor 'pause' en 'ended' om de thumbnail weer te tonen
    video.addEventListener('pause', () => {
        video.style.display = 'none'; // Verberg de video
        thumbnailImage.style.display = 'block'; // Laat de thumbnail weer zien
    });

    video.addEventListener('ended', () => {
        video.style.display = 'none'; // Verberg de video
        thumbnailImage.style.display = 'block'; // Laat de thumbnail weer zien
    });
}
