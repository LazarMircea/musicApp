import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { getSongs } from '../actions/songActions';
import CardList from './CardList';
import './Home.css';

class Home extends Component {
	static propTypes = {
		getSongs: PropTypes.func.isRequired,
		song: PropTypes.object.isRequired,
	};

	componentDidMount() {
    console.log('I am mounted!');
		this.props.getSongs();
  };

	// helper pentru a clasifica melodiile pe gen + nr lor

	render() {
		const { songs } = this.props.song;
		return (
			<>
				<CardList
					items={songs}
				/>
			</>
		)
	}
};

export default connect(
	state => ({ song: state.song }),
	dispatch =>
    bindActionCreators(
      {
        getSongs,
      },
      dispatch,
    ),
	)(Home)