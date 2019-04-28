function quizScore(nightActivityAnswer, runLocationAnswer, strangeFoodAnswer, lookUpAnswer, breakfastAnswer) {
    nightActivityAnswer = nightActivityAnswer.toLowerCase();
    runLocationAnswer = runLocationAnswer.toLowerCase();
    strangeFoodAnswer = strangeFoodAnswer.toLowerCase();
    lookUpAnswer = lookUpAnswer.toLowerCase();
    breakfastAnswer = breakfastAnswer.toLowerCase();

    let score = 0;

    if(nightActivityAnswer === 'swimming') {
        score ++;
    }
    if(runLocationAnswer === 'woods'){
        score ++;
    }
    if(strangeFoodAnswer === 'dolmas'){
        score ++;
    }
    if(lookUpAnswer === 'stargazing'){
        score ++;
    }
    if(breakfastAnswer === 'yogurt'){
        score ++;
    }       
    return score;  
}

export default quizScore;