import React, { Component } from 'react';
import ViolinScreen from '../screens/ViolinScreen';

class Music extends Component {
    constructor(props) {
        super(props);
        
        state = {
            ifPressed: false
        };
        // this.handlePress = this.handlePress.bind(this);
      }


      
      
      render() {
          const handlePress = () => {
            alert("Hey")
            this.setState({ifPressed: true});
          }
      return (
        <ViolinScreen 
        state={state.ifPressed}
        handlePress={handlePress.bind(this)}
        />
      ) 
  }
}

export default Music;