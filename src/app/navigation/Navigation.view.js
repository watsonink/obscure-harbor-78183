import React, { PropTypes, Component } from 'react';
import { shouldComponentUpdate as shouldPureComponentUpdate } from 'react-addons-pure-render-mixin';

import styles from './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = shouldPureComponentUpdate.bind(this);
    this.handleChangePageSelected = this.handleChangePageSelected.bind(this);
  }

  handleChangePageSelected(e) {this.props.whatPageSelected(e.target.id);}

  render() {
    const { showNavBar, whatPage } = this.props;
    console.debug(showNavBar, whatPage);
    return showNavBar ?
      <nav className="navbar navbar-default navbar-static-top navbar-inverse">
        <div className="container">
          <ul className="nav navbar-nav">
            <li className={whatPage&&whatPage==0?"active":null}><a id={0} href="/" onClick={this.handleChangePageSelected}><span className="glyphicon glyphicon-home"></span> Homegfg</a></li>
            <li className={whatPage&&whatPage==1?"active":null}><a id={1} href="/test" onClick={this.handleChangePageSelected}><span className="glyphicon glyphicon-record"></span> Test</a></li>
            <li className={whatPage&&whatPage==2?"active":null}><a id={2} href="#" onClick={this.handleChangePageSelected}><span className="glyphicon glyphicon-tasks"></span> ToDos</a></li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><span className="glyphicon glyphicon-info-sign"></span> Getting Started Guides <span className="caret"></span></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="https://dashboard.heroku.com/apps">APPS</a></li>
                  <li><a href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up">Getting Started on Heroku with Node.js</a></li>
                  <li><a href="http://revelry.media/tech-talk/2016/2/15/getting-a-simple-react-app-on-heroku">Getting Started with PHP on Heroku</a></li>
                  <li><a href="https://devcenter.heroku.com/articles/getting-started-with-python">GETTING A SIMPLE REACT APP ON HEROKU</a></li>
                  <li><a href="https://devcenter.heroku.com/articles/heroku-local">Heroku Local</a></li>
                  <li><a href="https://devcenter.heroku.com/articles/using-the-cli">CLI Usage</a></li>
                  <li><a href="https://devcenter.heroku.com/articles/nodejs-support#specifying-a-node-js-version">Specifying a Node.js Version</a></li>
                  <li><a href="https://devcenter.heroku.com/articles/heroku-local#add-a-config-var-to-your-env-file">Add a config var to your .env file</a></li>
                  <li><a href="https://devcenter.heroku.com/articles/config-vars">Configuration and Config Vars</a></li>
                  <li className="divider"></li>
                  <li><a href="https://git-scm.com/download/win">Downloading Git</a></li>
                  <li><a href="https://github.com/coreybutler/nvm-windows">nvm-windows</a></li>
                </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li className="navbar-right"><a href="http://watsonink.com"><span className="glyphicon glyphicon-user"></span> WatsonInk</a></li>
          </ul>
        </div>
      </nav> :
      null;
  }
}

Navigation.propTypes = {
  showNavBar: React.PropTypes.bool.isRequired,
  whatPage: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
  whatPageSelected: React.PropTypes.func
};

export default Navigation;
