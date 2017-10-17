/**
 * Created by Daniel on 19/09/2017.
 */
import React,{ Component } from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component{

    constructor(props){
        super(props);


    }
    renderWeather(cityData){
        const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressure = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        console.log(temps);
        return(
            <tr key={name}>
                <td>{name}</td>
                <td><Chart data={temps} color="orange"/></td>
                <td><Chart data={pressure} color="green"/></td>
                <td><Chart data={humidity} color="black"/></td>
            </tr>
        )

    }
    render(){
        return(
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

function mapStateToProps({weather}){
    //whatever will returned will show up as props (es6 syntax)
    return{ weather }
}

export default connect(mapStateToProps)(WeatherList);