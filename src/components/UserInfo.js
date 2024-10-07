import React from "react";

class UserInfo extends React.Component {
    state = {
        name: 'khuong',
        age: 21
    };

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <div>My name is {this.state.name}
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
                <form onSubmit={this.handleOnSubmit}>
                    <label>Your name:</label>
                    <input
                        value={this.state.name}
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />

                    <label>Your age:</label>
                    <input
                        value={this.state.age}
                        type="text"
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>
                        Submit
                    </button>
                </form></div>
        )
    }


}

export default UserInfo;