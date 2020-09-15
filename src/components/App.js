import React from "react";
import request from "../api/request";
import Searchbar from "./Searchbar";
import Imagelist from "./Imagelist";

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const res = await request.get("/search/photos", {
      params: { query: term },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Searchbar onSubmit={this.onSearchSubmit} />
        <Imagelist images={this.state.images} />
      </div>
    );
  }
}

export default App;
