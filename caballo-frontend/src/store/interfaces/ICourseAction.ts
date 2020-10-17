import {ICourse} from "./ICourse";

export interface ICourseAction {
    type: string,
    courses: ICourse[]
}
