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
  const [results, setResults] = useState([]);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [areRacesLoading, setAreRacesLoading] = useState(false);
  const [areResultsLoading, setAreResultsLoading] = useState(false);

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

  useEffect(() => {
    getResults();
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
      .catch((err) => console.log(err))
      .finally(() => {
        setAreRacesLoading(false);
      });
    console.log(races);
  }

  async function getResults() {
    setAreResultsLoading(true);
    const response = await fetch(
      "http://ergast.com/api/f1/current/results.json?limit=440"
    );
    response
      .json()
      .then((data) => {
        console.log("data fetched");
        console.log(data.MRData.RaceTable.Races);
        data.MRData.RaceTable.Races.forEach((el) => {
          results.push({
            results: el.Results,
            date: el.date,
            raceId: el.raceName.replace(/\s+/g, ""),
          });
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setAreResultsLoading(false);
        console.log(results);
      });
  }

  return (
    <DataContext.Provider
      value={{
        raceStart,
        startDate,
        races,
        results,
        isScheduleLoading,
        areRacesLoading,
        areResultsLoading,
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
