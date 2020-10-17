import {Injectable} from '@nestjs/common';
import {COURSES} from '../data'

@Injectable()
export class CoursesService {
    courses = COURSES;

    getCourses() {
        return COURSES;
    }

    update(id: number) {
        const updatedCourses = this.courses.courseList.map(
            (course) => {
                if (course.courseId == id) {
                    return {
                        ...course,
                        wishListFlag: !course.wishListFlag
                    }
                } else {
                    return course
                }
            }
        );
        this.courses.courseList = updatedCourses;
        return `we toggled the wishListFlag from ${id}}`;
    }
}
