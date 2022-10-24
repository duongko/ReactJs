import React from 'react';
import AddUserinfo from './AddUserinfo';
import Displayinfo from './Displayinfo';

class Mycomponent extends React.Component {
    state = {
        listUser: [
            { id: 1, name: "hỏi dân it", age: '22' },
            { id: 2, name: "dương", age: '28' },
            { id: 3, name: "minh anh", age: '22' },
        ]


    }

    handlAddnewUser = (user) => {

        this.setState({
            listUser: [user, ...this.state.listUser],
        })
    }

    handDelete = (userid) => {
        let listdelete = this.state.listUser;
        listdelete = listdelete.filter((item) => {
            return (
                item.id != userid

            )
        })
        this.setState({
            listUser: listdelete

        })

    }




    render() {
        return (

            <div>
                <AddUserinfo handlAddnewUser={this.handlAddnewUser} />
                <hr />
                <Displayinfo
                    listUser={this.state.listUser}
                    usser={this.state.listUser}
                    handDelete={this.handDelete}


                />



            </div>
        )
    }







}

export default Mycomponent;