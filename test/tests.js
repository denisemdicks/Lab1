const test = QUnit.test;

function scoreAnswers(nightActivityAnswer, runLocationAnswer, strangeFoodAnswer, lookUpAnswer, breakfastAnswer); {
    nightActivityAnswer = nightActivityAnswer.toUpperCase();
    runLocationAnswer = runLocationAnswer.toUpperCase();
    strangeFoodAnswer = strangeFoodAnswer.toUpperCase();
    lookUpAnswer = lookUpAnswer.toUpperCase();
    breakfastAnswer = breakfastAnswer.toUpperCase();

    let score = 0
}

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

