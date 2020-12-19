import React, { Component } from 'react';
import { connect } from 'react-redux';


class ActiveCity extends Component {
  componentWillMount() {
    console.log(this.props.city);
  }

  render() {
    return (
      <div className="active-city">
        <h1>{this.props.city.name}</h1>
        <p>{this.props.city.address}</p>
        <img src={`https://kitt.lewagon.com/placeholder/cities/${this.props.city.slug}`} alt={this.props.city.name}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    city: state.activeCity
  };
}

export default connect(mapStateToProps, null)(ActiveCity);

