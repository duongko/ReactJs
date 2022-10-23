import React from "react";

class Displayinfo extends React.Component {

    render() {
        //prop: property truyền dữ liệu từ component cha sang component con
        console.log(this.props)
        const { age, name } = this.props;

        //đây là cách viết destructuring <=> const age= this.props.age
        return (

            <div>
                tên của tôi là :{name}
                <br></br>
                tuổi: {age}
            </div>

        )
    }
}
export default Displayinfo;