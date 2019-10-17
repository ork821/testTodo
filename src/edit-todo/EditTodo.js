import React, {Component} from 'react';

class EditTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input_text : this.props.input
        }
    }


    render() {
        return (
            <form onSubmit={(e) => {
                this.props.editItem(e, this.state.input_text)
                this.setState({
                    input_text : ''
                })
            }}>
                <label>
                    Edit:
                    <input type="text"
                           name="name"
                           value={this.state.input_text}
                           onChange={(e) => {
                               this.setState({
                                   input_text : e.target.value
                               })
                           }}
                    />
                </label>
                <input type="submit" value="Отправить"/>
            </form>
        );
    }

};

export default EditTodo;
