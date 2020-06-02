import React from "react";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email : '',
            password : '',
            name : ''
        }
        this.signUp = this.signUp.bind(this);
        this.handleChange = this.handleChange.bind(this)
    }

    signUp(e) {
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
                                                    <input type="text" className="form-control" name='name'
                                                           onChange={this.handleChange} value={this.state.name}
                                                           placeholder="Full Name"/>
                                                </div>
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
                                                        onClick={this.signUp}> Register
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

export default SignUp;
