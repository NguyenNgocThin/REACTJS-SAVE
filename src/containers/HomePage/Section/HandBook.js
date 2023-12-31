import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";



class HandBook extends Component {
  render() { 

    return (
      <div className="section-share section-handbook">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Cẩm Nang</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>Cơ xương khớp 1</div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <divdivdiv>Cơ xương khớp 2</divdivdiv>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <divdiv>Cơ xương khớp 3</divdiv>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <divdiv>Cơ xương khớp 4</divdiv>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <divdiv>Cơ xương khớp 5</divdiv>
              </div>
              <div className="section-customize">
                <div className="bg-image section-handbook"></div>
                <div>Cơ xương khớp 6</div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
