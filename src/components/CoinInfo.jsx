import React from 'react' 
import axios from "axios";
import { useEffect, useState } from "react";
import { HistoricalChart } from '../confg/api'
import { Line } from "react-chartjs-2";
// import SelectButton 
import { CryptoState } from "../CryptoContext";
import { CircularProgress, createTheme } from '@mui/material';
import { chartDays } from "../confg/data"
import { useParams } from 'react-router-dom';
// import SelectButton from "./SelectButton";


const CoinInfo = ({ coin }) => {
  const { id } = useParams();
    const [historicData, setHistoricData] = useState('');
  const [days, setDays] = useState(1);
  const { currency, symbol } = CryptoState();
  const [flag,setflag] = useState(false);

 
  useEffect(() => {
    axios
      .get(
        HistoricalChart(days, currency, id)
      )
      .then((res) => setHistoricData(res.data));
  }, []);


  console.log(historicData);

  // useEffect(() => {
  //   fetchHistoricData();
  // }, [days]);

  
  return (
    <div>
        {!historicData | flag===true ? (
          <CircularProgress
            style={{ color: "gold" }}
            size={50}
            thickness={3}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),

                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#EEBC1D",
                  },
                ],
              }}
            //   options={{
            //     elements: {
            //       point: {
            //         radius: 1,
            //       },
            //     },
            //   }}
            />
            {/* <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div> */}
          </>
        )}
      </div>
  )
}

export default CoinInfo