import React from "react";

class Organizations extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="content-viewport">
                <div className="row">
                    <div className="col-12 py-5">
                        <h4>Dashboard</h4>
                        <p className="text-gray">Welcome aboard, {localStorage.getItem('user')}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3 col-sm-6 col-6 equel-grid">
                        <div className="grid">
                            <div className="grid-body text-gray">
                                <div className="d-flex justify-content-between">
                                    {/*<p>30%</p>*/}
                                    <p>FCMB</p>
                                </div>
                                <p className="text-black">Logins in 30 days</p>
                                <div className="wrapper w-50 mt-4">
                                    <canvas height="45" id="stat-line_1"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Organizations;
