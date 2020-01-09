import React, {Component} from "react";

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            name: '',
            job: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name]: value,
        })
    };

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    };

    render() {
        const {name, job} = this.state;

        return (
            <form action="">
                <label htmlFor="name">name</label>
                <input type="text" name="name" id="name" value={name} onChange={this.handleChange}/>
                <label htmlFor="job">job</label>
                <input type="text" name="job" id="job" value={job} onChange={this.handleChange}/>
                <button type="button" onClick={this.submitForm}>submit</button>
            </form>
        )
    }
}

export default Form
