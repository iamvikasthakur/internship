import React, {Component} from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Delhi from './DelhiComponent';
import Mumbai from './MumbaiComponent';
import Kolkata from './KolkataComponent';
import Banglore from './BangloreComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            index : [1,2,3,4,5,6,7,8]
        }
    }
    render(){
        const delhi = () => {
            return(
                <Delhi index={this.state.index}/>
            );
        }

        const mumbai = () => {
            return(
                <Mumbai index={this.state.index} />
            );
        }

        const kolkata = () => {
            return(
                <Kolkata index={this.state.index}/>
            );
        }

        const banglore = () => {
            return(
                <Banglore index={this.state.index} />
            );
        }
        return(
            <div>
                <Header />
                <Switch location={this.props.location}>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/delhi' component={delhi} />
                    <Route exact path='/mumbai' component={mumbai}/>
                    <Route exact path='/kolkata' component={kolkata}/>
                    <Route exact path='/banglore' component={banglore}/>
                    <Redirect to='/'/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(Main);