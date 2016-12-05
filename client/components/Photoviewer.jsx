var Photoviewer = ({currentPhoto}) => (
  <div>
    <h1>Current Photo</h1>
    <h2>{currentPhoto.title}</h2>
    <h2>Rating: {currentPhoto.rating}</h2>
    <img src={currentPhoto.url} />
    <RatingsMenu currentPhoto={currentPhoto}/>
  </div>
);

window.Photoviewer = Photoviewer;
