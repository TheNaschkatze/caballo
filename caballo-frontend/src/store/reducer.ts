import * as actionTypes from "./actionTypes"
import {ICourseState} from "./interfaces/ICourseState";
import {ICourse} from "./interfaces/ICourse";
import {ICourseAction} from "./interfaces/ICourseAction";

const initialState: ICourseState = {
    "courseList": [
    ]
}

const reducer = (
    state:  ICourseState = initialState,
    action: ICourseAction
): ICourseState => {
    switch (action.type) {
        case actionTypes.TOGGLE_wishListFlag:
            const updatedCourses =
                state.courseList.map((course: ICourse) => {
                    if (course.courseId === action.courses[0].courseId) {
                        return {
                            ...course,
                            wishListFlag: !action.courses[0].wishListFlag,
                        }
                    } else {
                        return course
                    }
                });
            return {
                ...state,
                courseList: updatedCourses,
            };
        case actionTypes.FETCH_COURSES:
            console.log('hello')
            return {...state,
            courseList: action.courses
            };
        default:
            return state

    }
};

export default reducer
