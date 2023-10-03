import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LearningPathState {
    value: number
}

const initialState: LearningPathState = {
    value: 0
};

const learningPathSlice = createSlice({
    name: "learning-path",
    initialState,
    reducers: {
        // immer makes it immutable
        incremented(state) {
            state.value++;
        },
        amountAdded(state, action: PayloadAction<number>){
            state.value += action.payload;
        }
    }
});

export const { incremented, amountAdded } = learningPathSlice.actions;
export default learningPathSlice.reducer;