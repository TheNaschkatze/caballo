import * as React from "react"
import {useSelector, shallowEqual, useDispatch} from "react-redux"


import {Dispatch} from "redux"
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";
import {toggleWishListFlag, fetchCourses} from "../../store/actionCreators";
import {CourseCard} from "../CourseCard/CourseCard";
import {ICourse} from "../../store/interfaces/ICourse";
import {ICourseState} from "../../store/interfaces/ICourseState";
import {useEffect} from "react";

export const CoursesList: React.FC = () => {
    const styles = useStyles();

    //use selector to extract data from redux
    const courses: readonly ICourse[] = useSelector(
        (state: ICourseState) => state.courseList,
        shallowEqual
    )

    const dispatch: Dispatch<any> = useDispatch()

    const toggleFav: any = React.useCallback(
        (course: ICourse) => dispatch(toggleWishListFlag(course)),
        [dispatch]
    )

    useEffect(() => {
        // Update the document title using the browser API
        dispatch(fetchCourses())
    },[]);
    return (
        <main className={styles.root}>
            <Grid container justify="center" alignItems="center">
                <Grid item xs={12}>
                    <Typography variant="h2" gutterBottom align="center">
                        My Courses
                    </Typography>
                </Grid>
                <Grid item>
                    {courses.map((course: ICourse) => (
                        <CourseCard course={course} toggleFav={toggleFav}/>
                    ))}
                </Grid>
            </Grid>
        </main>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: 'lightgray',
    },

}));


