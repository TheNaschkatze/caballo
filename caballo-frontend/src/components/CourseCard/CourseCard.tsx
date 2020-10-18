import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {ICourseCard} from "./ICourseCard";
import {CardMedia, IconButton} from "@material-ui/core";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles({
    root: {
        marginBottom: 25,
        display: 'flex',
    },
    cover: {
        width: 300,
        height: 150,
    },
    content: {
        alignSelf: 'center',
        display: 'flex',
    },
    title: {
        width: 200,
    },
    icon: {
        width: 100,
    },
});

export const CourseCard: React.FC<ICourseCard> = ({course, toggleFav}) => {

    const classes = useStyles();

    const favIcon = course.wishListFlag ?
        <FavoriteIcon color="primary"/> :
        <FavoriteBorderIcon color="primary"/>

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="https://cdn.wehorse.com/video/course/0/0/0/0/0/0/0/6/de/images/grundlagen-traversale-reiten.jpg?width=772&height=400"
                title="Live from space album cover"
            />
            <CardContent className={classes.content}>
                <Typography component="h3" className={classes.title}>
                    {course.courseName}
                </Typography>
                <IconButton className={classes.icon} aria-label="add to favorites" onClick={() => toggleFav(course)}>
                    {favIcon}
                </IconButton>
            </CardContent>
        </Card>
    );
}
