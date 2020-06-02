import React from "react";

class Edit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            organName : '',
            location : ''
        }
        this.editAppNow = this.editAppNow.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }


    editAppNow(e) {
        e.preventDefault()
        //you push the changes
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {
        //here you write your axios call again to set the state of the form values
    }

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="grid">
                        <p className="grid-header">Edit Application</p>
                        <div className="grid-body">
                            <div className="item-wrapper">
                                <div className="row mb-3">
                                    <div className="col-md-8 mx-auto">

                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType12">Name</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType2"
                                                       name='appName'
                                                       onChange={this.handleChange}
                                                       value={this.state.organName}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType13">Location</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType3"
                                                       name='URL'
                                                       value={this.state.location}
                                                       onChange={this.handleChange}
                                                       id="exampleFormControlInput1"/></div>
                                        </div>

                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType1">API KEY</label>
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-12 showcase_content_area">
                                                <button type="submit" className="btn btn-primary"
                                                        onClick={this.editAppNow}
                                                >Update
                                                </button>

                                            </div>

                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Edit;
