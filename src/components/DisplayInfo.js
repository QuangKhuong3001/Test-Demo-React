import React, { useEffect, useState } from "react";
import '../scss/DisplayInfo.scss';

const DisplayInfo = (props) => {
    const { listUser } = props;

    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    }

    useEffect(() => {
        console.log('effect')
    }, []);

    return (
        <>
            <div className="display-info-container">
                <div>
                    <span onClick={() => handleShowHideListUser()}>
                        {isShowHideListUser === true ? 'Show List User' : 'Hide List User'}
                    </span>
                </div>
                {isShowHideListUser &&
                    <>
                        {
                            listUser.map((user, index) => {
                                return (
                                    <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                        <div>My name is {user.name}</div>
                                        <div>My age is {user.age}</div>
                                        <div>
                                            <button onClick={() => props.handleDeleteUser(user.id)}>Delete</button>
                                        </div>
                                        <hr></hr>
                                    </div>
                                )
                            })
                        }
                    </>
                }
            </div>
        </>
    )
}

export default DisplayInfo