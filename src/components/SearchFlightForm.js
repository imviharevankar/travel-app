import React, { useEffect, useState } from "react";
import "./SearchFlightForm.scss";
import CompareArrowsIcon from "@material-ui/icons/CompareArrows";
import axios from "axios";

import { FormControlLabel, IconButton, Radio, RadioGroup, TextField, Button } from "@material-ui/core";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SearchFlightForm = () => {

  const [ from, setFrom ] = useState("");
  const [to , setTo] = useState("");

  const[fromRes, setFromRes] = useState([]);

  useEffect(() => {

  }, []);

  const handleFrom = (e) => {
    console.log(from.length);
    setFrom(e.target.value);
    if(from && from.length > 1) {
        getFromData();
    } else if (!from) {
      
      setFromRes([]);
    }
     else {
      console.log("error");
    }
  
  
}

  const handleTo = (e) => {
    setTo(e.target.value);
  }

  const switchPlaces = () => {
    setFrom(to);
    setTo(from);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

let options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/IN/INR/en-IN/',
  params: {query: `${from}`},
  headers: {
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
    'x-rapidapi-key': '0cdea6239fmsh77fcff391b6ffe5p12c9c1jsnba36f3928b32'
  }
};

const getFromData = () => {
  axios.request(options).then(function (response) {
    setFromRes(response.data.Places);
    console.log(response.data.Places);
  }).catch(function (error) {
    console.error(error);
  });

}



  return (
    <form onSubmit={handleSubmit} className="searchFlightForm">

      <RadioGroup row>
          <FormControlLabel value="return" control={<Radio />} label="Return" />
          <FormControlLabel value="oneWay" control={<Radio />} label="One Way" />

      </RadioGroup>

      <TextField
        label="From"
        value={from}
        onChange={(e) => handleFrom(e)}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        placeholder="GOI"

      />
      {
        (fromRes) && (

        fromRes.map(place => {
          return(
            <div key={place.PlaceId}>

          <p>{place.PlaceName} {place.PlaceId.slice(0,3)}</p>
         
          </div>

          )
        })

         ) 
      }
      <IconButton onClick={switchPlaces}>
        <CompareArrowsIcon />
      </IconButton>

      <TextField
        label="To"
        value={to}
        onChange={(e) => handleTo(e)}
        type="text"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        placeholder="BOM"
      />

      <Button type="submit">
        Search
      </Button>


    



    </form>
  );
};

export default SearchFlightForm;
