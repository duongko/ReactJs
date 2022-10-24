import React from "react";

// class Displayinfo extends React.Component {

//     constructor(props) {
//         console.log("call me contructor : 1");
//         super(props);
//         this.state = {
//             showlistUser: true
//         }
//     }


//     handleHide = () => {
//         // alert("heloo")
//         this.setState({
//             showlistUser: !this.state.showlistUser
//         })
//     }

//     handlonclick = (user) => {
//         const { handDelete } = this.props
//         this.props.handDelete(user)

//     }

//     componentDidMount() {
//         console.log("call me componentDidmount")
//         setTimeout(() => {
//             document.title = 'tiltle'
//         }, 5000);

//     }
//     //componentDimount dungf ddeer tuowng tac voiws dom khi Dom "có dữ liệu/render"f xong

//     render() {
//         console.log("call me render")
//         //prop: property truyền dữ liệu từ component cha sang component con
//         // console.log(this.props)
//         const { listUser } = this.props;
//         console.log(this.props.listUser)
//         // console.table(listUser)



//         //đây là cách viết destructuring <=> const age= this.props.age
//         return (

//             <div>

//                 <span onClick={() => this.handleHide()}>


//                     {this.state.showlistUser === true ? "Ẩn dữ liệu" : "Hiện dữ liệu"}
//                 </span>
//                 {/* tên của tôi là :{name}
//                 <br></br>
//                 tuổi: {age} */}

//                 {listUser.map((user) => {
//                     // console.log(user)


//                     return (
//                         <div key={user.id} className={+user.age > 22 ? "red" : "green"}>



//                             {this.state.showlistUser &&
//                                 <div >
//                                     tên của tôi là :{user.name}
//                                     <br></br>
//                                     tuổi: {user.age}
//                                     <span>
//                                         <button onClick={() => { this.handlonclick(user.id) }}>Delete</button>
//                                         {/* <button onClick={() => { this.props.handDelete(user.id)}}>Delete</button> */}
//                                     </span>
//                                     <hr></hr>


//                                 </div>
//                             }
//                         </div>
//                     )



//                 })}
//             </div>

//         )
//     }
// }

/////////////////////////////////////////////////////////////////////////////////////////
// REACTJS HOOK/////////////////////////////


//KHI KHÔNG CÓ STATE THÌ SẼ DÙNG HOOK, STATE NÀY GỌI LÀ STATELESS


const Displayinfo = (props) => {


    console.log("call me render")

    const { listUser } = props;
    //đây là cách viết destructuring <=> const age= this.props.age
    return (

        <div>







            {
                listUser.map((user) => {
                    // console.log(user)


                    return (
                        <div key={user.id} className={+user.age > 22 ? "red" : "green"}>



                            {true &&
                                <div >
                                    tên của tôi là :{user.name}
                                    <br></br>
                                    tuổi: {user.age}
                                    <span>
                                        {/* <button onClick={() => { this.handlonclick(user.id) }}>Delete</button> */}
                                        <button onClick={() => props.handDelete(user.id)}>Delete</button>
                                    </span>
                                    <hr></hr>


                                </div>
                            }
                        </div>
                    )



                })
            }
        </div >

    )
}


export default Displayinfo;