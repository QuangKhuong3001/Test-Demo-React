import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = (props) => {

    const [listUser, setListUser] = useState(
        [
            { id: 1, name: "khuong", age: 21 },
            { id: 2, name: "tra", age: 18 }
        ]
    );

    const handleAddNewUser = (userObj) => {
        setListUser([userObj, ...listUser])
    }

    const handleDeleteUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter(item => item.id !== userId)
        setListUser(listUserClone)
    }

    return (
        <>
            <AddUserInfo
                handleAddNewUser={handleAddNewUser}

            />
            <br />
            <hr />
            <DisplayInfo
                listUser={listUser}
                handleDeleteUser={handleDeleteUser}
            />
        </>
    );
}

export default MyComponent;