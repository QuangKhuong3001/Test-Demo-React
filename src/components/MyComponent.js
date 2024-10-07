import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'khuong',
        age: 21
    };

    render() {
        return (
            <div>
                My name is {this.state.name}
            </div>
        );
    }
}

export default MyComponent;