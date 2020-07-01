// coding an image slider 

// GOTTA WORK ON THIS

var slideindex = 1;

var colors = ['aquamarine', 'lightyellow', 'peachpuff', 'lightskyblue']


//To start each new event
function emptypage () {
    document.querySelector('#btn1').style.display = 'none';
    document.querySelector('#btn2').style.display = 'none';
    document.querySelector('#sd1').style.display = 'none';
    document.querySelector('#sd2').style.display = 'none';
    document.querySelector('#sd3').style.display = 'none';
    document.querySelector('#sd4').style.display = 'none';
    document.querySelector('#sd5').style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    document.querySelector('h2').style.display = 'none';
    document.querySelector('h3').style.display = 'none';
    document.querySelector('h4').style.display = 'none';
    document.querySelector('h5').style.display = 'none';
    document.querySelector('h6').style.display = 'none';
    document.querySelector('h7').style.display = 'none';
    document.querySelector('h8').style.display = 'none';
    document.querySelector('h9').style.display = 'none';
    document.getElementById('reformed').style.display = 'none';
    document.getElementById('evil').style.display = 'none';
    document.getElementById('loser').style.display = 'none';
    document.getElementById('showdogs').style.display = 'none';
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('trump').style.display = 'none';
    document.getElementById('submit').style.display = 'none';
}

//initial start page
function homepage () {
    emptypage() 
    document.getElementById('loser').style.display = 'block';
    document.getElementById('showdogs').style.display = 'block';  
    document.getElementById('quiz').style.display = 'block';
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

document.getElementById("quiz").addEventListener('click', function(){
    emptypage();
    document.querySelector('h9').style.display = 'block';
    document.getElementById('submit').style.display = 'block';
    
    var questions = [{
    question: 'What was the name of Picasso\'s muse (the daschund)',
    choices: ['Rolf','Lump', 'Alger',],
    correctanswer : 1,
}, {
    question: 'What were daschund\'s bred to hunt' ,
    choices: ['Frogs', 'Foxes', 'Badgers'],
    correctanswer: 3,
}, {
    question: 'Where did daschund races start?',
    choices: ['Germany', 'the UK', 'Australia'],
    correctanswer: 3,
}, { 
    question: 'Sausage dog\'s Wadl adn Hexl caused an international emergancy between germany and which country?' ,
    choices: ['Austria','the UK', 'the USA'],
    correctanswer: 1,   
}]
    function makeQuiz(questions, quizcontainer, resultscontainer, submitbutton) {
        function displayQuestions() {
            
        }
        
        
        
        
        
        
        document.getElementById('submit').addEventListener('click', function() {
            emptypage();
        })
    }
    
    
    
    
})








document.getElementById('submit').addEventListener('click', function() {
    emptypage();
})

//If someone says they don't like sausage dogs
document.getElementById("loser").addEventListener('click', function() {
    emptypage()
    setTimeout(function() {document.querySelector('h2').style.display = 'block';}, 1000)
    setTimeout(function() {document.querySelector('h5').style.display = 'block';}, 2000)
    setTimeout(function() {document.querySelector('h3').style.display = 'block';}, 3000)
    setTimeout(function() {document.querySelector('h6').style.display = 'block';}, 4000)
    setTimeout(function() {document.querySelector('h7').style.display = 'block';}, 5000)
    setTimeout(function() {document.querySelector('h4').style.display = 'block';}, 6000)
    setTimeout(function() {document.getElementById('reformed').style.display = 'block';}, 8000)
    setTimeout(function() {document.getElementById('evil').style.display = 'block';}, 8000)
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
    document.querySelector('h8').style.display = 'block';
    document.getElementById('trump').style.display = 'block';
})


homepage();

