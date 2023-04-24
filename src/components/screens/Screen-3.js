import styled from '@emotion/styled';
import { InfoPanel } from '../common/InfoPanel';
import { Text } from '../common/Text';
import { Button } from '../common/Button';
import { useGameState } from '../../hooks/useGameState';
import { getCharacterPicture } from '../../utils/getCharacterPicture';
import { useScreen } from '../../hooks/useScreen';
import { SCREENS } from '../../constants/screens';
import { Map } from '../common/Map';

const Wrapper = styled.div`
  background: black;
  height: 100%;
  width: 100%;
  position: relative;
`;

const Info = styled(InfoPanel)`
  margin: 20vh 9px 4.7vh 19px;
  white-space: pre-line;
  padding: 16px;
`;

const ButtonStyled = styled(Button)`
  max-width: 249px;
  margin: 0 26px 0 auto;
`;

const CharacterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 14px;
  height: 64vw;
  max-height: 242px;
  width: 100%;
  overflow: hidden;
`;

const Backdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  opacity: 0.6;
`;

const Content = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;


export const Screen3 = () => {
    const {next} = useScreen();
    const {character, start} = useGameState();
    const picture = getCharacterPicture(character, 'casual', 0);

    function handleNext() {
        next(SCREENS.SCREEN_4)
        start()
    }

    return (
        <Wrapper>
            <Map />
            <Backdrop />
            <Content>
                <Info variant={'light'}>
                    <Text>
                        Сейчас ты будешь <b>перемещаться между разными позициями</b> в компании.{'\n'}
                        Обрати внимание: на карте есть <b> синие объекты — </b>они все сделаны с использованием
                        <b> продукции НЛМК!</b>
                    </Text>
                </Info>
                <ButtonStyled onClick={handleNext}>СТАРТ →</ButtonStyled>
                <CharacterWrapper>
                    <img src={picture} alt={''}/>
                </CharacterWrapper>
            </Content>
        </Wrapper>
    )
}