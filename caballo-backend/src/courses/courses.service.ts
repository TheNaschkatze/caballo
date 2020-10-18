import {Injectable} from '@nestjs/common';
import {COURSES} from '../data'

@Injectable()
export class CoursesService {
    courses = COURSES;

    getCourses() {
        return COURSES;
    }

    update(id: number) {
        const test = this.courses.courseList.find((c) => {c.courseId == id});
        test.wishListFlag = !test.wishListFlag;
        return `we toggled the wishListFlag from ${id}}`;
    }
}
