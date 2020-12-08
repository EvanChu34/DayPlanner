// Timeblocks go here -->
var DateTime = luxon.DateTime; //--> Luxon's date object
var localTime=DateTime.local(); // --> To get the current time
console.log(localTime.toString()) // --> Returns String ->2020-10-21T03:27:22.247+05:30

var daySlot = [
    {
        hourSlotID = "1",
        timeID= "9",
        plannedEvent="",
    },
    {
        hourSlotID = "2",
        timeID= "10",
        plannedEvent="",
    },
    {
        hourSlotID = "3",
        timeID= "11",
        plannedEvent="",
    },
    {
        hourSlotID = "4",
        timeID= "12",
        plannedEvent="",
    },
    {
        hourSlotID = "5",
        timeID= "1",
        plannedEvent="",
    },
    {
        hourSlotID = "6",
        timeID= "2",
        plannedEvent="",
    },
    {
        hourSlotID= "7",
        timeID= "3",
        plannedEvent="",
    },
    {
        hourSlotID = "8",
        timeID= "4",
        plannedEvent="",
    },
    {
        hourSlotID = "9",
        timeID= "5",
        plannedEvent="",
    }
];

function getCurrentDate(){
    var currentDate = luxon.DateTime.local().toLocaleString(DateTime.DATE_MED)
    console.log(currentDate);
    $("#currentDay").text(currentDate);
}
getCurrentDate();


function saveEvent(){
    localStorage.setItem("daySlot", JSON.stringify("daySlot"));
}

function displayEvent(){

}

function run(){


}

// tomorrow work on functions and also connect the Luxon
// color coded work  --> 
// look on old code for the save button


