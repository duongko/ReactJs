import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { detailquiz } from "../../redux/action/startnowAction";
import { GetQuizbyuser } from "../../service/apiService"
import './listquiz.scss'

const Listquit = (props) => {

    const [Listquit, setListquit] = useState([]);
    const navigate = useNavigate()

    const dispatch = useDispatch()



    useEffect(() => {




        GetQuiz()


    }, [])

    const GetQuiz = async () => {
        let res = await GetQuizbyuser()
        console.log("api", res)

        if (res.DT && res.EC === 0) {
            setListquit(res.DT)
        }




    }

    const StartNow = (data) => {

        dispatch(detailquiz(data))
        navigate(`/quiz/${data.id}`)





    }


    return (

        <div className="list-container container" >

            {Listquit && Listquit.length > 0 && Listquit.map((value, index) => {


                return (

                    <div className="card" style={{ 'width': '18rem' }} key={index}>
                        <img src={`data:image/jpeg;base64,${value.image}`} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Quiz {index + 1}</h5>
                            <p className="card-text">{value.description}</p>
                            <a href="#" className="btn btn-primary" onClick={() => StartNow(value)} >Start Now</a>
                        </div>
                    </div>



                )
            })}


            {Listquit && Listquit.length <= 0 &&

                <div>

                    Bạn không có câu hỏi nào
                </div>
            }

        </div>
    )
}
export default Listquit