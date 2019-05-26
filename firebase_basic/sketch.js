
var intialInput;
var submit;
 var database;
function setup() {
//it is not secure code for our application

  // my web app's Firebase configuration
  
  initialInput = createInput('initials');
  submit = createButton('submit');
  
  submit.mousePressed(submitScore);
  
  var firebaseConfig = {
    apiKey: "AIzaSyDOVa0aqyrHrJsEF2_57OrbXwNyh8eLaE4",
    authDomain: "basic-b0cba.firebaseapp.com",
    databaseURL: "https://basic-b0cba.firebaseio.com",
    projectId: "basic-b0cba",
    storageBucket: "basic-b0cba.appspot.com",
    messagingSenderId: "230699426858",
    appId: "1:230699426858:web:2b58d39546685432"
  };
  
    firebase.initializeApp(firebaseConfig);

 
 
 
 //connect with database
 
	database  = firebase.database();
 //var rootRef = firebase.database().ref();
 //hey i want to access source node in the tree data
 


 	
	
 
}
function submitScore(){
	
	var data = {
		initials: initialInput.value(),
	}
	console.log(data);
	var ref = database.ref('scores');
	ref.push(data);
}
