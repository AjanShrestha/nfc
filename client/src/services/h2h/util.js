// npm packages
import {flow, groupBy, orderBy} from 'lodash';

const getResults = h2hResponse => h2hResponse.matches_this.results;
const getHomeIndividualResult = result => ({
  event_total: result.entry_1_points,
  entry_name: result.entry_1_name,
  player_name: result.entry_1_player_name,
});
const getAwayIndividualResult = result => ({
  event_total: result.entry_2_points,
  entry_name: result.entry_2_name,
  player_name: result.entry_2_player_name,
});
const getWeekResults = results =>
  results.reduce(
    (weekResults, item) => [
      ...weekResults,
      getHomeIndividualResult(item),
      getAwayIndividualResult(item),
    ],
    []
  );
const getSortedResult = weekResults =>
  orderBy(weekResults, 'event_total', 'desc');
const groupScore = sortedResult => groupBy(sortedResult, 'event_total');
const getGroupedScore = flow(
  getResults,
  getWeekResults,
  getSortedResult,
  groupScore
);
const getTop = grouped => {
  const topScore = Object.keys(grouped).slice(-1)[0];
  return grouped[topScore];
};

const getDivisionsStandings = h2hAllDivisionsData =>
  h2hAllDivisionsData.reduce(
    (divisionStandings, h2hDivisionData) => {
      const temp = {};
      temp.leagueNames = [
        ...divisionStandings.leagueNames,
        h2hDivisionData.league.name,
      ];
      temp.standings = [
        ...divisionStandings.standings,
        h2hDivisionData.standings.results,
      ];
      return temp;
    },
    {leagueNames: [], standings: []}
  );

const makePath = text =>
  text
    .split(' ')
    .join('')
    .toLowerCase();

const getH2HWinners = h2hAllDivisionsData => {
  const result = h2hAllDivisionsData.reduce((winners, h2hDivisionData) => {
    const division = h2hDivisionData.league.name;
    const divisionWinners = getTop(getGroupedScore({...h2hDivisionData}));
    return winners.concat(
      divisionWinners.map(winner => [
        division,
        winner.entry_name,
        winner.player_name,
        winner.event_total,
      ])
    );
  }, []);
  return result;
};
const getH2HStandings = h2hStandings => ({
  lastFetched: new Date().toISOString(),
  ...getDivisionsStandings(h2hStandings),
});
const getLinks = leagueNames =>
  leagueNames.map(leagueName => ({
    path: makePath(leagueName),
    text: leagueName,
  }));

export default {getH2HWinners, getH2HStandings, getLinks};
