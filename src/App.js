import React from 'react';
import styles from './App.module.css';
import {Cards,Charts,CountryPicker} from './components';
import {fetchData,fetchDailyData} from './api';
import coronaImage from './images/image.png';

class App extends React.Component
{
    state={
        data:{},
        country:'',
    }
    async componentDidMount(){
        const fetchedData = await fetchData();
        // const fetchDaily = await fetchDailyData();
        this.setState({data:fetchedData});
        
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
       this.setState({data:fetchedData,country:country});
    }

    render()
    {
        const {data,country} = this.state;
        return(
            <div className={styles.container}>
                <img src={coronaImage} className={styles.image} alt="COVID-19"/>

                <Cards data={data}/>
                <br />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Charts data={data} country={country}/>
            </div>
        )
    }
}

export default App;