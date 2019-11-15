import React from "react";
import { Grid, Box, Typography, Divider } from '@material-ui/core';

const pStyle = {
    margin: '20px auto'
  };

const Info = props => (

	
	<div className="card">
<Grid container spacing={0}>
        <Grid item xs={12}>
        <Divider />
        {
	 	props.city && props.country && <Box fontSize="h4.fontSize" fontWeight="fontWeightMedium" textAlign="center"> <p>
	 		<span> { props.city }, { props.country }</span>
	 	</p> </Box>
	 } 
        </Grid>

        <Grid  item xs={12} sm={6}>
        { 	
	 	props.temperature && <Typography display="inline" align="center" variant="h1" component="" fontSize={32}> <p style={pStyle}>
	 		<span> { props.temperature }	</span>
			 <Typography display="inline" variant="subtitle1">&#8451;</Typography>
	 	</p> </Typography>
	 }
        </Grid>

        <Grid item xs={12} sm={6}>
        { 	
	 	props.humidity && <Typography variant="h6"><p style={pStyle}> Humidity: 
	 		<span> { props.humidity } </span> %
	 	</p> </Typography> 
     }
             <Grid item xs={12} sm={6}>
        { 	
	 	props.temp_min && <Typography variant="h6"><p> Low: 
	 		<span > { props.temp_min } </span>
			 &#8451;
	 </p> </Typography> 
	 }
        </Grid>
        <Grid item xs={12} sm={6}>
        { 	
	 	props.temp_max && <Typography variant="h6">  <p> High: 
	 		<span > { props.temp_max } </span>
			 &#8451;
	 </p> </Typography>
	 }
	 { 	
	 	props.icon && <p> icon: 
	 		<span> http://openweathermap.org/img/w/ { props.icon}.png</span>
	 </p> 
	 }
        </Grid>
        </Grid>
        <Grid item xs={6} sm={6}>
        { 	
	 	props.description && <Typography align="center" variant="subtitle2" component="h6"> <p> Expect
	 		<span > { props.description } </span>
	 </p> </Typography>
	 }
        </Grid>
      </Grid>
	</div>
	
);

export default Info;