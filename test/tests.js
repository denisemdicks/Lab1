import quizScore from '../src/quizScore.js';
const test = QUnit.test;

test('All incorrect answers is 0', (assert) => {
    //Arrange
    // Set up your parameters and expectations

    const nightActivityAnswer = 'night swimming';
    const runLocationAnswer = 'woods';
    const strangeFoodAnswer = 'dolmas';
    const lookUpAnswer = 'star gazing';
    const breakfastAnswer = 'yogurt parfait';
    const expected = 0;

    //Act 
     // Call the function you're testing and set the result to a const
     const score = scoreAnswers(nightActivityAnswer, runLocationAnswer, strangeFoodAnswer, lookUpAnswer, breakfastAnswer);

    //Assert
    assert.equal(score, expected);
});


