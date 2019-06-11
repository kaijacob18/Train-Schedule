// 1. Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCusDk53A0qls_FJ22qeGV0kN1p46CQ0qU",
    authDomain: "trainschedule-1b32e.firebaseapp.com",
    databaseURL: "https://trainschedule-1b32e.firebaseio.com",
    projectId: "trainschedule-1b32e",
    storageBucket: "trainschedule-1b32e.appspot.com",
    messagingSenderId: "156776516078",
    appId: "1:156776516078:web:a29b44bb7012bfd9"
  };

firebase.initializeApp(firebaseConfig);

var database = firebase.database();

database.ref().on("value", function(snapshot){

    var trains = snapshot.val()
    
    console.log('trains snapshot', trains);
    console.log('trains len', trains.length);
    console.log('trains type', typeof(trains));


    for (var train in trains){
        console.log("trainName",trains[train].name)

        // var singleTrain = trains[train]


        //Object Destructuring
        var {name, destination, firstTrainTime, frequency} = trains[train];

        var newRow = $("<tr>").append(
            // $("<td>").text(trains[train].name),
            // $("<td>").text(trains[train].destination),
            // $("<td>").text(trains[train].firstTrainTime),
            // $("<td>").text(trains[train].frequency)
            // );


            $("<td>").text(name),
            $("<td>").text(destination),
            $("<td>").text(firstTrainTime),
            $("<td>").text(frequency)
            );


            $("#train-table >tbody").append(newRow);


    }



    // var trainName = snapshot.val().trainName
    // var trainDestination = snapshot.val().destination
    // var trainFirstTime = snapshot.val().firstTrainTime
    // var trainFrequency = snapshot.val().frequency

// console.log("trainName",trainName)
    // New Rows
// var newRow = $("<tr>").append(

// $("<td>").text(trainName),
// $("<td>").text(trainDestination),
// $("<td>").text(trainFirstTime),
// $("<td>").text(trainFrequency)
// );

// // Append the new rows to the table
// $("#train-table >tbody").append(newRow);
    
})

// Button for adding Name of Train

$("#add-train-btn").on("click", function(event) {

//   Prevent page from refreshing
    event.preventDefault();

// User Input

var trainName = $("#train-name-input").val().trim();
var trainDestination = $("#destination-input").val().trim();
var trainFirstTime = moment($("#first-train-input").val().trim(),"").format("X"); 
var trainFrequency = $("#frequency-input").val().trim();

// create local "temporary" object for holding train data

var newTrain = {
    name: trainName,
    destination: trainDestination,
    firstTrainTime: trainFirstTime,
    frequency: trainFrequency

};

// Uploads train data to the database
database.ref().push(newTrain);

// View logs in console

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.firstTrainTime);
console.log(newTrain.frequency);

alert("Train successfully added");

// Clear all the text fields

$("#train-name-input").val("");
$("#destination-input").val("");
$("#first-train-input").val("");
$("#frequency-input").val("");

// database.ref().on("value", function(snapshot){

// var trainName = snapshot.val().trainName
// var trainDestination = snapshot.val().destination
// var trainFirstTime = snapshot.val().firstTrainTime
// var trainFrequency = snapshot.val().frequency

// })

// var trainName
// var trainDestination
// var trainFirstTime
// var trainFrequency

// New Rows
// var newRow = $("<tr>").append(

// $("<td>").text(trainName),
// $("<td>").text(trainDestination),
// $("<td>").text(trainFirstTime),
// $("<td>").text(trainFrequency)
// );

// Append the new rows to the table
// $("new-train-table >tbody").append(newRow);

});
