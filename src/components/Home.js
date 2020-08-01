import React, { useEffect, useState } from 'react'
import { Grid, Typography, Fade } from '@material-ui/core'
import { useStyles } from '../theme/mainStyles'
import BrandLogo from '../assets/images/brandlogo.png'

export const Home = () => {
    const classes = useStyles()

    const [fade, setFade] = useState(false)

    useEffect(() => {
        setFade(true)
    }, [])

    return (
        <Fade in={fade} timeout={4000}>
                <Grid className={classes.home} container spacing={3}>
                    <Grid item xs={7} className={classes.tagLineLeft}>
                        <Fade in={fade} timeout={5000}>
                            <Typography variant="h4" className={classes.homeHeader} color="textPrimary" gutterBottom>
                                Tyler Masterson
                            </Typography>
                        </Fade>
                    </Grid>
                    <div className={classes.logoDiv}>
                        <img className={classes.brandLogo} src={BrandLogo} alt="brand-logo" />
                    </div>
                    <Grid item xs={5} className={classes.tagLineRight}>
                        <Fade in={fade} timeout={6000}>
                            <Typography variant="h4" className={classes.homeHeader} color="textPrimary" gutterBottom>
                                Web Developer
                            </Typography>
                        </Fade>
                    </Grid>
                </Grid>
        </Fade>
    )
}