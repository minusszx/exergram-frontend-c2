import React from "react";
import "./ChartBox.css";

function ChartBox() {
    return (
        <div className='show-chart-box'>
            <div>
                <h2 style={{fontweight: 400}}>ACTIVITY TRACKING</h2>
                <p>13 March 2023 - 19 March 2023</p>
            </div>
            <div className="chart-box">
                <div>
                    <div className="chart-mock"></div>
                    <p>MON</p>
                </div>
                <div>
                    <div className="chart-mock"></div>
                    <p>TUE</p>
                </div>
                <div>
                    <div className="chart-mock"></div>
                    <p>WED</p>
                </div>
                <div>
                    <div className="chart-mock"></div>
                    <p>THU</p>
                </div>
                <div>
                    <div className="chart-mock"></div>
                    <p>FRI</p>
                </div>
                <div>
                    <div className="chart-mock"></div>
                    <p>SAT</p>
                </div>
                <div>
                    <div className="chart-mock"></div>
                    <p>SUN</p>
                </div>
            </div>
        </div>
    )
};

export default ChartBox;