
import { useParams } from "react-router-dom";
import { Detailquizs } from "../action/startnowAction";

const INITIAL_STATE = {
    quiz: {
        description: '',

    }


};



const StartNowAction = (state = INITIAL_STATE, action) => {



    switch (action.type) {
        case Detailquizs:
            // console.log('giá trị des;', action)




            return {

                ...state,

                quiz: {
                    description: action?.payload?.description,


                }
            }



            break;

        default: return state;


    }
}
export default StartNowAction