import React, { Component } from "react";
import "./SectionB.css";
class SectionB extends Component {

  imgClick = (e) => {
  
    this.props.openImg(e.target)
  }
  render() {
    return (
      <div className="bilder-container">
        <div>
          <h1 className="bilderh1">Bilder</h1>
        </div>
        <div className="bilder-section">
        <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x480" alt="" />
         
          </div>
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x481" alt="" />
          
          </div>
          
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x483" alt="" />
        
          </div>
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x484" alt="" />
          
          </div>
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x485" alt="" />
            
          </div>
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x486" alt="" />
          
          </div>
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x487" alt="" />
          
          </div>
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x488" alt="" />
          
          </div>
          <div className="bild">
            <img  onClick={this.imgClick} src="https://source.unsplash.com/collection/1163637/480x489" alt="" />
        
          </div>
        </div>
      </div>
    );
  }
}

export default SectionB;
