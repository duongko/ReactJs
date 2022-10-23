import React from "react";

class Displayinfo extends React.Component {


    render() {
        //prop: property truyền dữ liệu từ component cha sang component con
        console.log(this.props)
        const { listUser } = this.props;

        //đây là cách viết destructuring <=> const age= this.props.age
        return (

            <div>
                {/* tên của tôi là :{name}
                <br></br>
                tuổi: {age} */}

                {listUser.map((user) => {
                    return (
                        <div key={user.id}>
                            tên của tôi là :{user.name}
                            <br></br>
                            tuổi: {user.age}
                            <hr></hr>

                        </div>
                    )
                })}
            </div>

        )
    }
}
export default Displayinfo;