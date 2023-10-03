import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Locale = "be" | "ru";

interface Exercice {
    id: string,
    title: string,
    description: string,
    pictureUrl?: string,
}

type StepType =  "start" | "read" | "practice";
interface Step {
    id: string,
    title: string,
    description: string,
    type: StepType,
    exercises?: Exercice[]
}

interface LearningPath {
    id: string,
    language: Locale,
    enabled: boolean,
    title: string,
    description: string,
    steps?: Step[]
}

interface LearningPathListView {
    id: string,
    languages: Locale[]
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "/api",
        prepareHeaders(headers) {
            //headers.set("", "");
            return headers;
        }
    }),
    endpoints(builder) {
        return {
            fetchLearningPathes: builder.query<LearningPathListView[], number | void>({
                query(limit = 10) {
                    return `learningpath?limit=${limit}`
                }
            }),
            fetchLearningPathTranslations: builder.query<LearningPath[], string>({
                query(id) {
                    return `learningpath/${id}`
                }
            })
        }
    }
});

export const { useFetchLearningPathesQuery } = apiSlice;