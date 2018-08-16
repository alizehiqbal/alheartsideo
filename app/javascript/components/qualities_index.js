import React from "react";
import QualIndexItem from "./qualities_index_item.js";
// import heart from "./heart.png";

class QualitiesIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cqualities: window.qualsJSON,
      sortByName: false,
      sortByScore: false,
      nameOrder: false,
      scoreOrder: true
    };
    this.sortingHatName = this.sortingHatName.bind(this);
    this.sortingHatScore = this.sortingHatScore.bind(this);
    this.toggleNameSort = this.toggleNameSort.bind(this);
    this.toggleScoreSort = this.toggleScoreSort.bind(this);
    this.nameSort = this.nameSort.bind(this);
    this.scoreSort = this.scoreSort.bind(this);
  }

  //first of 3 fn's to get called by button in Name Button 'Metabolic Cycle'
  //sets state to sort by name (which can be toggled in order to reverse sort w/ another click)
  //necessarily sets score sorting false, so neither can occur simultaneously, and to
  //clean the logic of later conditional rendering;
  //also has awesome Harry Potter themed name
  sortingHatName() {
    this.setState({ sortByScore: false });
    this.setState({ sortByName: true }, () => {
      this.toggleNameSort();
    });
  }

  //determines whether sorting by Name is alphabetical or reverse alphabetical

  toggleNameSort() {
    this.setState({ nameOrder: !this.state.nameOrder }, () => {
      this.nameSort();
    });
  }
  //decides which index view to render, i.e. name sorted high-low or low-high
  nameSort() {
    if (this.state.nameOrder) {
      const sortedNameLow = []
        .concat(this.state.cqualities)
        .sort((a, b) => a.name > b.name)
        .map(qual => {
          return <QualIndexItem key={qual.id} qual={qual} />;
        });
      return sortedNameLow;
    } else {
      const sortedNameHigh = []
        .concat(this.state.cqualities)
        .sort((a, b) => a.name < b.name)
        .map(qual => {
          return <QualIndexItem key={qual.id} qual={qual} />;
        });
      return sortedNameHigh;
    }
  }

  //first to get called by button in Score Button 'Metabolism'
  //similarly used to set states, contains toggle callback
  sortingHatScore() {
    this.setState({ sortByName: false });
    this.setState({ sortByScore: true }, () => {
      this.toggleScoreSort();
    });
  }

  //determines whether sorting by Score is increasing or decreasing order

  toggleScoreSort() {
    this.setState({ scoreOrder: !this.state.scoreOrder }, () => {
      this.scoreSort();
    });
  }

  //decides which index view to render, i.e. score sorted high-low or low-high
  scoreSort() {
    if (this.state.scoreOrder) {
      const sortedScoreLow = []
        .concat(this.state.cqualities)
        .sort((a, b) => a.score > b.score)
        .map(qual => {
          return <QualIndexItem key={qual.id} qual={qual} />;
        });
      return sortedScoreLow;
    } else {
      const sortedScoreHigh = []
        .concat(this.state.cqualities)
        .sort((a, b) => a.score < b.score)
        .map(qual => {
          return <QualIndexItem key={qual.id} qual={qual} />;
        });
      return sortedScoreHigh;
    }
  }

  //three possibilities here in the render: (1) there is default state,
  //as witnessed when the app first loads (nothing sorted), (2) components
  //rendered if sorting by name, (3) components rendered if sorting by score.

  render() {
    const qualities = this.state.cqualities.map(qual => {
      return <QualIndexItem key={qual.id} qual={qual} />;
    });

    if (!this.state.sortByName && !this.state.sortByScore) {
      return (
        <div>
          <div>
            <ul className="qualities-index">{qualities}</ul>
          </div>
          <div className="toggle-buttons">
            <button className="indiv-button1" onClick={this.sortingHatScore}>
              <span>sort by score</span>
            </button>
            <button className="indiv-button2" onClick={this.sortingHatName}>
              <span>sort by name</span>
            </button>
          </div>
        </div>
      );
    } else if (this.state.sortByName && !this.state.sortByScore) {
      return (
        <div>
          <div>
            <ul className="qualities-index">{this.nameSort()}</ul>
          </div>
          <div className="toggle-buttons">
            <button className="indiv-button1" onClick={this.sortingHatScore}>
              <span>sort by score</span>
            </button>
            <button className="indiv-button2" onClick={this.sortingHatName}>
              <span>sort by name</span>
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <ul className="qualities-index">{this.scoreSort()}</ul>
        <div className="toggle-buttons">
          <button className="indiv-button1" onClick={this.sortingHatScore}>
            <span>sort by score</span>
          </button>
          <button className="indiv-button2" onClick={this.sortingHatName}>
            <span>sort by name</span>
          </button>
        </div>
      </div>
    );
  }
}

export default QualitiesIndex;
