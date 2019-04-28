import quizScore from '../src/quizScore.js';
const test = QUnit.test;

test('All incorrect answers is 0', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const nightActivityAnswer = 'jjt';
    const runLocationAnswer = 'dsd';
    const strangeFoodAnswer = 'dg';
    const lookUpAnswer = 'ghh';
    const breakfastAnswer = 'boo';
    const expected = 0;

 //Act 
     // Call the function you're testing and set the result to a const
    const score = quizScore(nightActivityAnswer, runLocationAnswer, strangeFoodAnswer, lookUpAnswer, breakfastAnswer);

    //Assert
    assert.equal(score, expected);
});


