// npm packages
const rp = require('request-promise');
const {flow} = require('lodash');

// our packages
const {getH2HURL} = require('../fplUri');
const {getJSONOptions, getLogger} = require('../../util');

const logger = getLogger(__filename);
const getOptions = flow(
  getH2HURL,
  getJSONOptions
);

const fetchH2HStandings = id =>
  rp
    .get(getOptions(id))
    .then(response => response)
    .catch(err => {
      logger.error(err);
      return Error('Issue in H2h Standings.');
    });

module.exports = {fetchH2HStandings};
