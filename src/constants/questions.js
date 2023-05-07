import { TRACKS } from './tracks';
import { GRADES } from './grades';
import { Text } from '../components/common/Text';

export const questions = {
    [TRACKS.UNSPECIFIED] : {
        getQuestion: () => (
            <Text>
                Ты заканчиваешь вуз и <b>ищешь перспективную работу.
                Группа НЛМК — международная металлургическая компания</b> — приглашает
                тебя выбрать область для старта карьеры:
            </Text>
        ),
        nextGrade: GRADES.START,
        answers: [
            {
                track: TRACKS.TRACK_1,
                getText: () => (
                    <Text>
                        <b>
                            Мне нравится технология производства!
                        </b>
                        <br/>
                        Хочу плавить металл и заниматься изготовлением продуктов
                    </Text>
                )
            },
            {
                track: TRACKS.TRACK_2,
                getText: () => (
                    <Text>
                        <b>
                            Оптимизация процессов — это мое!
                        </b>
                        <br/>
                        Хочу разрабатывать методологии
                    </Text>
                )
            },
            {
                track: TRACKS.TRACK_3,
                getText: () => (
                    <Text>
                        <b>
                            Поддерживающие функции и бизнес-{'\n'}направления — звучит круто!
                        </b>
                        <br/>
                        Хочу работать с контрагентамии сопровождать продажи
                    </Text>
                )
            },
        ]
    },
    [TRACKS.TRACK_1]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    Класс, <b>отличный выбор! </b> В каком
                    направлении <b>ты хочешь разбираться?</b>
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Горнодобывающее производство</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Коксохимическое производство</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Аглодоменное производство</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Сталеплавильное производство</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Прокатное производство</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Энергетическое производство</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    getText: () => <Text><b>Ремонты</b></Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
                <Text>
                    Ура, у тебя <b>наивысший квалификационный разряд </b> — ты
                    заслуживаешь максимального уважения. Перед тобой открываются <b> новые
                    возможности, что выберешь?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Заменить Мастера</b> на время отпуска{'\n'}и поработать с бригадой</Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => (
                        <Text>
                            <b>Откликнуться на вакансию ведущего специалиста</b> по внутреннему конкурсу
                        </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text><b>Начать участвовать в проектах</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
                <Text>
                    Поздравляем! Ты <b>успешно проявил управленческие навыки
                    и показал себя компетентным руководителем</b>, умеющим брать ответственность!{'\n'}
                    <b>Готов идти дальше?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Я готов к дальнейшему развитию {'\n'}в производстве</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b> Хочу попробовать себя в проектах</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Начну развиваться в бизнес-{'\n'}направлениях</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>Остаться развивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    <b>А ты не промах!</b> Ты не только любишь управлять процессами,
                    ресурсами и людьми, но и хорошо с этим справляешься!
                    Не каждый <b>дорастает до должности начальника.</b> Что теперь?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Я готов к дальнейшему развитию в производстве</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Хочу попробовать себя в новой{'\n'} должности бизнес-управленца</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>У меня есть все навыки{'\n'} для управления проектами — хочу попробовать свои силы</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.GRADE_4,
                    getText: () => <Text><b>Остаться развивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
                <Text>
                    На вечере встреч выпускников ты явно будешь сидеть во главе стола.
                    <b>Твоим навыкам</b> планирования и принятия решений в условиях
                    неопределенности <b>можно позавидовать. Что дальше?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: GRADES.FINAL,
                    getText: () => <Text><b> Я люблю свою работу и готов брать{'\n'} на себя больше ответственности{'\n'} за процессы</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.FINAL,
                    afterConfirmScreen: 'SCREEN_14',
                    getText: () => (
                        <Text>
                            <b>
                                Я хочу применять свои управленческие навыки на других площадках,
                                в том числе при международной ротации
                            </b>
                        </Text>
                    )
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе
                    очень высок. <b>Выше только звезды :)</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_1,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по текущему направлению</b></Text>
                },
            ]
        }
    },
    [TRACKS.TRACK_2]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    Ты определенно <b>любишь решать нестандартные задачи.</b> {'\n'}
                    Какое направление выберешь?
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Технология и технические функции</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Переработка вторичных ресурсов</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Автоматизация и цифровизация</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Энергетика</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Развитие системы ремонтов</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    getText: () => <Text><b>Исследования и разработки</b></Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!</b> Ты круто «подрос» и стал ведущим специалистом! Но тебе еще точно <b>есть куда расти.</b> Что выберешь?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Начать участвовать в проектах</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Продолжить развитие {'\n'} по текущему вектору</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
                <Text>
                    Ничего себе, ты стал главным специалистом!
                    Эта ступень — очень <b>важный этап в твоей карьере,</b> ведь сейчас
                    ты начинаешь развиваться <b>как руководитель!</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Хочу попробовать себя в проектной деятельности и других задачах</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Класс! Я готов к расширению зон своей ответственности и росту в должности</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>Остаться развивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    Как классно иметь команду! Теперь <b>у тебя
                    получается</b> продвигаться в решении большего количества
                    задач. <b>Куда пойдёшь дальше?</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Меня заинтересовала проектная деятельность, хочу попробовать</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Хочу выйти за рамки деятельности одного отдела и изучить задачи верхнеуровневой структуры</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.GRADE_4,
                    getText: () => <Text><b>Остаться развивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
                <Text>
                    <b>Супер!</b> Быть Начальником управления — <b>большая
                    ответственность</b>. Будешь развиваться дальше?
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.FINAL,
                    getText: () => <Text><b> Я люблю свою работу и готов брать {'\n'}на себя больше ответственности {'\n'}за процессы </b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.FINAL,
                    afterConfirmScreen: 'SCREEN_14',
                    getText: () => <Text><b> Я хочу применять свои навыки в управлении на других площадках, в том числе, при международной ротации </b></Text>
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе
                    очень высок. <b>Выше только звезды :)</b>
                </Text>
            ),
            answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по текущему направлению</b></Text>
                },
            ]
        }

    },
    [TRACKS.TRACK_3]: {
        [GRADES.START]: {
            getQuestion: () => (
                <Text>
                    <b>Прекрасный выбор</b> для старта! {'\n'}
                    В какой сфере <b>тебе было бы интересно применить свои знания?</b>
                </Text>
            ),
            nextGrade: GRADES.GRADE_1,
            answers: [
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Снабжение</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Логистика</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Продажи</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Информационные технологии</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Экология</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Охрана труда и промышленная безопасность</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Управление персоналом и связи с общественностью</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    getText: () => <Text><b>Финансы и экономика</b></Text>
                },
            ]
        },
        [GRADES.GRADE_1]: {
            getQuestion: () => (
                <Text>
                    Ты <b>эффективно влился в проектную команду</b>, классно
                    себя <b>проявил и прокачал много полезных навыков.</b> Каким
                    будет твой <b>следующий шаг?</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => (
                        <Text>
                            <b>
                                Мой интерес к проектной деятельности непрерывно растет.{'\n'}Хочу продолжить
                            </b>
                        </Text>
                    )
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_1,
                    getText: () => <Text><b>Я хочу попробовать себя в роли специалиста</b></Text>
                },
            ]
        },
        [GRADES.GRADE_2]: {
            getQuestion: () => (
                <Text>
                    Теперь ты <b>обладаешь опытом работы с проектами </b> и можешь
                    делиться им со своими коллегами. Под твоим руководством <b>проект
                    стал успешен. {'\n'}Готов ли ты к новому карьерному шагу?</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b> Я готов к большей ответственности и хочу брать больше проектов</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_2,
                    getText: () => <Text><b>Мне хочется попробовать свои силы в бизнес-задачах</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>Остаться развивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_3]: {
            getQuestion: () => (
                <Text>
                    Ты уже <b>участвуешь далеко не в одном проекте</b>, а твоему
                    искусству тайм-менеджмента можно позавидовать. <b>Выбери, что тебе ближе:</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> У меня еще много идей, реализация которых улучшит процессы компании</b></Text>
                },
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_3,
                    getText: () => <Text><b>Я помогу бизнесу и компании своими решениями</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.GRADE_4,
                    getText: () => <Text><b>Остаться развивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.GRADE_4]: {
            getQuestion: () => (
                <Text>
                    <b>Эти овации — для тебя!</b> Твои достижения не остались
                    незамеченными. <b>Тебя хотят перевести на новую
                    должность.</b> Догадываешься, на какую?
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_2,
                    nextGrade: GRADES.GRADE_4,
                    getText: () => <Text><b> Контроль бизнеса — мой конек. Я готов к новым задачам! </b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    afterConfirmGrade: GRADES.FINAL,
                    afterConfirmScreen: 'SCREEN_14',
                    getText: () => <Text><b>Остаться развивать мастерство на этой позиции</b></Text>
                },
            ]
        },
        [GRADES.FINAL]: {
            getQuestion: () => (
                <Text>
                    <b>Поздравляем!{'\n'}</b>
                    Ты добился больших высот. В глазах сотрудников
                    Группы НЛМК <b>ты образец для подражания</b>. Уровень доверия к тебе
                    очень высок. <b>Выше только звезды :)</b>
                </Text>
            ),
                answers: [
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_1',
                    getText: () => <Text><b> Я люблю свою работу! Хочу {'\n'}развить другие площадки Группы</b></Text>
                },
                {
                    track: TRACKS.TRACK_3,
                    nextGrade: null,
                    nextScreen: 'SCREEN_10_2',
                    getText: () => <Text><b>Продолжить развитие{'\n'}по текущему направлению</b></Text>
                },
            ]
        }
    },
}