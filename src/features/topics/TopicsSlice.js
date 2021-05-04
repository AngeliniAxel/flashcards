import { createSlice } from "@reduxjs/toolkit";

const initialState = { topics: {} };

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: []
      };
    },
    addQuizId: (state, action) => {
      const { quizId, topicId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;

export const { addTopic, addQuizId } = topicsSlice.actions;
