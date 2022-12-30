import React, { useState, useRef, useEffect } from "react";
import { Range, getTrackBackground } from "react-range";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./dashOrder.css";

const DashOrder = () => {
  const [state, setState] = useState([50]);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });
  ChartJS.register(ArcElement, Tooltip, Legend);
  const data = {
    labels: ["On Delivery", "Delivered", "Canceled"],
    datasets: [
      {
        data: [400, 40, 10],
        backgroundColor: ["#ff1f00", "#08c552", "#000000"],
        borderColor: ["#ff1f00", "#08c552", "#000000"],
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };
  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  return (
    <div id="revenue-container">
      <div id="dash-ord-con">
        <div className="dash-ord-main-text">
          <p id="dash-cash-header">Order Summary</p>
          <div className="dash-ord-range-con" id="dash-sp">
            <Doughnut data={data} options={options} />
          </div>
        </div>
        <div className="dash-ord-main-text">
          <div id="dash-ord-con" className="dash-ord-sub-text">
            <p id="dash-ord-text">Monthly</p>
            <p id="dash-ord-text">Weekly</p>
            <p id="dash-ord-text">Today</p>
          </div>
          <div className="dash-ord-range-con">
            <Range
              values={state}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "8px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: state,
                        colors: ["#ff1f00", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "42px",
                    width: "42px",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    // display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      height: "16px",
                      width: "5px",
                      backgroundColor: "#548BF4",
                    }}
                  />
                </div>
              )}
            />
            <div id="dash-ord-con" className="dash-ord-sub-text range-id-con">
              <div id="dash-ord-range-id" className="range-red"></div>
              <p id="dash-ord-text">On Delivery</p>
              <p id="dash-ord-text">40</p>
            </div>
            <Range
              values={state}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "8px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: state,
                        colors: ["#08c552", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "42px",
                    width: "42px",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      height: "16px",
                      width: "5px",
                      backgroundColor: "#548BF4",
                    }}
                  />
                </div>
              )}
            />
            <div id="dash-ord-con" className="dash-ord-sub-text range-id-con">
              <div id="dash-ord-range-id" className="range-green"></div>
              <p id="dash-ord-text">Delivered</p>
              <p id="dash-ord-text">400</p>
            </div>

            <Range
              values={state}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => setState({ values })}
              renderTrack={({ props, children }) => (
                <div
                  style={{
                    ...props.style,
                    height: "36px",
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "8px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values: state,
                        colors: ["#000000", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "42px",
                    width: "42px",
                    borderRadius: "4px",
                    backgroundColor: "#FFF",
                    // display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                    display: "none",
                  }}
                >
                  <div
                    style={{
                      height: "16px",
                      width: "5px",
                      backgroundColor: "#548BF4",
                    }}
                  />
                </div>
              )}
            />
            <div
              id="dash-ord-con"
              className="dash-ord-sub-text range-id-last-con"
            >
              <div id="dash-ord-range-id" className="range-black"></div>
              <p id="dash-ord-text">Canceled</p>
              <p id="dash-ord-text">10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashOrder;
