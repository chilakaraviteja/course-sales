import React, { Component } from 'react';
import './Coursesales.css'
import Courses from './Courses';

export default class Coursesales extends Component {
    
    sumPrice(price) {
        this.setState({total: this.state.total + price});
    }


    constructor(props) {
        super(props)
    
        this.state = {
             total : 0
        }
        this.sumPrice = this.sumPrice.bind(this);
    }
    
    render() {
        console.log(this.props.items);
        var courses = this.props.items.map((item, i) =>{
            return <Courses name= {item.name} price = {item.price}
            key = {i} sumPrice= {this.sumPrice} active = {item.active}
            />
        });

        return (
            <div>
                <h1> You can buy courses now</h1>
                <div id="courses-list"> {courses} </div>   
                <p id="total-price">Total <b> {this.state.total} </b></p>
            </div>
        )
    }
}

