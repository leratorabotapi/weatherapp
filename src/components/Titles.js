import React from "react";
import { Typography, Box } from '@material-ui/core';


const Titles = () => (
	<div>
		<Typography style={{ display: 'inline-flex' }} variant="h3" display="block" gutterBottom>
			<Box fontWeight="fontWeightLight">
			Weather &nbsp;</Box> <Box fontWeight="fontWeightMedium"><span variant="h3">Forecast </span></Box></Typography>
		<Typography variant="caption" display="block" gutterBottom>Search to find temperature, humidity and more...</Typography>
	</div>
);

export default Titles;