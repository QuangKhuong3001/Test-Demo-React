import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {

    state = {
        listUser: [
            { id: 1, name: "khuong", age: 21 },
            { id: 2, name: "tra", age: 18 }
        ]
    }

    handleAddNewUser = (userObj) => {
        this.setState({
            listUser: [userObj, ...this.state.listUser]
        })
    }

    handleDeleteUser = (userId) => {
        let listUserClone = this.state.listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId)
        this.setState({
            listUser: listUserClone
        })
    }

    render() {

        return (
            <>
                <AddUserInfo
                    handleAddNewUser={this.handleAddNewUser}

                />
                <br />
                <hr />
                <DisplayInfo
                    listUser={this.state.listUser}
                    handleDeleteUser={this.handleDeleteUser}
                />
            </>
        );
    }
}

export default MyComponent;