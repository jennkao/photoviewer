// var App = ({photos}) => (
//   <div>
//     <h1>Images</h1>
//     <Phototable photos={photos}/>
//     <Photoviewer currentPhoto={photos[3]}/>
//   </div>
// );

var stockPhotos = [{title: 'Shanghai', rating: 5, url: 'http://www.teamsdesign.com/files/content/Get%20in%20Touch%20Shanghai/Get_in_Touch_Shanghai_shanghai%20city_1620x672.jpg'}];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {photos: stockPhotos, currentPhoto: stockPhotos[0]};
  }

  componentDidMount() {
    var successHandler = function(data) {
      var parsedData = JSON.parse(data);
      this.setState({photos: parsedData, currentPhoto: parsedData[0]});
    }.bind(this);
    var errorHandler = function(error) {
      console.log(error);
    };
    $.ajax({
      method: 'GET',
      url: '/photos',
      dataType: 'json'
    }).done(successHandler).fail(errorHandler);
  }

  handlePhotoClick(photo) {
    this.setState({
      currentPhoto: photo
    });
  }

  render() { 
    return (
      <div>
        <h1>Photos</h1>
        <UploadBar />
        <Phototable photos={this.state.photos} 
          handlePhotoClick={this.handlePhotoClick.bind(this)}/>
        <Photoviewer currentPhoto={this.state.currentPhoto} />
      </div>
    );
  }
}

window.App = App;