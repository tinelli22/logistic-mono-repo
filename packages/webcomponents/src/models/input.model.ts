import { FeedbackStatusTypes } from "../types/feedbackStatus";

export interface LogInputModel {
    name: string;
    placeHolder?: string;
    disabled?: boolean;
    status?: FeedbackStatusModel
}

export interface FeedbackStatusModel {
    text: string;
    status: FeedbackStatusTypes
}