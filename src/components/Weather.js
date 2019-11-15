import React from "react";
import { } from '@material-ui/core';

const Weather = props => (

	
	<div >
	 {
	 	props.city && props.country && <p> Location: 
	 		<span> { props.city }, { props.country }</span>
	 	</p> 
	 } 
	 { 	
	 	props.temperature && <p> Temperature: 
	 		<span> { props.temperature }	</span>
			 &#8451;
	 	</p> 
	 }
	 { 	
	 	props.humidity && <p> Humidity: 
	 		<span> { props.humidity } </span>
	 	</p> 
	 }
	 { 	
	 	props.description && <p> Conditions: 
	 		<span > { props.description } </span>
	 </p> 
	 }
	 { 	
	 	props.temp_min && <p> Low: 
	 		<span > { props.temp_min } </span>
			 &#8451;
	 </p> 
	 }
	 { 	
	 	props.temp_max && <p> Max: 
	 		<span > { props.temp_max } </span>
			 &#8451;
	 </p> 
	 }
	 { 	
	 	props.icon && <p> icon: 
	 		<span > { props.icon} </span>

	 </p> 
	 }
	 { 
	 	props.error && <p>{ props.error }</p>  
	 }
	</div>
	
);

export default Weather;