import React from "react";

class Displayinfo extends React.Component {

    state = {
        showlistUser: true
    }
    handleHide = () => {
        // alert("heloo")
        this.setState({
            showlistUser: !this.state.showlistUser
        })
    }



    render() {
        //prop: property truyền dữ liệu từ component cha sang component con
        // console.log(this.props)
        const { listUser } = this.props;
        console.log(listUser)
        console.table(listUser)



        //đây là cách viết destructuring <=> const age= this.props.age
        return (

            <div>

                <span onClick={() => this.handleHide()}>


                    {this.state.showlistUser === true ? "Ẩn dữ liệu" : "Hiện dữ liệu"}
                </span>
                {/* tên của tôi là :{name}
                <br></br>
                tuổi: {age} */}

                {listUser.map((user) => {


                    return (
                        <div>



                            {this.state.showlistUser &&
                                <div key={user.id} className={+user.age > 22 ? "red" : "green"}>
                                    tên của tôi là :{user.name}
                                    <br></br>
                                    tuổi: {user.age}
                                    <hr></hr>

                                </div>
                            }
                        </div>
                    )

                    // if (+user.age > 22) {

                    //     return (
                    //         <div key={user.id} className="red">
                    //             tên của tôi là :{user.name}
                    //             <br></br>
                    //             tuổi: {user.age}
                    //             <hr></hr>

                    //         </div>
                    //     )

                    // } else {
                    //     return (
                    //         <div key={user.id} className="green">
                    //             tên của tôi là :{user.name}
                    //             <br></br>
                    //             tuổi: {user.age}
                    //             <hr></hr>

                    //         </div>
                    //     )

                    // }


                })}
            </div>

        )
    }
}
export default Displayinfo;