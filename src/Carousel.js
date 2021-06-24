import { Component } from "react"; 

class Carousel extends Component {
  state = {
    active: 0
  }

  // if there are no props for images, serve this
  static defaultProps = {
    images: ['http://pets-images.dev-apis.com/pets/none.jpg']
  }

  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index // + coerces it to a number (from a string)
    })
  }

  render() {
    // props is read-only from parent
    // state is mutable from within its component
    const { active } = this.state;
    const { images } = this.props;
    return (
      <div className="carousel">
        <img src={images[active]} alt="animal" />
        <div className="carousel-smaller">
          {images.map((photo, index) => (
            // eslint-disable-next-line
            <img 
              key={photo}
              src={photo}
              data-index={index}
              onClick={this.handleIndexClick}
              className={index === active ? "active" : ""}
              alt="animal thumbnail"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Carousel;