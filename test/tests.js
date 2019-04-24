const test = QUnit.test;

test('All incorrect answers is 0', (assert) => {
    //Arrange
    
    const nightActivityAnswer = 'night swimming';
    const runLocationAnswer = 'woods';
    const strangeFoodAnswer = 'dolmas';
    const lookUpAnswer = 'star gazing';
    const breakfastAnswer = 'yogurt parfait';
    const expected = 0;

    // Set up your parameters and expectations
    

    //Act 
    const score = scoreAnswers(nightActivityAnswer, runLocationAnswer, strangeFoodAnswer, lookUpAnswer, breakfastAnswer);

    // Call the function you're testing and set the result to a const

    //Assert
    assert.equal(score, expected);
});