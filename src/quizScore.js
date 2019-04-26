function quizScore(nightActivityAnswer, runLocationAnswer, strangeFoodAnswer, lookUpAnswer, breakfastAnswer) {
    nightActivityAnswer = nightActivityAnswer.toUpperCase();
    runLocationAnswer = runLocationAnswer.toUpperCase();
    strangeFoodAnswer = strangeFoodAnswer.toUpperCase();
    lookUpAnswer = lookUpAnswer.toUpperCase();
    breakfastAnswer = breakfastAnswer.toUpperCase();

    let score = 0;

    if(nightActivityAnswer === 'night swimming') {
        score ++;
    }
    if(runLocationAnswer === 'woods'){
        score ++;
    }
    if(strangeFoodAnswer === 'dolmas'){
        score ++;
    }
    if(lookUpAnswer === 'star gazing'){
        score ++;
    }
    if(breakfastAnswer === 'yogurt-parfait'){
        score ++;
    }       
        
}

export default quizScore;