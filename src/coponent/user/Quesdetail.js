import { useState } from "react"
import _, { isBuffer } from 'lodash'
import './quesdetail.scss'


const Quesdetail = (props) => {


    const { dataques, index, setquizques, handleHandleCheckbox } = props
    console.log(" check dataquess:", dataques)
    const [listanswer, setlistanswer] = useState([])

    console.log("answer ket qua:", dataques.answer)



    // if (_.isEmty(dataques)) {
    //     return <></>
    // }
    const handleCheckbox = (event, AnsId, quesId) => {

        handleHandleCheckbox(AnsId, quesId)

    }

    return (

        <div className="left-ques container">

            {dataques.img ?
                <div className="img-quiz" >

                    <img src={`data:image/jpeg;base64,${dataques.img}`} />
                </div>
                :
                <div className="img-quiz"></div>
            }

            <div className="question">
                Question{index + 1} :{dataques.quesdescription}
            </div>



            <div className="answer">


                {dataques.answer && dataques.answer.map((value, index) => {

                    return (

                        <div className="form-check " key={index}>
                            <input className="form-check-input"
                                type="checkbox"
                                id="flexCheckDefault"
                                checked={value.isSelected}
                                onChange={(event) => handleCheckbox(event, value.id, dataques.questionid)}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                {value.description}
                            </label>
                        </div>

                    )

                })}



            </div>

        </div>

    )

}
export default Quesdetail