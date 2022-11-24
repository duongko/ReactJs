import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { GetQuizid, postSubmitQuiz } from "../../service/apiService"
import _, { isBuffer } from 'lodash'
import "./detailquiz.scss"
import { useSelector } from "react-redux"
import { store } from "../../redux/store"

import Quesdetail from "./Quesdetail"
import { useState } from "react"
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses"
import ModalResult from "./ModalResult"


const Detailquiz = (props) => {
    const param = useParams()
    const quizid = param.id
    const quiz = useSelector(state => state.quizques.quiz)

    const [quesquiz, setquesquiz] = useState([])
    const [index, setindex] = useState(0)

    const [showmodalresult, setShowmodalresult] = useState(false);






    useEffect(() => {

        fetchquizid()

    }, [quizid])

    const fetchquizid = async () => {

        let res = await GetQuizid(quizid)


        if (res.DT && res.EC === 0) {

            // console.log("data: ", res.DT)





            let data = _.chain(res.DT)


                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {







                    const answer = []
                    let quesdescription = null
                    let img = null
                    value.forEach((item, index) => {
                        // console.log("item:", item)
                        if (index == 0) {
                            quesdescription = item.description
                            img = item.image


                        }

                        item.answers.isSelected = false
                        //tao bien naỳ để đánh dấu , cũng như lưu giá trị đã dc chọn        


                        answer.push(item.answers)

                    });




                    return { questionid: key, answer, quesdescription, img }
                })
                .value()
            console.log("value là: ", data)
            setquesquiz(data)
        }
    }




    const handlenext = () => {
        if (quesquiz && quesquiz.length > index + 1) {
            setindex(index + 1)
        }
    }

    const handlepre = () => {
        if (index - 1 < 0) {
            return;
        }
        setindex(index - 1)



    }

    const handleHandleCheckbox = (AnsId, quesId) => {

        let dataQuizClone = _.cloneDeep(quesquiz)

        // console.log("cập nhập dataquizclone:", dataQuizClone[0])

        let question = dataQuizClone.find((item) => {



            return +item.questionid === +quesId

        })

        if (question && question.answer) {

            let b = question.answer.map((item) => {

                if (+item.id === +AnsId) {


                    item.isSelected = !item.isSelected
                }

                return item;



            })

            question.answer = b;


        }

        // console.log("question là:", question.answer)

        let index = dataQuizClone.findIndex(item => +item.questionid === +quesId)

        console.log("index là :", index)

        if (index > -1) {

            dataQuizClone[index] = question;
            setquesquiz(dataQuizClone)

            //cập nhập lại
        }














    }
    const handleFinish = async () => {


        console.log("gia tri của bài quesquiz", quesquiz)

        // {
        //     "quizId": 1,
        //     "answers": [
        //         { 
        //             "questionId": 1,
        //             "userAnswerId": [3]
        //         },
        //         { 
        //             "questionId": 2,
        //             "userAnswerId": [6]
        //         }
        //     ]
        // }

        let payload = {
            quizId: +quizid,
            answer: []
        }
        let answer = []
        if (quesquiz && quesquiz.length > 0) {
            quesquiz.forEach(question => {
                let questionId = question.questionid
                let userAnswerId = []

                question.answer.forEach(a => {

                    if (a.isSelected == true) {

                        userAnswerId.push(a.id)
                    }
                })
                answer.push({

                    questionId: +questionId,
                    userAnswerId: userAnswerId
                })

            });


            payload.answer = answer
            // console.log("payload: ", payload)

            let res = await postSubmitQuiz(payload)

            console.log("res:", res)

            if (res && res.EC === 0) {
                setShowmodalresult(true)
            } else {
                alert("dksjfkjsdklfj")
            }

        }


    }

    return (

        <div className="Detail-quiz-container container">
            <div className="left-content">
                <div>

                    <h3>Quiz {quizid}: {quiz.description}</h3>
                </div>
                <div className="q-body">


                    {/* <img src={`data:image/jpeg;base64,${data.img}`} /> */}
                </div>
                <div className="q-content">
                    <Quesdetail

                        index={index}

                        dataques={quesquiz && quesquiz.length > 0 ? quesquiz[index] : []}

                        setquesquiz={setquesquiz}
                        handleHandleCheckbox={handleHandleCheckbox}



                    />


                </div>

                <div className="footer ">
                    <button className="m-3" onClick={() => { handlepre() }} >Back</button>
                    <button className="m-3" onClick={() => { handlenext() }} >next</button>

                    <button className="m-3 btn btn-warning" onClick={() => handleFinish()}>finishd</button>


                </div>
            </div>


            <div className="right-content">

                Count down
            </div>
            <ModalResult

                show={showmodalresult}
                setshow={setShowmodalresult}
            />

        </div>
    )
}

export default Detailquiz