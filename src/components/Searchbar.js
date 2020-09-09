import React from "react";

class Searchbar extends React.Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image search</label>
            <input type="text"></input>
          </div>
        </form>
      </div>
    );
  }
}

export default Searchbar;
