import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Container} from 'semantic-ui-react';
import { setYahts } from './actions/yahty';
import axios from 'axios';
import { Card} from 'semantic-ui-react'

import Menu from './components/menu';
import YahtCard from './components/yahtCard';

class App extends Component {

  componentWillMount() {
    const { setYahts } = this.props;
    axios.get('/yahts.json').then(({ data }) => {
      setYahts(data);
    });
  }
  render() {
    const { yahts, isReady } = this.props;
    return (
    <Container>
      <Menu />
      <Card.Group itemsPerRow={4}>
        {!isReady
          ? 'Загрузка...'
          : yahts.map((yaht, i) => (<YahtCard key={i}{...yaht}/>
          ))}
      </Card.Group>
      </Container>
     
    )
  }
}


const mapStateToProps = ({ yahts }) => ({
  yahts: yahts.items,
  isReady: yahts.isReady
});
const mapDispatchToProps = dispatch => ({
  setYahts: yahts => dispatch(setYahts(yahts))
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

