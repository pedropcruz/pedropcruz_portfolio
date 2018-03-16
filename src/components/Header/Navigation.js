import React, { Component } from "react";
import OverlayMenu from "../../containers/OverlayMenu";

export default class Navigation extends Component {
  render() {
    return (
      <div className="expanded">
        <button
          type="button"
          className="md-hide lg-hide inline-block right-align m1 p0">
          <span className="block col-12"> </span>
          <span className="block mt1 col-12"> </span>
          <span className="block mt1 col-12"> </span>
        </button>
        <OverlayMenu moreclass="xs-hide sm-hide" button={false} />
      </div>
    );
  }
}
