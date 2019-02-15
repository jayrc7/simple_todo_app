import React, { Component } from 'react';

class List extends React.Component{
    render(){
        return(

            <div> 
            <input type="checkbox" />
            <label> {this.props.lister} </label>
            </div>
        )
    }
}

export default List
