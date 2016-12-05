var Phototable = ({photos, handlePhotoClick}) => (
  <div>
    {photos.map(photo => 
      <PhototableEntry photo={photo}
      key={photo._id}
      handlePhotoClick={handlePhotoClick}
      /> 
    )}
  </div>
);

window.Phototable = Phototable;