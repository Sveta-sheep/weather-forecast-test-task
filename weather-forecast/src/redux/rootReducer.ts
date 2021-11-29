import { weatherReducer } from './weatherReducer';
import { AnyAction, combineReducers } from "redux";

const appReducer = combineReducers({
    weatherReducer
})

export const rootReducer = (state: any, action: AnyAction) => {
    return appReducer(state, action)
}

export type AppState = ReturnType<typeof appReducer>
