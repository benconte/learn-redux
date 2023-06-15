import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type InitalState = {
	value: AuthState;
}

type AuthState = {
	isAuth: boolean;
	username: string;
	uid: string;
	isModerator: boolean;
}

const initialState = {
	value: {
		isAuth: false,
		username: "",
		uid: "",
		isModerator: false
	} as AuthState,
} as InitalState;

// whatever we return from the reducers functions will be the new state
export const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logOut: () => {
			return initialState;
		},
		logIn: (state, action: PayloadAction<string>) => {
			// we are sending the username which is a string. That's why we pass a string as the type to the payload
			return {
				value: {
					isAuth: true,
					username: action.payload,
					uid: "fsflsdfs9dfsd0o9fdsi",
					isModerator: false,
				},
			}
		},
		toggleModerator: (state) => {
			// with redux toolkit, if you mutate the state and don't return anything, it 
			// it will automatically recognize the change and return it.

			// you should always mutate the state or return a new object of the new state
			
			state.value.isModerator = !state.value.isModerator;
		}
	}
})


export const { logIn, logOut, toggleModerator } = auth.actions
export default auth.reducer;