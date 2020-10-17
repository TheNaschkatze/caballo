import {ICourse} from "./interfaces/ICourse";
import {IDispatchType} from "./interfaces/IDispatchAction";
import {ICourseAction} from "./interfaces/ICourseAction";
import * as actionTypes from "./actionTypes"
import axios from 'axios'

export function toggleWishListFlag(course: ICourse) {
    const courses = new Array(course);
    const action: ICourseAction = {
        type: actionTypes.TOGGLE_wishListFlag,
        courses
    };
    return function (dispatch: IDispatchType) {
        axios.put(`http://localhost:8000/courses/${action.courses[0].courseId}`)
            .then(function () {
                dispatch(action)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

export function fetchCourses() {
    return function (dispatch: IDispatchType) {
        axios.get(`http://localhost:8000/courses`)
            .then(function (response) {
                const action: ICourseAction = {
                    type: actionTypes.FETCH_COURSES,
                    courses: response.data.courseList
                };
                dispatch(action)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
}

