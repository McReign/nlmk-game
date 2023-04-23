import React from 'react';
import { useScreen } from '../../../hooks/useScreen';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { useGameState } from '../../../hooks/useGameState';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';

export function Screen34() {
  const { next } = useScreen();
  const {setProgress} = useGameState();

  function handleNext(nextTrack, grade, currentTrack) {
    if (!grade) {
      next(SCREENS.SCREEN_8);
      return;
    }
    setProgress(nextTrack, grade);
    if (nextTrack !== currentTrack || grade !== GRADES.GRADE_2) {
      next(SCREENS.SCREEN_5);
      return;
    }
    next(SCREENS[nextTrack][grade]);
  }

  return (
      <QuestionWrapper
          question={questions[TRACKS.TRACK_3][GRADES.GRADE_2]}
          questionNumber={4}
          track={TRACKS.TRACK_3}
          grade={1}
          onChoose={handleNext}
      />
  )
}
