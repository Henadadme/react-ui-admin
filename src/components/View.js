import React from "react";

class View extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            appName: '',
            URL: '',
            APIKEY: ''
        }
        this.editAppNow = this.editAppNow.bind(this)
        this.delete = this.delete.bind(this)
    }


    editAppNow(e) {
        e.preventDefault()
        localStorage.setItem('edit', this.state.id)
        this.props.history.push('/account/edit')
    }

    delete(e) {


    }


    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="col-lg-12">
                    <div className="grid">
                        <p className="grid-header"> Application</p>
                        <div className="grid-body">
                            <div className="item-wrapper">
                                <div className="row mb-3">
                                    <div className="col-md-8 mx-auto">
                                        {
                                            /*

                                            you set the form values here
                                             */
                                        }
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType12">App Name</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType2"
                                                       name='appName' disabled
                                                       value={this.state.appName}
                                                />
                                            </div>
                                        </div>
                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-3 showcase_text_area">
                                                <label htmlFor="inputType13">Location</label>
                                            </div>
                                            <div className="col-md-9 showcase_content_area">
                                                <input type="text" className="form-control" id="inputType3"
                                                       name='URL' disabled
                                                       value={this.state.URL}
                                                       id="exampleFormControlInput1"/></div>
                                        </div>


                                        <div className="form-group row showcase_row_area">
                                            <div className="col-md-12 showcase_content_area">
                                                <button type="button" className="btn btn-primary"
                                                        onClick={this.editAppNow}
                                                >Edit
                                                </button>
                                                <button type="button" className="btn btn-danger"
                                                        onClick={this.delete}
                                                >Delete
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

export default View;
