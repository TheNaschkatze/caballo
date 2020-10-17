import {ICourseAction} from "./ICourseAction";

export interface IDispatchType {
    (args: ICourseAction): ICourseAction
}
