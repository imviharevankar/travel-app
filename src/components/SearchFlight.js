import React from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.scss';
import "./SearchFlight.scss";

import FlightIcon from "@material-ui/icons/Flight";
import KingBedIcon from "@material-ui/icons/KingBed";
import SearchFlightForm from './SearchFlightForm';


const SearchFlight = () => {
    return (
        <div className="searchFlight">
            <Tabs>
                <TabList>
                    <Tab> <FlightIcon /> Flights </Tab>

                    <Tab><KingBedIcon />Hotels </Tab>

                </TabList>
                <TabPanel>
                    
                    <SearchFlightForm />
                </TabPanel>
                <TabPanel>
                    <h1>Soon</h1>
                </TabPanel>

            </Tabs>
        </div>
    )
}

export default SearchFlight;
