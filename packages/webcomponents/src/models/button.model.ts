import { BaseModel } from "./base.model";

export interface LogButtonModel extends BaseModel {
    disabled?: boolean;
    textColor?: string;
    label: string;
}