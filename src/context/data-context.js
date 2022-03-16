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
  const [races, setRaces] = useState([]);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [areRacesLoading, setAreRacesLoading] = useState(false);

  async function getSchedule() {
    setIsScheduleLoading(true);
    const response = await fetch("http://ergast.com/api/f1/current/next.json");
    response
      .json()
      .then((data) => {
        console.log("data fetched");
        console.log(data);
        setDate(data.MRData.RaceTable.Races[0].date);
        setTime(data.MRData.RaceTable.Races[0].time);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsScheduleLoading(false);
      });
  }

  useEffect(() => {
    getSchedule();
  }, []);

  useEffect(() => {
    getRaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getRaces() {
    setAreRacesLoading(true);
    const response = await fetch("http://ergast.com/api/f1/2022.json");
    response
      .json()
      .then((data) => {
        console.log("data fetched");
        console.log(data);
        data.MRData.RaceTable.Races.forEach((el) => {
          races.push({
            raceName: el.raceName,
            raceDate: el.date,
            raceRound: el.round,
            raceNameId: el.raceName.replace(/\s+/g, ""),
            raceLocation: el.Circuit.Location,
            raceFirstPr: el.FirstPractice,
            raceSecondPr: el.SecondPractice,
            raceThirdPr: el.ThirdPractice,
            raceQualy: el.Qualifying,
            raceSprint: el.Sprint,
          });
          setRaces(races);
        });
      })
      .catch((err) => console.log("error"))
      .finally(() => {
        setAreRacesLoading(false);
      });
    console.log(races);
  }

  return (
    <DataContext.Provider
      value={{
        raceStart,
        startDate,
        races,
        isScheduleLoading,
        areRacesLoading,
      }}
    >
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
