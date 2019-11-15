import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Info from "./components/Info";
import { Paper, Grid } from '@material-ui/core';


const API_KEY = "f02891b19cc75981601c2fc1e4023de2";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    temp_min: undefined,
    temp_max: undefined,
    icon: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        icon: data.weather[0].icon,
        error: ""
      });
      var iconCode = data.weather[0].icon;
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        temp_min: undefined,
        temp_max: undefined,
        icon: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div className="App">

            <Paper className="board">
                <Grid container>
                    <Grid md="7">
                <div>
                  <Titles />
                </div>
                </Grid>

                <Grid md="5">
                <div>
                  <Form getWeather={this.getWeather} />
                </div>
                </Grid>
                </Grid>
                <Info className="weather"

                    temperature={this.state.temperature} 
                    humidity={this.state.humidity}
                    city={this.state.city}
                    country={this.state.country}
                    description={this.state.description}
                    temp_min={this.state.temp_min}
                    temp_max={this.state.temp_max}
                    icon={this.state.icon}
                    error={this.state.error}

                  />
                </Paper>
                
      </div>
    );
  }
};

export default App;
