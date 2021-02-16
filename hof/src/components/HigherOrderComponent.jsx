import React, { Component } from 'react';

class HigherOrderComponent extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            title: props.title,
            userData: props.userData,
        };
    }
    renderItems() {
        const userList=this.state.userData;
        const userData=userList.map((user)=>(            
        <React.Fragment key={user.id}>
                <li className="list-elements">
                    <span>Id : {user.id}</span>
                    <span>Name : {user.name}</span>
                    <span>User Type: {user.user_type}</span>
                </li>
        </React.Fragment>
        ));
        return userData;
    };
    render()
    {
        return (
              <React.Fragment>
                <h1>{this.state.title}</h1>
                <div className="display-box">
                <ul>{this.renderItems()} </ul>
                </div>
              </React.Fragment>
        );
    }
}

export default HigherOrderComponent;