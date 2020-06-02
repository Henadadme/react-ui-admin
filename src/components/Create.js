import React from "react";

class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appName: '',
            URL: ''
        }
        this.createApp = this.createApp.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }



    createApp(e) {
        e.preventDefault()

    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="grid">
                        <p className="grid-header">New Application</p>
                        <div className="grid-body">
                            <div className="item-wrapper">
                                <div className="row mb-3">
                                    <div className="col-md-8 mx-auto">

                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType12">App Name</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType2"
                                                       name='appName'
                                                       onChange={this.handleChange} value={this.state.appName}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType13">Redirect URL</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType3"
                                                       name='URL'
                                                       onChange={this.handleChange} value={this.state.URL}
                                                       id="exampleFormControlInput1" placeholder="Redirect Url"/></div>
                                        </div>


                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-12 showcase_content_area">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={this.createApp}
                                                >Submit
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

export default Create;
