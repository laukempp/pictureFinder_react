import React from "react";

class Searchbar extends React.Component {
  state = {
    searchTerm: "",
  };

  onInputChange(e) {
    this.setState({ searchTerm: e.target.value });
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={this.onInputChange}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
