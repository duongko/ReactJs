
import { INCREMENT, DECREMENT } from '../action/counterAction';
import { FETCH_USER_LOGIN } from '../action/userAction';
const INITIAL_STATE = {
    account: {
        access_token: "",
        refresh_token: '',
        username: '',
        image: '',
        role: '',


    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {

    // console.log("action của useReducer", action)
    ///action lấy từ dispatch(action)
    switch (action.type) {
        case FETCH_USER_LOGIN:

            // console.log("action users:", action)
            return {
                ...state, account: {

                    access_token: action?.payload?.DT?.access_token,
                    refresh_token: action?.payload?.DT?.refresh_token,
                    username: action?.payload?.DT?.username,
                    image: action?.payload?.DT?.image,
                    role: action?.payload?.DT?.role,

                },
                isAuthenticated: true
            };

        case DECREMENT:
            return {
                ...state, count: state.count - 1,
            };
        default: return state;
    }
};

export default userReducer;