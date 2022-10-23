import React from "react";
import Displayinfo from "./Displayinfo";


class AddUserinfo extends React.Component {
    state = {
        id: '1',
        name: 'dương',
        age: '23',
    }

    handelonSubmit = (event) => {
        event.preventDefault();
        this.props.handlAddnewUser({

            id: Math.floor((Math.random() * 100) + 1) + "-radom",
            name: this.state.name,
            age: this.state.age,





        })




        // event.preventDefaut() dung de ngăn không cho load lại trang khi ấn nút submit
    }
    handelonChangeinput = (event) => {


        this.setState({
            name: event.target.value

        })

    }
    handelonChangeageage = (event) => {


        this.setState({
            age: event.target.value

        })

    }

    handelclick(event) {
        // console.log('cảm ơn bạn rất nhiều')
        console.log(event)
        console.log("tên tôi là :", this.state.name)
        this.setState({
            name: "đường"

            ///hàm setState là hàm giúp cập nhập/thaydoi  của thằng state
        })
    }
    render() {
        return (

            <div>
                {/* <div>tên: {this.state.name}</div>
                <label>age: {this.state.age}</label> */}

                <form onSubmit={(event) => { this.handelonSubmit(event) }}>
                    <label>tên: </label>
                    <input type="text"
                        onChange={(event) => { this.handelonChangeinput(event) }}
                    />
                    <button>click here</button>
                </form>



                <form onSubmit={(event) => { this.handelonSubmit(event) }}>
                    <label>age: </label>
                    <input type="text"
                        onChange={(event) => { this.handelonChangeageage(event) }}
                    />
                    <button>click here</button>
                </form>
                <div>chúc mừng bạn tới với thế giới react</div>
            </div>
        )
    }
}
export default AddUserinfo