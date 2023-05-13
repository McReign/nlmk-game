import { TRACKS } from './tracks';
import { GRADES } from './grades';

export const PATH_POINTS = {
  START: 'START',
  [TRACKS.TRACK_1]: {
    [GRADES.GRADE_1]: 'TRACK_1.GRADE_1',
    [GRADES.GRADE_2]: 'TRACK_1.GRADE_2',
    [GRADES.GRADE_3]: 'TRACK_1.GRADE_3',
    [GRADES.GRADE_4]: 'TRACK_1.GRADE_4',
    [GRADES.FINAL]: 'TRACK_1.FINAL',
  },
  [TRACKS.TRACK_2]: {
    [GRADES.GRADE_1]: 'TRACK_2.GRADE_1',
    [GRADES.GRADE_2]: 'TRACK_2.GRADE_2',
    [GRADES.GRADE_3]: 'TRACK_2.GRADE_3',
    [GRADES.GRADE_4]: 'TRACK_2.GRADE_4',
    [GRADES.FINAL]: 'TRACK_2.FINAL',
  },
  [TRACKS.TRACK_3]: {
    [GRADES.GRADE_1]: 'TRACK_3.GRADE_1',
    [GRADES.GRADE_2]: 'TRACK_3.GRADE_2',
    [GRADES.GRADE_3]: 'TRACK_3.GRADE_3',
    [GRADES.GRADE_4]: 'TRACK_3.GRADE_4',
    [GRADES.FINAL]: 'TRACK_3.FINAL',
  },
};

export const PATH_POINTS_LIST = [
  PATH_POINTS.START,
  PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_1],
  PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_2],
  PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_3],
  PATH_POINTS[TRACKS.TRACK_1][GRADES.GRADE_4],
  PATH_POINTS[TRACKS.TRACK_1][GRADES.FINAL],
  PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_1],
  PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_2],
  PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_3],
  PATH_POINTS[TRACKS.TRACK_2][GRADES.GRADE_4],
  PATH_POINTS[TRACKS.TRACK_2][GRADES.FINAL],
  PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_1],
  PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_2],
  PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_3],
  PATH_POINTS[TRACKS.TRACK_3][GRADES.GRADE_4],
  PATH_POINTS[TRACKS.TRACK_3][GRADES.FINAL],
];