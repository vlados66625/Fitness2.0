const trainerPhotoContainer = document.querySelectorAll('.trainer__photo-container');

export const activeInfoTrainer = () => {
  if (trainerPhotoContainer && window.innerWidth < 1200) {
    trainerPhotoContainer.forEach((trainerPhoto) => {
      trainerPhoto.addEventListener('click', () => {
        trainerPhoto.classList.toggle('trainer__photo-container--is-active');
      });
    });
  }
};
