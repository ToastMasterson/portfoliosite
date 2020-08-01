import React from 'react'
import { Container } from '@material-ui/core'
import { Home } from './Home'
import { useStyles } from '../theme/mainStyles'
import { About } from './About'

export const Main = () => {
    const classes = useStyles()

    return (
        <Container maxWidth="xl" className={classes.main}>
            <Home />
            <About />
        </Container>
    )
}