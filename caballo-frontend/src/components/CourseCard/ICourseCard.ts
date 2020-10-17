import {ICourse} from "../../store/interfaces/ICourse";

export interface ICourseCard {
    course: ICourse
    toggleFav: (course: ICourse)=>{}
}
