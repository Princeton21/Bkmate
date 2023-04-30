import React from 'react'
import mainimg from '../../assets/Group 173.png'
import classes from './Home.module.css'
import { Container, Typography, Stack, Grid, Box ,useMediaQuery} from "@mui/material";


const Home = (props) => {
  return (
    <>
       <div className={classes.main_page} >
          <div className={classes.main_left}>
            
            <h1>BOOKMATE</h1>
            <p>First, let’s make sure we serve your areaFirstserve your areaFirst </p>
            <button type="button" className={classes.btn} >Sell Books</button>
          </div>
          <div className={classes.main_right}>
              <img src={mainimg} alt="main image"
                height="600px"
                width="500px"
              />
          </div>
       </div> 
       <div className={classes.s_parent}>
        <div className={classes.s_left}>sell</div>
        <div className={classes.s_right}>buy</div>
       </div>
      {/* <Box
      maxWidth="100%"
      width="100vw"
      className={classes.main}
      >
       <Grid container spacing={4} maxWidth="xl" className={classes.main}>
          <Grid item xs={12} md={6}
         >
          <Stack direction="column">
          <Typography
             variant="h5"
            component="h5">
              Happy feet, happy savings!
            </Typography>
            <Typography
             variant="h2"
            component="h1">
              BOOKMATE
            </Typography>
            <Typography
             variant="body"
            component="body">
              Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
integer rutrum nisi. A nec nisl vitae 
            </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={mainimg} alt="main img"
              style={{ maxWidth: '100%' }}
            />
          </Grid>
       </Grid>
       </Box> */}
    </>
  )
}

export default Home