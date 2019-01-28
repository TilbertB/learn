import React, { Component } from 'react'
import DatePicker from 'react-date-picker';
//BOOTSTRAP
import Form from 'react-bootstrap/Form';


export default class Step1 extends Component {
    state = {
        date: new Date(),
      }
    
    onChange = date => this.setState({ date })

    render() {
        return (
            <div>
                <h2>Promise</h2>
                    <Form>
                        <Form.Label>Start Date</Form.Label>
                        <DatePicker
                            onChange={this.onChange}
                            value={this.state.date}
                        />
                        <Form.Label>Time</Form.Label>
                    </Form>
            </div>
        )
    }
}
