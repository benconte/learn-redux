import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./features/auth-slice"
import { useSelector, TypedUseSelectorHook } from "react-redux"

export const store = configureStore({
	reducer: {
		authReducer,
	}	
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// a reducer is a function that takes in an action and the 
// previous state of the application and then it makes some 
// changes to that state and return it.
// reducers have access to the state