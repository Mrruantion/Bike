import React from 'react';
import ReactDOM from 'react-dom';

import {ScriptCache} from './ScriptCache';

var UserMessageDelete = React.createClass({

  // constructor(props){
  //   super(props);

  //   this.state = {
  //     center: { lat: 42.872, lng: 3.644},
  //     zoom: 8        
  //     };
  // }
  getInitialState(){
    return {
      mapconfig:{
      center: { lat: 42.872, lng: 3.644},
      zoom: 3        
      }
    }
  },

  componentDidMount(){
    new window.google.maps.Map(
      this.refs.map,       
      this.state.mapconfig);    
  },     

  render() {
    return (
      <div>
        <h1>
            hello world
        </h1>

        <div ref="map" style={{width: 400, height:400, }} /> 

      </div>
    )
  }
});

export default UserMessageDelete;