import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import souvenir from './images/souvenir.png';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles';
import { getPosts } from './actions/posts';

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <div>
            <Container maxwidth="lg" >
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Souvenir</Typography>
                    <img className={classes.image} src={souvenir} alt="memories" height="60" />
                </AppBar>
                <Grow in>
                    <Grid container justify="space-between" alignItems="strech" spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Grow>
            </Container>
        </div>
    );
}

export default App;
