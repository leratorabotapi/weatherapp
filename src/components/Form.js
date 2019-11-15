import React from "react";
import { Paper, InputBase, FormControl, Typography } from '@material-ui/core';

const Form = props => (
	<FormControl>
	<form onSubmit={props.getWeather}>
		<Paper className="inputbar">
		<Typography variant="h6" ><InputBase type="text" name="city" placeholder="City"/></Typography>
		
		<Typography variant="h6" ><InputBase type="text" name="country" placeholder="Country"/></Typography>
		<button className="btn btn-grad">Search</button>
		</Paper>	
	</form>
	</FormControl>
);

export default Form;