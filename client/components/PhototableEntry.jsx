var PhototableEntry = ({photo, handlePhotoClick}) => (
  <div>
    <h2 onClick={() => handlePhotoClick(photo)}>{photo.title}</h2>
  </div>
);

window.PhototableEntry = PhototableEntry;