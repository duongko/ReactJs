import React from 'react';
import Userinfo from './Userinfo';
import Displayinfo from './Displayinfo';

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "hỏi dân it", age: '22' },
            { id: 2, name: "dương", age: '28' },
            { id: 3, name: "minh anh", age: '22' },
        ]


    }



    render() {
        return (

            <div>
                <Userinfo />
                <hr />
                <Displayinfo
                    listUser={this.state.listUser}
                    User={this.state.listUser}


                />



            </div>
        )
    }







}

export default Mycomponent;