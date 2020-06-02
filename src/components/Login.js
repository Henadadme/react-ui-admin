import React from "react";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : ''
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    login(e) {
        e.preventDefault();
    }

    componentDidMount() {

    }


    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div>
                <div className="authentication-theme auth-style_1">
                    <div className="row">
                        <div className="col-lg-5 col-md-7 col-sm-9 col-11 mx-auto">
                            <div className="grid">
                                <div className="grid-body">
                                    <div className="row">
                                        <div className="col-lg-7 col-md-8 col-sm-9 col-12 mx-auto form-wrapper">

                                            <form action="#">
                                                <div className="form-group input-rounded">
                                                    <input type="email" className="form-control" name='email'
                                                           onChange={this.handleChange} value={this.state.email}
                                                           placeholder="Email"/>
                                                </div>

                                                <div className="form-group input-rounded">
                                                    <input type="password" className="form-control" name='password'
                                                           onChange={this.handleChange} value={this.state.password}
                                                           placeholder="Password"/>
                                                </div>
                                                <button type="submit" className="btn btn-primary btn-block"
                                                        onClick={this.login}> Login
                                                </button>
                                            </form>
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

export default Login;
