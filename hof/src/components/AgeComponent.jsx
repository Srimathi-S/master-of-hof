import React, { Component } from 'react';

class AgeComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            title: props.title,
            age: props.age,
        };
    }
    render() {
        return (
           <React.Fragment>
               <h1>{this.state.title}</h1>
               <p className="display-box">{this.state.age}</p>
           </React.Fragment>
        );
    }
}

export default AgeComponent;