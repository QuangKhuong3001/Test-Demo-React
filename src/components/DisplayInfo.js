import React from "react";
import '../scss/DisplayInfo.scss';

class DisplayInfo extends React.Component {

    constructor(props) {
        console.log('call constructer');
        super(props);
        this.state = {
            isShowListUser: true
        }
    }

    handleShowHide = () => {
        this.setState({
            isShowListUser: !this.state.isShowListUser
        })
    }

    componentDidMount() {
        console.log('didmouse');
        setTimeout(() => {
            document.title = 'KhuongQuang'
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('did update', this.props, prevProps)
        if (this.props.listUser.length === 5) {
            alert('5 user')
        }
    }

    render() {

        const { listUser } = this.props;

        return (
            <>
                {console.log('render')}
                <div className="display-info-container">
                    <span onClick={() => { this.handleShowHide() }}>
                        {this.state.isShowListUser === true ? "Hide list user" : "Show list user"}
                    </span>
                    {this.state.isShowListUser &&
                        <>
                            {
                                listUser.map((user, index) => {
                                    return (
                                        <div key={user.id} className={+user.age > 18 ? "green" : "red"}>
                                            <div>My name is {user.name}</div>
                                            <div>My age is {user.age}</div>
                                            <div>
                                                <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete</button>
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
}

export default DisplayInfo