import React, {useState, useCallback,useEffect,} from 'react';
import {Button, ButtonToolbar, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {connect, PropTypes} from 'cs-web-components-externals';
import {thunkActionCreator, asyncActionCreator} from '../actions/actions';
import { Pie } from 'react-chartjs-2';
import { prefixNS } from '../helpers';

const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

const HelloWorld = ({thunkAction, asyncAction}) => {
    const [counter, setCounter] = useState(42);
    const [inputValue, setInputValue] = useState("");
    const onUpdateValue = useCallback(() => {
        setCounter(counter => counter + 1);
    }, []);

    const onUpdateInput = useCallback((e, data) => {
        setInputValue(e.target.value);
        console.log(21, data);
    }, []);

    useEffect(() => {
        console.log("Mounted");
        return () => {
            console.log("Unmounted");
        }
    }, []);
       
    return (
        <div className={prefixNS("demo-container")}>
            <h1>Hello World! {counter} - {inputValue}</h1>
            <ButtonToolbar>
                <Button onClick={onUpdateValue}>Add 1 to state</Button>
                <Button onClick={thunkAction}>Thunk</Button>
                <Button onClick={asyncAction}>Async</Button>
            </ButtonToolbar>
            <form>
                <FormGroup>
                    <ControlLabel>Text</ControlLabel>
                    <FormControl type="text" placeholder="Enter text"
                        value={inputValue} 
                        onChange={onUpdateInput}
                    />
                </FormGroup>
            </form>
            <Pie data={data} />
        </div>
    );
};

HelloWorld.propTypes = {
    thunkAction: PropTypes.func,
    asyncAction: PropTypes.func
};

function mapStateToProps(state /*, ownProps */) {
    return {
        labels: state[prefixNS("reducer")]
    };
}

function mapDispatchToProps(dispatch) {
    return {
        thunkAction: () => { dispatch(thunkActionCreator()) },
        asyncAction: () => { dispatch(asyncActionCreator()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);
