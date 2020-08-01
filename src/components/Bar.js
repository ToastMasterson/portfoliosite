import React from 'react'
import { useState } from 'react'
import { useStyles } from '../theme/mainStyles'
import { Toolbar, AppBar, Tabs, Tab } from '@material-ui/core'

import { ReactComponent as HomeIcon } from '../assets/icons/homeIcon1.svg'
import { ReactComponent as PersonIcon } from '../assets/icons/personIcon2.svg'
import { ReactComponent as MailIcon } from '../assets/icons/mailIcon.svg'
import { ReactComponent as MusicIcon } from '../assets/icons/musicIcon.svg'
import { ReactComponent as ComputerIcon } from '../assets/icons/computerIcon1.svg'


export const Bar = () => {
    
    const [value, setValue] = useState(0)

    const classes = useStyles()

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }

    return (
        <AppBar position="sticky">
            <Toolbar className={classes.toolbar}>
                <Tabs
                    onChange={handleChange} 
                    value={value}
                    variant="scrollable"
                    scrollButtons="auto">
                    <Tab icon={<HomeIcon className={classes.tabIcon} />} />
                    <Tab icon={<PersonIcon className={classes.tabIcon} />} />
                    <Tab icon={<ComputerIcon className={classes.tabIcon} />} />
                    <Tab icon={<MusicIcon className={classes.tabIcon} />} />
                    <Tab icon={<MailIcon className={classes.tabIcon} />} />
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}