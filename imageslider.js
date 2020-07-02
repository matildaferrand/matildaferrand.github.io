// coding an image slider 

var slideindex = 1;

//Change colors of the insults
var colors = ['aquamarine', 'lightyellow', 'peachpuff', 'lightskyblue',]

//To start each new event
function emptypage () {
    document.querySelector('#btn1').style.display = 'none';
    document.querySelector('#btn2').style.display = 'none';
    document.querySelector('#sd1').style.display = 'none';
    document.querySelector('#sd2').style.display = 'none';
    document.querySelector('#sd3').style.display = 'none';
    document.querySelector('#sd4').style.display = 'none';
    document.querySelector('#sd5').style.display = 'none';
    document.querySelector('#sd6').style.display = 'none';
    document.querySelector('#sd7').style.display = 'none';
    document.querySelector('#sd8').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('#h2').style.display = 'none';
    document.querySelector('#h3').style.display = 'none';
    document.querySelector('#h4').style.display = 'none';
    document.querySelector('#h5').style.display = 'none';
    document.querySelector('#h6').style.display = 'none';
    document.querySelector('#h7').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('h3').style.display = 'none';
    document.getElementById('reformed').style.display = 'none';
    document.getElementById('evil').style.display = 'none';
    document.getElementById('loser').style.display = 'none';
    document.getElementById('showdogs').style.display = 'none';
    document.getElementById('questions').style.display = 'none';
    document.getElementById('trump').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
}

//initial start page
function homepage () {
    emptypage() 
    document.getElementById('loser').style.display = 'block';
    document.getElementById('showdogs').style.display = 'block';  
    document.getElementById('questions').style.display = 'block';
}

//involved in the sausagedog display
function showdivs(n){
    emptypage();
    document.querySelector('#btn1').style.display = 'block';
    document.querySelector('#btn2').style.display = 'block';
    document.querySelector('h1').style.display = 'block';
    var i;
    var x = document.getElementsByClassName("Sausagedogs");
    if (n > x.length) {slideindex = 1}
    if (n < 1) {slideindex = x.length}
    for (i = 0;i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideindex - 1].style.display = "block";
}

//involved in the sausagedog display
function plusdivs(n) {
    showdivs(slideindex += n);
}

//To see the sausage dog slider
document.getElementById("showdogs").addEventListener('click', function(){
    emptypage()
    showdivs(slideindex);
})

//To take the sausage dog quiz
document.getElementById("questions").addEventListener('click', function(){
    emptypage();
    document.querySelector('h3').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
    document.getElementById('results').style.display = 'block';
    document.getElementById('quiz').style.display = 'block';
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');

    var questions = [{
        question: 'What was the name of Picasso\'s muse (the daschund)',
        choices: ['Rolf','Lump', 'Alger',],
        correctanswer : 1,
    }, {
        question: 'What were daschund\'s bred to hunt?' ,
        choices: ['Frogs', 'Foxes', 'Badgers'],
        correctanswer: 2,
    }, {
        question: 'Where did daschund races start?',
        choices: ['Germany', 'the UK', 'Australia'],
        correctanswer: 2,
    }, {
        question: 'What do daschund\'s need when going out in the rain?',
        choices: ['They shouldn\'t', 'a jacket', 'rain boots'],
        correctanswer: 1,
    }, { 
        question: 'Sausage dog\'s Wadl and Hexl caused an international emergancy between germany and which country?' ,
        choices: ['Austria','the UK', 'the USA'],
        correctanswer: 0,   
    }]
    
    function makeQuiz(questions, quizcontainer, resultscontainer, submitbutton) {
        function displayQuestions(questions, quizcontainer) {
            var output = [];
            var choices;
            for (var i=0; i < questions.length; i++) {
                choices = [];
                for (letter in questions[i].choices) {
                    choices.push(
                        '<label>'
                            + '<input type="radio" name="question'+ i +'" value="' +letter + '">' 
                            + letter + '. '
                            + questions[i].choices[letter]
                        + '</label>'
                    );
                }
                output.push(
                    '<div class="questions">' + questions[i].question + '</div>'
                    + '<div class="choices">' + choices.join('') + '</div>'
                );
            }
            quizcontainer.innerHTML = output.join('');
        }
        displayQuestions(questions, quizcontainer);
    
        function showResults (questions, quizcontainer, resultscontainer) {
            var answerContainers = quizcontainer.querySelectorAll('.choices');
            var useranswer = '';
            var numcorrect = 0;
            
            for(var i=0; i<questions.length; i++) {
                useranswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
                if (useranswer == questions[i].correctanswer) {
                    numcorrect ++;
                    answerContainers[i].style.color = 'lightgreen';
                } else {
                    answerContainers[i].style.color = 'red';
                }
            }
            resultscontainer.innerHTML = numcorrect + ' out of ' + questions.length;
        }
        document.getElementById('submit').addEventListener('click', function() {
            showResults(questions, quizContainer, resultsContainer);
        })
    }
    makeQuiz(questions, quizContainer, resultsContainer, submitButton);
});

//If someone says they don't like sausage dogs
document.getElementById("loser").addEventListener('click', function() {
    emptypage();
    setTimeout(function() {document.getElementById('h2').style.display = 'block';}, 1000);
    setTimeout(function() {document.getElementById('h5').style.display = 'block';}, 2000);
    setTimeout(function() {document.getElementById('h3').style.display = 'block';}, 3000);
    setTimeout(function() {document.getElementById('h6').style.display = 'block';}, 4000);
    setTimeout(function() {document.getElementById('h7').style.display = 'block';}, 5000);
    setTimeout(function() {document.getElementById('h4').style.display = 'block';}, 6000);
    setTimeout(function() {document.getElementById('reformed').style.display = 'block';}, 8000);
    setTimeout(function() {document.getElementById('evil').style.display = 'block';}, 8000);
    })

//if they change their mind
document.getElementById('reformed').addEventListener('click', function() {
    emptypage();
    showdivs(slideindex);
})

//If they stick to their guns
document.getElementById('evil').addEventListener('click', function() {
    emptypage();
    document.body.style.background = 'black';
    document.querySelector('h2').style.display = 'block';
    document.getElementById('trump').style.display = 'block';
})

homepage();
