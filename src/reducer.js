import { GET_USERS_SUCESS } from "./actions";

const myFirstReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS_SUCESS:
            return { ...state, users: action.users }
        default:
            return state;
    }
};

export default myFirstReducer;