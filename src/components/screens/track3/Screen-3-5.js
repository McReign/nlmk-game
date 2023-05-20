import React from 'react';
import { SCREENS } from '../../../constants/screens';
import { QuestionWrapper } from '../../common/QuestionWrapper';
import { questions } from '../../../constants/questions';
import { TRACKS } from '../../../constants/tracks';
import { GRADES } from '../../../constants/grades';
import { useScreen } from '../../../hooks/useScreen';
import { useGameState } from '../../../hooks/useGameState';

export const Screen35 = () => {
    const { next } = useScreen();
    const {finishConfirmed, setProgress} = useGameState();
    function handleNext(nextTrack, grade, currentTrack) {
        if (!grade) {
            if (!finishConfirmed) {
                next(SCREENS.SCREEN_8);
            } else {
                next(SCREENS.SCREEN_9);
            }
            return;
        }
        setProgress(nextTrack, grade);
        if (nextTrack !== currentTrack) {
            next(SCREENS.SCREEN_5);
            return;
        }
        next(SCREENS.SCREEN_16);
    }

    return (
        <QuestionWrapper
            question={questions[TRACKS.TRACK_3][GRADES.GRADE_3]}
            questionNumber={5}
            track={TRACKS.TRACK_3}
            grade={2}
            onChoose={handleNext}
            post={'Начальник отдела'}
        />
    )
}