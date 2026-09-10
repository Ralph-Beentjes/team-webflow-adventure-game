alert('💸 WELCOME TO THE JOB MARKET 🎮\n\n' +
    'Click OK and open the console to play an adventure game \n\n' + 
    'Windows/Linux: Ctrl + Shift + J\n' +
    'Mac: Cmd + Option + J')

console.log('Fred is just done with college and is looking for a job in the IT-sector. After trying again and again, he is still unemployed, but now he has spotted maybe his dream job.\n' +
    'It\'s your job to make sure Fred gets the job. But it will certainly not be easy, as there are many obstacles in his way. If you are sure you can help him, type in play() and press enter')

let liedOnResume = false;
let usedAI = false;
let userChoiceSecondChallenge = '';

function firstChallenge(){
    liedOnResume = false;
    usedAI = false;
    
    let userInput = prompt('Fred needs to write the best possible resume to get the job. What should he do?\n\n' +
        '1. Write a resume that is honest and talks about his lackluster skills and experiences, but with a certain charm and humor\n' +
        '2. Write a resume that is full of exaggerations and not totally true, but makes him look like a perfect candidate\n' +
        '3. Let an AI-agent write the whole resume and hope for the best\n\n' +
        'Choose option 1, 2 or 3'
    )
    
    if (userInput !== null) {
        userInput = userInput.trim();
    }

    if (userInput === null){
        console.log('Fred is too scared to make a decision and does nothing. This way he will never get a job. He can try again however, by typing play() and press enter.');
        return;
    }

    switch(userInput) {
        case '1':
            console.log('Fred decided to be honest. It\'s honorable, but will it deliver him the job? We will see...')
            secondChallenge();
            break
        case '2':
            console.log('Fred decided to exaggerate his skills. Naughty! But it does make him seem like the perfect candidate.')
            liedOnResume = true;
            secondChallenge();
            break
        case '3':
            usedAI = true;
            console.log('Fred decided to let AI do the work for him. He has no idea what he actually submitted, but it looks good.')
            secondChallenge();
            break
        default:
            alert('Please choose a valid option')
            firstChallenge();
    }

}

function secondChallenge() {
    userChoiceSecondChallenge = '';

    let userInput = prompt('Fred has been invited to a call with a recruiter. During the call, the recruiter asks him about his skills and previous experiences. What should Fred do?\n\n' +
        '1. Be honest and talk about how he doesn\'t have much experience, but that he is eager to learn\n' +
        '2. Talk about what a great asset to the company he would be, without going into any details\n' +
        '3. Lie about his experiences and skills and hope the recruiter doesn\'t ask for any proof\n\n' +
        'Choose option 1, 2 or 3'
    )

    if (userInput !== null) {
        userInput = userInput.trim();
    }

    if (userInput === null){
        console.log('Fred has a blackout and says absolutely nothing. That won\'t help him get a job whatsoever. He can try again however, by typing play() and press enter.');
        return;
    }

    switch (userInput) {
        case '1':
            console.log('Fred decided to be honest. He is a great asset to the company and will be a great fit for the team.')
            userChoiceSecondChallenge = '1';
        break;
        case '2':
            console.log('Fred decided to talk about how great he would be for the company. He is a great asset to the company and will be a great fit for the team.')
            userChoiceSecondChallenge = '2';
        break;
        case '3':
            console.log('Fred decided to lie about his experiences and skills. He is a great asset to the company and will be a great fit for the team.')
            userChoiceSecondChallenge = '3';
        break;
    }

    if (liedOnResume == false && userChoiceSecondChallenge == '1') {
        console.log('Fred has been honest all this way and it has paid off. He has been invited to the next round of interviews at the company headquarters.')
        waitingRoom();
    } else if (liedOnResume && userChoiceSecondChallenge == '3') {
        console.log('Fred hasn\'t been honest, but bluffing has worked until now. He has been invited to the next round of interviews at the company headquarters.')
        waitingRoom();
    } else if (usedAI && userChoiceSecondChallenge == '2') {
        console.log('Fred still has no idea what he has "done" in the past, but somehow he is through. He has been invited to the next round of interviews at the company headquarters.')
        waitingRoom();
    } else {
        return "The recruiter saw through Fred's bullshit and he has been rejected. Back to the job market he goes. He can try again  by typing play() and press enter."
    }

}

function waitingRoom() {
    let userInput = prompt('Fred has arrived at the company headquarters and is waiting for his interview in the waiting room. He is q')
    
}

function play() {
    firstChallenge();
}

