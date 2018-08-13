// our packages
import Util, {
  getLeagueInfo,
  getResults,
  getSortedResult,
  getGroupedScore,
  getTop5,
} from '../util';
import classicData from './classicData.json';

describe('Classic Util', () => {
  test('should return league info', () => {
    const response = getLeagueInfo(classicData);
    delete response.lastFetched;
    expect(response).toEqual({
      leagueName: 'Test',
      creationDate: '2017-07-12T10:36:17Z',
    });
  });

  test('should return league results', () => {
    const response = getResults(classicData);
    expect(response).toEqual([
      {
        id: 1,
        entry_name: 'Test_1',
        event_total: 70,
        player_name: 'Test 1',
        movement: 'down',
        own_entry: false,
        rank: 1,
        last_rank: 1,
        rank_sort: 1,
        total: 1436,
        entry: 100,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 2,
        entry_name: 'Test_2',
        event_total: 88,
        player_name: 'Test 2',
        movement: 'up',
        own_entry: false,
        rank: 2,
        last_rank: 2,
        rank_sort: 2,
        total: 1436,
        entry: 705721,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 3,
        entry_name: 'Test_3',
        event_total: 78,
        player_name: 'Test 3',
        movement: 'up',
        own_entry: false,
        rank: 3,
        last_rank: 3,
        rank_sort: 3,
        total: 1428,
        entry: 232470,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 4,
        entry_name: 'Test_4',
        event_total: 53,
        player_name: 'Test 4',
        movement: 'down',
        own_entry: false,
        rank: 4,
        last_rank: 4,
        rank_sort: 4,
        total: 1427,
        entry: 641905,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 5,
        entry_name: 'Test_5',
        event_total: 90,
        player_name: 'Test 5',
        movement: 'up',
        own_entry: false,
        rank: 5,
        last_rank: 5,
        rank_sort: 5,
        total: 1423,
        entry: 610872,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 6,
        entry_name: 'Test_6',
        event_total: 65,
        player_name: 'Test 6',
        movement: 'down',
        own_entry: false,
        rank: 6,
        last_rank: 6,
        rank_sort: 6,
        total: 1423,
        entry: 1374,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 7,
        entry_name: 'Test_7',
        event_total: 72,
        player_name: 'Test 7',
        movement: 'same',
        own_entry: false,
        rank: 7,
        last_rank: 7,
        rank_sort: 7,
        total: 1418,
        entry: 21561,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
    ]);
  });

  test('should return sorted Result', () => {
    const response = getSortedResult(getResults(classicData));
    expect(response).toEqual([
      {
        id: 5,
        entry_name: 'Test_5',
        event_total: 90,
        player_name: 'Test 5',
        movement: 'up',
        own_entry: false,
        rank: 5,
        last_rank: 5,
        rank_sort: 5,
        total: 1423,
        entry: 610872,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 2,
        entry_name: 'Test_2',
        event_total: 88,
        player_name: 'Test 2',
        movement: 'up',
        own_entry: false,
        rank: 2,
        last_rank: 2,
        rank_sort: 2,
        total: 1436,
        entry: 705721,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 3,
        entry_name: 'Test_3',
        event_total: 78,
        player_name: 'Test 3',
        movement: 'up',
        own_entry: false,
        rank: 3,
        last_rank: 3,
        rank_sort: 3,
        total: 1428,
        entry: 232470,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 7,
        entry_name: 'Test_7',
        event_total: 72,
        player_name: 'Test 7',
        movement: 'same',
        own_entry: false,
        rank: 7,
        last_rank: 7,
        rank_sort: 7,
        total: 1418,
        entry: 21561,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 1,
        entry_name: 'Test_1',
        event_total: 70,
        player_name: 'Test 1',
        movement: 'down',
        own_entry: false,
        rank: 1,
        last_rank: 1,
        rank_sort: 1,
        total: 1436,
        entry: 100,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 6,
        entry_name: 'Test_6',
        event_total: 65,
        player_name: 'Test 6',
        movement: 'down',
        own_entry: false,
        rank: 6,
        last_rank: 6,
        rank_sort: 6,
        total: 1423,
        entry: 1374,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
      {
        id: 4,
        entry_name: 'Test_4',
        event_total: 53,
        player_name: 'Test 4',
        movement: 'down',
        own_entry: false,
        rank: 4,
        last_rank: 4,
        rank_sort: 4,
        total: 1427,
        entry: 641905,
        league: 1827,
        start_event: 1,
        stop_event: 38,
      },
    ]);
  });

  test('should return grouped score', () => {
    const response = getGroupedScore(classicData);
    expect(response).toEqual({
      '53': [
        {
          id: 4,
          entry_name: 'Test_4',
          event_total: 53,
          player_name: 'Test 4',
          movement: 'down',
          own_entry: false,
          rank: 4,
          last_rank: 4,
          rank_sort: 4,
          total: 1427,
          entry: 641905,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      '65': [
        {
          id: 6,
          entry_name: 'Test_6',
          event_total: 65,
          player_name: 'Test 6',
          movement: 'down',
          own_entry: false,
          rank: 6,
          last_rank: 6,
          rank_sort: 6,
          total: 1423,
          entry: 1374,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      '70': [
        {
          id: 1,
          entry_name: 'Test_1',
          event_total: 70,
          player_name: 'Test 1',
          movement: 'down',
          own_entry: false,
          rank: 1,
          last_rank: 1,
          rank_sort: 1,
          total: 1436,
          entry: 100,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      '72': [
        {
          id: 7,
          entry_name: 'Test_7',
          event_total: 72,
          player_name: 'Test 7',
          movement: 'same',
          own_entry: false,
          rank: 7,
          last_rank: 7,
          rank_sort: 7,
          total: 1418,
          entry: 21561,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      '78': [
        {
          id: 3,
          entry_name: 'Test_3',
          event_total: 78,
          player_name: 'Test 3',
          movement: 'up',
          own_entry: false,
          rank: 3,
          last_rank: 3,
          rank_sort: 3,
          total: 1428,
          entry: 232470,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      '88': [
        {
          id: 2,
          entry_name: 'Test_2',
          event_total: 88,
          player_name: 'Test 2',
          movement: 'up',
          own_entry: false,
          rank: 2,
          last_rank: 2,
          rank_sort: 2,
          total: 1436,
          entry: 705721,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      '90': [
        {
          id: 5,
          entry_name: 'Test_5',
          event_total: 90,
          player_name: 'Test 5',
          movement: 'up',
          own_entry: false,
          rank: 5,
          last_rank: 5,
          rank_sort: 5,
          total: 1423,
          entry: 610872,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
    });
  });

  test('should return top5', () => {
    const response = getTop5(getGroupedScore(classicData));
    expect(response).toEqual([
      [
        {
          id: 5,
          entry_name: 'Test_5',
          event_total: 90,
          player_name: 'Test 5',
          movement: 'up',
          own_entry: false,
          rank: 5,
          last_rank: 5,
          rank_sort: 5,
          total: 1423,
          entry: 610872,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      [
        {
          id: 2,
          entry_name: 'Test_2',
          event_total: 88,
          player_name: 'Test 2',
          movement: 'up',
          own_entry: false,
          rank: 2,
          last_rank: 2,
          rank_sort: 2,
          total: 1436,
          entry: 705721,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      [
        {
          id: 3,
          entry_name: 'Test_3',
          event_total: 78,
          player_name: 'Test 3',
          movement: 'up',
          own_entry: false,
          rank: 3,
          last_rank: 3,
          rank_sort: 3,
          total: 1428,
          entry: 232470,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
      [
        {
          id: 7,
          entry: 21561,
          entry_name: 'Test_7',
          event_total: 72,
          last_rank: 7,
          league: 1827,
          movement: 'same',
          own_entry: false,
          player_name: 'Test 7',
          rank: 7,
          rank_sort: 7,
          start_event: 1,
          stop_event: 38,
          total: 1418,
        },
      ],
      [
        {
          id: 1,
          entry: 100,
          entry_name: 'Test_1',
          event_total: 70,
          last_rank: 1,
          league: 1827,
          movement: 'down',
          own_entry: false,
          player_name: 'Test 1',
          rank: 1,
          rank_sort: 1,
          start_event: 1,
          stop_event: 38,
          total: 1436,
        },
      ],
    ]);
  });

  test('should return classic winners', () => {
    const response = Util.getClassicWinners(classicData);
    expect(response).toEqual([
      [1, 'Test_5', 'Test 5', 90],
      [2, 'Test_2', 'Test 2', 88],
      [3, 'Test_3', 'Test 3', 78],
      [4, 'Test_7', 'Test 7', 72],
      [5, 'Test_1', 'Test 1', 70],
    ]);
  });

  test('should return standings', () => {
    const response = Util.getStandings(classicData);
    delete response.lastFetched;
    expect(response).toEqual({
      leagueName: 'Test',
      creationDate: '2017-07-12T10:36:17Z',
      standings: [
        {
          id: 1,
          entry_name: 'Test_1',
          event_total: 70,
          player_name: 'Test 1',
          movement: 'down',
          own_entry: false,
          rank: 1,
          last_rank: 1,
          rank_sort: 1,
          total: 1436,
          entry: 100,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
        {
          id: 2,
          entry_name: 'Test_2',
          event_total: 88,
          player_name: 'Test 2',
          movement: 'up',
          own_entry: false,
          rank: 2,
          last_rank: 2,
          rank_sort: 2,
          total: 1436,
          entry: 705721,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
        {
          id: 3,
          entry_name: 'Test_3',
          event_total: 78,
          player_name: 'Test 3',
          movement: 'up',
          own_entry: false,
          rank: 3,
          last_rank: 3,
          rank_sort: 3,
          total: 1428,
          entry: 232470,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
        {
          id: 4,
          entry_name: 'Test_4',
          event_total: 53,
          player_name: 'Test 4',
          movement: 'down',
          own_entry: false,
          rank: 4,
          last_rank: 4,
          rank_sort: 4,
          total: 1427,
          entry: 641905,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
        {
          id: 5,
          entry_name: 'Test_5',
          event_total: 90,
          player_name: 'Test 5',
          movement: 'up',
          own_entry: false,
          rank: 5,
          last_rank: 5,
          rank_sort: 5,
          total: 1423,
          entry: 610872,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
        {
          id: 6,
          entry_name: 'Test_6',
          event_total: 65,
          player_name: 'Test 6',
          movement: 'down',
          own_entry: false,
          rank: 6,
          last_rank: 6,
          rank_sort: 6,
          total: 1423,
          entry: 1374,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
        {
          id: 7,
          entry_name: 'Test_7',
          event_total: 72,
          player_name: 'Test 7',
          movement: 'same',
          own_entry: false,
          rank: 7,
          last_rank: 7,
          rank_sort: 7,
          total: 1418,
          entry: 21561,
          league: 1827,
          start_event: 1,
          stop_event: 38,
        },
      ],
    });
  });
});
