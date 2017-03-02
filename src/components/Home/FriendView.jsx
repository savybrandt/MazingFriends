import React from 'react';


class FriendView extends React.Component {
    constructor() {
        super();
        this.state = {
            friends: []
        }
    }
    componentDidMount() {
        let context = this;
        socket.emit("getFriends", sessionStorage.getItem('user'));
        socket.on("friendData", function(data){
            context.setState({
                friends: data
            })
        });
    }
    render (){
        return(
            <div>
            {this.state.friends.map((data) => {
                return (
                    <h2>{data.friend}</h2>
                )
            })}
                </div>
        );
    }
}
export default FriendView