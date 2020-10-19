import React,{Component} from 'react';

class Default extends Component {
    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <span>the requested URL {this.props.location.pathname} was not found</span>
            </React.Fragment>
        )
    }
}

export default Default;