import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiData = createApi({
  reducerPath: 'apiData',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_BASE_URL }),
  tagTypes: ['Notes', 'Moods'],
  endpoints: (builder) => ({
    createInvitation: builder.mutation({
      query: (data) => createInvitation(data),
      invalidatesTags: ['Notes'],
    }),
    createMood: builder.mutation({
      query: (data) => createMood(data),
      invalidatesTags: ['Moods'],
    }),
    deleteNote: builder.mutation({
      query: (id) => deleteNote(id),
      invalidatesTags: ['Notes'],
    }),
    getAdvice: builder.query({
      query: getAdvice,
    }),
    getNote: builder.query({
      query: (id) => getNoteById(id),
    }),
    getAllNotes: builder.query({
      query: getAllNotes,
      providesTags: ['Notes'],
    }),
    getAllMoods: builder.query({
      query: getAllMoods,
      providesTags: ['Moods'],
    }),
    getWeeklyMoods: builder.query({
      query: ({ startWeek, endWeek }) => getWeeklyMoods({ startWeek, endWeek }),
      providesTags: ['Moods'],
    }),
    getMonthlyMoods: builder.query({
      query: ({ startMonth, endMonth }) =>
        getMonthlyMoods({ startMonth, endMonth }),
      providesTags: ['Moods'],
    }),
    getYearlyMoods: builder.query({
      query: ({ startYear, endYear }) => getYearlyMoods({ startYear, endYear }),
      providesTags: ['Moods'],
    }),
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useCreateNoteMutation,
  useCreateMoodMutation,
  useDeleteNoteMutation,
  useGetAllNotesQuery,
  useGetAdviceQuery,
  useGetAllMoodsQuery,
  useGetNoteQuery,
  useGetWeeklyMoodsQuery,
  useGetMonthlyMoodsQuery,
  useGetYearlyMoodsQuery,
} = apiData;
