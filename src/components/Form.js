import React, { Component } from 'react';
import List from './List';

class Form extends React.Component{
    state = {entries: []}

    handleSubmit = event => {
        event.preventDefault()
        this.setState({entries: [...this.state.entries, this.inputNode.value]})
    }

    handleClear = event => {
        event.preventDefault()
        this.setState({entries: []})
    }
    render(){
        const {entries} = this.state
        return(
            <div> 
            <form onSubmit={this.handleSubmit}>
                <label> TODO: <input ref={node => (this.inputNode = node)} /> </label>
                <button> Add </button>
                <button onClick = {this.handleClear}> Clear </button>
            </form> 
            
            <h3> {entries.map((item,i) => <List key={i} lister={item} /> ) }</h3>
            
            </div> 
        )
    }
}

export default Form
