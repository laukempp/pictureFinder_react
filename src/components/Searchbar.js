import React from "react";

class Searchbar extends React.Component {
  state = {
    searchTerm: "",
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchTerm);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image search</label>
            <input
              type="text"
              value={this.state.searchTerm}
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
