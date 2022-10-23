import React from 'react';
import Userinfo from './Userinfo';
import Displayinfo from './Displayinfo';

class Mycomponent extends React.Component {




    render() {
        return (

            <div>
                <Userinfo />
                <hr />
                <Displayinfo name="hỏi dân it" age="12" />



            </div>
        )
    }







}

export default Mycomponent;