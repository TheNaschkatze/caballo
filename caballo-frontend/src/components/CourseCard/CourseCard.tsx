import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {ICourseCard} from "./ICourseCard";
import {IconButton} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    root: {
        width: 450,
        marginBottom: 25
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const CourseCard: React.FC<ICourseCard> = ({course, toggleFav}) => {

    const classes = useStyles();

    const favIcon = course.wishListFlag ?
        <FavoriteIcon color="primary"/> :
        <FavoriteBorderIcon color="primary"/>

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography component="h3">
                    {course.courseName}
                </Typography>
            </CardContent>
            <IconButton aria-label="add to favorites" onClick={() => toggleFav(course)}>
                {favIcon}
            </IconButton>
        </Card>
    );
}
