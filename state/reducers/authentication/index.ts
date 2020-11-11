import api from "../../../utils/api";
import { AppDispatch } from "../../store";
const USERLOGIN = "USERLOGIN";
const USERLOGINFAIL = "USERLOGINFAIL";

interface UserType {
  email: {
    isValid: boolean;
    value: string;
  };
  password: {
    isValid: boolean;
    value: string;
  };
}

interface UserState {
  userAuthenticated?: boolean;
  user_id?: number;
}

interface UserAction {
  type: string;
  payload: any;
}

const initialState: UserState = {
  userAuthenticated: false,
};

const ApplianceReducer = (state = initialState, action: UserAction) => {
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

export const login = (data: UserType) => async (dispatch: AppDispatch) => {
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
