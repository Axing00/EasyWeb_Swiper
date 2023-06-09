/*eslint-disable*/
import React, { Component } from "react";
// import Myslide from "./Myslide";
// import MyslideThumbs from "./Myslide_thumbs";
// import MyslideThumbsTab1 from "./Myslide_thumbs_tab_1";
import MyslideThumbsTab2 from "./Myslide_thumbs_tab_2";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <MyslideThumbsTab2 allowTouchMove={true}></MyslideThumbsTab2>
        {/* <MyslideThumbsTab2></MyslideThumbsTab2> */}
      </div>
    );
  }
}

export default App;
