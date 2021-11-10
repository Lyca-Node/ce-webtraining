import React, {useEffect, useRef} from 'react';
import {ReactRedux} from 'cs-web-components-externals';
import {getAppSetup} from 'cs-web-components-base';

import { getChartData } from '../selectors';
import { fetchChartData } from '../actions';

const Chart = () => {
    const canvas = useRef();
    const dispatch = ReactRedux.useDispatch();
    const chartData = ReactRedux.useSelector(getChartData);

    useEffect(() => {
        dispatch(fetchChartData());
    }, []);

    useEffect(() => {
        if(!chartData.isEmpty()) {
            var ctx = canvas.current.getContext('2d');
            const currentUser = getAppSetup().getIn(["tr-webapp-newapp", "current_user"]);
            const chart = new window.Chart(ctx, {
                type: 'bar',
                data: {
                    labels: chartData.getIn(["data", "users"])
                                     .map(x=>x.get("name"))
                                     .toJS(),
                    datasets: [{
                        label: '# of Documents',
                        data: chartData.getIn(["data", "doc_count"]).toJS(),
                        backgroundColor: chartData.getIn(["data", "users"])
                                         .map(x=> x.get("persno") === currentUser ?
                                                  'rgba(54, 162, 235, 0.2)' : 'rgba(200, 200, 200, 0.2)')
                                        .toJS(),
                        borderColor: chartData.getIn(["data", "users"])
                        .map(x=> x.get("persno") === currentUser ?
                                 'rgba(54, 162, 235, 1)' : 'rgba(200, 200, 200, 1)')
                       .toJS(),
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
            return () => {
                chart.destroy();
            }
        }
    }, [chartData]);
    return (
        <div className="chart-container" style={{position: "relative", height:"40vh", width:"80vw"}}>
            <canvas id="myChart" width="400" height="400" ref={canvas} />
        </div>
    );
}


export default Chart;