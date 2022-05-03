import React, { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useContextFactory } from "./context-factory";
import useSize from "../hooks/useSize";

const DataContext = createContext();
const DataActionsContext = createContext();

const DataContextProvider = (props) => {
  const { children } = props;
  const screenWidth = useSize();
  const [nextRaceName, setNextRaceName] = useState();
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const raceStart = date + "T" + time;
  const startDate = new Date(Date.parse(raceStart));
  const [races, setRaces] = useState([]);
  const [results, setResults] = useState([]);
  const [results2021, setResults2021] = useState([]);
  const [isScheduleLoading, setIsScheduleLoading] = useState(false);
  const [areRacesLoading, setAreRacesLoading] = useState(false);
  const [areResultsLoading, setAreResultsLoading] = useState(false);
  const [areResults2021Loading, setAreResults2021Loading] = useState(false);

  async function getSchedule() {
    setIsScheduleLoading(true);
    const response = await fetch("https://ergast.com/api/f1/current/next.json");
    response
      .json()
      .then((data) => {
        console.log("data fetched");
        console.log(data);
        setDate(data.MRData.RaceTable.Races[0].date);
        setTime(data.MRData.RaceTable.Races[0].time);
        setNextRaceName(
          data.MRData.RaceTable.Races[0].raceName +
            " " +
            data.MRData.RaceTable.Races[0].season
        );
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsScheduleLoading(false);
      });
  }

  useEffect(() => {
    getSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getRaces();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getResults2021();
  }, []);

  async function getRaces() {
    setAreRacesLoading(true);
    const response = await fetch("https://ergast.com/api/f1/2022.json");
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
            raceNameId:
              el.raceName === "Brazilian Grand Prix"
                ? "SãoPauloGrandPrix"
                : el.raceName.replace(/\s+/g, ""),
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
      "https://ergast.com/api/f1/current/results.json?limit=440"
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
          setResults(results);
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setAreResultsLoading(false);
        console.log(results);
      });
  }

  async function getResults2021() {
    setAreResults2021Loading(true);
    const response = await fetch(
      "https://ergast.com/api/f1/2021/results.json?limit=440"
    );
    response
      .json()
      .then((data) => {
        console.log("data fetched");
        console.log(data.MRData.RaceTable.Races);
        data.MRData.RaceTable.Races.forEach((el) => {
          results2021.push({
            results: el.Results,
            date: el.date,
            raceId: el.raceName.replace(/\s+/g, ""),
          });
          setResults2021(results2021);
        });
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setAreResults2021Loading(false);
        console.log(results2021);
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
        nextRaceName,
        screenWidth,
        results2021,
        areResults2021Loading,
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
