
class UploadBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {title: null, url: null};

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    console.log(event.target.value);
    this.setState({title: event.target.value});
  }

  handleUrlChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit() {
    var successHandler = function(data) {
      console.log('successfully posted', data);
    };
    var errorHandler = function(error) {
      console.log(error);
    };
    var postData = {
      title: this.state.title,
      url: this.state.url
    };

    $.ajax({
      method: 'POST',
      url: '/photos',
      data: JSON.stringify(postData),
      contentType: 'application/json'
    }).done(successHandler).fail(errorHandler);
    
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input type='text' value={this.state.title} onChange={(e) => this.handleTitleChange(e)} />
          </label>
          <label>
            Url:
            <input type='text' value={this.state.url} onChange={(e) => this.handleUrlChange(e)} />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}


window.UploadBar = UploadBar;