class RatingsMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {rating: '5'};

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingChange(event) {
    this.setState({rating: event.target.value});
  }

  handleSubmit() {
    var successHandler = function(data) {
      console.log('successfully updated', data);
    };
    var errorHandler = function(error) {
      console.log(error);
    };
    var updateData = {
      rating: this.state.rating,
      photo: this.props.currentPhoto
    };

    $.ajax({
      method: 'PUT',
      url: '/photos',
      data: JSON.stringify(updateData),
      contentType: 'application/json'
    }).done(successHandler).fail(errorHandler);
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={() => this.handleSubmit()}>
        <label>
          Rate this photo!
          <select value={this.state.rating} onChange={ (e) => this.handleRatingChange(e) }>
            <option value='5'>5</option>
            <option value='4'>4</option>
            <option value='3'>3</option>
            <option value='2'>2</option>
            <option value='1'>1</option>
          </select>
        </label>
        <input type='submit' value="Submit" />
      </form>
    );
  }

}

window.RatingsMenu = RatingsMenu;