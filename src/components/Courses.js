import React, { Component } from 'react'

export default class Courses extends Component {

  clicker(){
      var active = !this.state.active;
      this.setState({active: active});
      this.props.sumPrice(active ? this.props.price : -this.props.price);
  }

  constructor(props) {
      super(props)
  
      this.state = {
         active: false
      };
      this.clicker = this.clicker.bind(this);
  }
  
  render() {
      return (
          <div>
              <p> {this.props.name} {this.props.price} 
                <button onClick= {this.clicker}> + </button>
              </p>
              
          </div>
      )
  }
}
