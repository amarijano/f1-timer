import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useContextFactory } from "./context-factory";

const DataContext = createContext();
const DataActionsContext = createContext();

const DataContextProvider = (props) => {
  const { children } = props;
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const raceStart = date + "T" + time;
  const startDate = new Date(Date.parse(raceStart));

  async function getSchedule() {
    const response = await fetch("http://ergast.com/api/f1/2022.json");
    response
      .json()
      .then((data) => {
        console.log("data fetched");
        setDate(data.MRData.RaceTable.Races[0].date);
        setTime(data.MRData.RaceTable.Races[0].time);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getSchedule();
  }, []);

  return (
    <DataContext.Provider value={{ raceStart, startDate }}>
      <DataActionsContext.Provider value={{}}>
        {children}
      </DataActionsContext.Provider>
    </DataContext.Provider>
  );
};

DataContextProvider.propTypes = {
  children: PropTypes.node,
};

DataContextProvider.defaultProps = {
  children: null,
};

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useDataContext = useContextFactory("DataContext", DataContext);
// eslint-disable-next-line react-hooks/rules-of-hooks
export const useDataActionsContext = useContextFactory(
  "DataActionsContext",
  DataActionsContext
);
export default DataContextProvider;
