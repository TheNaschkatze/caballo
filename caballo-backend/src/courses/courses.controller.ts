import {Controller, Get, Param, Put} from '@nestjs/common';
import {CoursesService} from "./courses.service";

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

    @Get()
    getCourses(): any {
        return this.coursesService.getCourses();
    }

    @Put(':id')
    toggleCourse(@Param('id') id): any {
        return this.coursesService.update(id);
    }
}
