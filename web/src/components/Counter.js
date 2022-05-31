import React, {Component} from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: null,
            disableIncrement: true // React queues state rerenders, so only use this if disabling isn't THAT important
        };

        this.increment = this.increment.bind(this);
    }

    increment() {
        if(this.state.count !== null) {
            this.setState({
                disableIncrement: true
            });
            console.log(`sending request to "${process.env.REACT_APP_URL_API + '/count/1'}"`)
            axios({
                method: 'put',
                baseURL: process.env.REACT_APP_URL_API,
                url: 'count/1',
            }).then((res) => {
                console.log("received: ");
                console.log(JSON.stringify(res, null, 4));
                this.setState({
                    count: res.data.count,
                    disableIncrement: false
                });
            })
            .catch((error) => {
                console.log("unable to fulfill API request. received error:");
                console.log(JSON.stringify(error, null, 4));
                this.setState({
                    disableIncrement: false
                });
            })
        }
    }

    componentDidMount() {
        this.setState({
            disableIncrement: true
        });
        console.log(`sending GET request to "${process.env.REACT_APP_URL_API + '/count/1'}"`)
        axios({
            method: 'get',
            baseURL: process.env.REACT_APP_URL_API,
            url: 'count/1'
        }).then((res) => {
            console.log("received: ");
            console.log(JSON.stringify(res, null, 4));
            this.setState({
                count: res.data.count,
                disableIncrement: false
            });
        })
        .catch((error) => {
            console.log("unable to fulfill API request. received error:");
            console.log(JSON.stringify(error, null, 4));
            this.setState({
                disableIncrement: false
            });
        })
    }

    render() {
        return (
            <div className="counter">
                <span>count: { (this.state.count === null) ? "loading..." : this.state.count }</span>
                <Button onClick={this.increment} disabled={this.state.disableIncrement}>Add 1</Button>
            </div>
        )
    }
}

export default Counter;