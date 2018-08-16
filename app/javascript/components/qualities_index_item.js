import React from "react";
import Empowerment from "../../assets/images/qualityIcons/empowerment.png";
import Purpose from "../../assets/images/qualityIcons/purpose.png";
import Collaboration from "../../assets/images/qualityIcons/collaboration.png";

const MAX_CHARS = 120;

class QualitiesIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.adjustDescription = this.adjustDescription.bind(this);
    this.picturePerfect = this.picturePerfect.bind(this);
    this.furlUnfurl = this.furlUnfurl.bind(this);
  }

  //method to toggle state, to determine whether full description is shown,
  //and then send a callback to the function that renders that full description.
  furlUnfurl() {
    this.setState({ isOpen: !this.state.isOpen }, () =>
      this.adjustDescription()
    );
  }

  //method to render the images for each respective quality.
  picturePerfect(props) {
    if (this.props.qual.name === "Empowerment") {
      return (
        <div className="photo-center">
          <img className="photo" src={Empowerment} />
        </div>
      );
    } else if (this.props.qual.name === "Purpose") {
      return (
        <div className="photo-center">
          <img className="photo" src={Purpose} />
        </div>
      );
    }
    return (
      <div className="photo-center">
        <img className="photo" src={Collaboration} />
      </div>
    );
  }

  //a method to return the name of a qualitity in its specific color.
  //method name in homage to those pottery-painting studios, the joyful
  //hosts to many an elementary school birthday party.

  colorMeMineName(props) {
    if (this.props.qual.name === "Empowerment") {
      return <div className="empowerment">{this.props.qual.name}</div>;
    } else if (this.props.qual.name === "Purpose") {
      return <div className="purpose">{this.props.qual.name}</div>;
    }
    return <div className="collaboration">{this.props.qual.name}</div>;
  }

  //lol -- sorry, couldn't help the name!
  //method to render a horizontal bar that dynamically changes with score.
  //cashed a little dirty trick to get the dotted line just so ;)
  //side note -- i apologize for the rat's nest of inline styling! it was the most
  //intuitive way i could think of doing this at the time, and something i would
  //try to clean up as best i could were i to have more time to refactor.
  barMethod() {
    const wide = Math.abs(this.props.qual.score / 10.0).toString() + "vw";
    const color = this.props.qual.color;
    let style1 = {
      width: wide,
      backgroundColor: color,
      paddingTop: "0.3vw",
      paddingBottom: "0.3vw"
    };

    let style3 = {
      marginLeft: "6vw"
    };

    let style4 = {
      marginRight: "1vw"
    };

    let right = {
      borderRight: "1px dashed",
      borderLeftStyle: "hidden",
      borderTopStyle: "hidden",
      borderBottomRightStyle: "dashed",
      borderRightColor: "black",
      color: "white"
    };

    let left = {
      borderLeft: " 1px dashed",
      borderRightStyle: "hidden",
      borderTopStyle: "hidden",
      borderBottomLeftStyle: "dashed",
      borderLeftColor: "black",
      color: "white"
    };

    if (this.props.qual.score > 0) {
      return (
        <div className="dot-line" style={style3}>
          <div style={right}>|</div>
          <div className="bar" style={style1} />
        </div>
      );
    }
    return (
      <div className="dot-line" style={style4}>
        <div className="bar" style={style1} />
        <div style={left}>|</div>
      </div>
    );
  }

  //method called by furlUnfurl, will show either the truncated or full
  //description depending on state.

  adjustDescription() {
    if (this.state.isOpen) {
      return <div className="description">{this.props.qual.description}</div>;
    }
    return (
      <div className="description">
        {this.props.qual.description.slice(0, MAX_CHARS)}...
      </div>
    );
  }

  render() {
    const color = this.props.qual.color;
    let borderStyle = {
      borderColor: color
    };

    return (
      <div style={borderStyle} className="gradient">
        {this.colorMeMineName()}
        {this.picturePerfect()}
        <div className="score">your score:</div>
        <div className="score-text">{this.props.qual.score}</div>

        {this.barMethod()}
        <br />
        {this.adjustDescription()}
        <div className="button-center">
          <button className="button-description" onClick={this.furlUnfurl}>
            <span>{this.state.isOpen ? " read less" : "read more"}</span>
          </button>
        </div>
      </div>
    );
  }
}

export default QualitiesIndexItem;
