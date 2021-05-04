import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/TopicsSlice";

const initialState = { quizzes: {} };

const quizzesSlice = createSlice({
  name: "quizzes",
  initialState,
  reducers: {
    addQuiz: (state, action) => {
      const { quizId, name, topicId, cardIds } = action.payload;
      state.quizzes[quizId] = {
        id: quizId,
        name,
        topicId,
        cardIds
      };
    }
  }
});

export const addQuizAndQuizId = (quiz) => {
  const { quizId, name, topicId, cardIds } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId, topicId }));
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;

export const { addQuiz } = quizzesSlice.actions;
