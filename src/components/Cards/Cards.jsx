import React from 'react'
import { Card, CardContent, Typography, Grid, } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'

const Cards = ({data : {confirmed, recovered, deaths, lastUpdate}}) =>{
    if (!confirmed){
        return "Loading..."
    }
    return(
        <div className={styles.contenor}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography colour="textSecondary" guttorBottom>Infected</Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography colour="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">No of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography colour="textSecondary" guttorBottom>Recovered</Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography colour="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">No of Recovered cases from COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography colour="textSecondary" guttorBottom>Deaths</Typography>
                        <Typography varient="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography colour="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varient="body2">No of Deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>

        </div>
    )
}

export default Cards