import React, { Component } from "react";
import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";
import Showcase from './components/Showcase/Showcase'
import SectionA from './components/SectionA/SectionA'
import SectionB from './components/SectionB/SectionB'
import SectionC from './components/SectionC/SectionC'
import Footer from './components/Footer/Footer'
class App extends Component {
  state = {
    sideDrawerOpen: false,
    imgOpen:false,
    imgOpenUrl:''
  }
  openImg=(e)=>{
    console.log(e.src)
    this.setState({imgOpenUrl:e.src,imgOpen:true})
  }
  drawerToggleClickHandler = () => {
this.setState((prev)=>{
  return {
    sideDrawerOpen:!prev.sideDrawerOpen
  }
})
  }

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen:false, imgOpen:false, imgOpenUrl:''})
  }
  render() {
 
    
    let backdrop
let imgage
    if(this.state.sideDrawerOpen){
    
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    if(this.state.imgOpen){
      backdrop = <Backdrop click={this.backdropClickHandler} />
      imgage = (
        <div className="backdropModal">
    
          <img className="modal" src={this.state.imgOpenUrl}/>
        </div>)
    }
    return (
      <div style={{height:'100%'}}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler}/>
        <SideDrawer show={this.state.sideDrawerOpen}/>
        {backdrop}
        <main style={{marginTop:'56px'}}>


        <Showcase />



        <SectionB openImg={this.openImg}/>
        {imgage}
        <SectionA />
       
        <Footer />
        </main>
      </div>
    );
  }
}

export default App;
