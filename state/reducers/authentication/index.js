import api from "../../../utils/api";
import { AppDispatch } from "../../store";
const USERLOGIN = "USERLOGIN";
const USERLOGINFAIL = "USERLOGINFAIL";

const ApplianceReducer = (state = initialState, action) => {
  switch (action.type) {
    case USERLOGIN:
      return {
        ...state,
        userAuthenticated: action.payload.userAuthenticated,
      };
    default:
      return state;
  }
};

export const login = (data) => async (dispatch) => {
  try {
    const userData = await api.post("/auth/local", {
      email: data.email.value,
      password: data.password.value,
    });
    dispatch({
      type: USERLOGIN,
      payload: {
        userAuthenticated: true,
      },
    });
  } catch (e) {
    dispatch({
      type: USERLOGINFAIL,
      payload: {
        userAuthenticated: false,
      },
    });
    throw e;
  }
};

export default ApplianceReducer;
