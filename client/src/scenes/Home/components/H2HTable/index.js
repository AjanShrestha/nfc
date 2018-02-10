// npm packages
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {func} from 'prop-types';
import {size} from 'lodash';

// our packages
import LoadingTable from '../../../../components/LoadingTable';
import TableHeading from '../../../../components/TableHeading';
import Table from '../../../../components/Table';
import {fetchH2HStandingsData} from '../../../../services/h2h/actions';
import H2HStandingsPropTypes from './PropTypes';

class H2HStandings extends Component {
  componentDidMount() {
    this.props.fetchH2HStandingsData();
  }

  renderH2HStandings = props => (
    <div>
      <TableHeading {...props} />
      <Table {...props.data} />
    </div>
  );

  render() {
    const {h2hStandingsData} = this.props;
    return size(h2hStandingsData.data) > 0 ? (
      this.renderH2HStandings(h2hStandingsData)
    ) : (
      <LoadingTable title="H2HStandings" />
    );
  }
}
H2HStandings.propTypes = {
  fetchH2HStandingsData: func.isRequired,
  h2hStandingsData: H2HStandingsPropTypes.data,
};

const mapStateToProps = state => ({
  h2hStandingsData: state.H2HStandings,
});

const mapDispatchToProps = dispatch => ({
  fetchH2HStandingsData: () => dispatch(fetchH2HStandingsData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(H2HStandings);
