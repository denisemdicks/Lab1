// import quizScore from './quizScore.js';
const submitButton = document.getElementById('submit');
//get all elements by id

const nightSwimming = document.getElementById('night-swimming');
const woods = document.getElementById('woods');
const dolmas = document.getElementById('dolmas');
const stargazing = document.getElementById('stargazing');
const yogurtParfait = document.getElementById('yogurt-parfait');   
const paragraph = document.getElementById('paragraph');
 //add eventListener to button (const submitbutton.eventListener)

 submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const nightSwimmingValue = nightSwimming.value;
    const woodsValue = woods.value;
    const dolmasValue = dolmas.value;
    const stargazingValue = stargazing.value;
    const yogurtParfaitValue = yogurtParfait.value;
    
    console.log(nightSwimmingValue, woodsValue, dolmasValue, stargazingValue, yogurtParfaitValue);

});

