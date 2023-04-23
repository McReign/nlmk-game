import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { SCREENS } from '../../../constants/screens';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';

export function Screen23() {
  const { next } = useScreen();
  const {setProgress} = useGameState();

  function handleNext(nextTrack, grade, currentTrack) {
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack) {
      next(SCREENS.SCREEN_5);
      return;
    }
    next(SCREENS[nextTrack][grade]);
  }

  return <QuestionWrapper
      question={questions[TRACKS.TRACK_2][GRADES.GRADE_1]}
      questionNumber={3}
      track={TRACKS.TRACK_2}
      grade={0}
      onChoose={handleNext}
      post={'Ведущий специалист'}
  />
}
