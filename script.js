// Timeblocks go here -->


var daySlot = [
    {
        hourSlotID = "1",
        timeID= "9",
        
    },
    {
        hourSlotID = "2",
        timeID= "10",

    },
    {
        hourSlotID = 3,
        timeID= "11",

    },
    {
        hourSlotID = "4",
        timeID= "12",

    },
    {
        hourSlotID = "5",
        timeID= "1",
    },
    {
        hourSlotID = "6",
        timeID= "2",
    },
    {
        hourSlotID= "7",
        timeID= "3",
    },
    {
        hourSlotID = "8",
        timeID= "4",
    },
    {
        hourSlotID = "9",
        timeID= "5",
    }
];

DateTime.local().setZone('America/New_York').minus({ weeks: 1 }).endOf('day').toISO();

function getCurrentDate(){

    var currentDate = DateTime.local().toLocaleString(DateTime.DATETIME_SHORT);
    
}

// standard work hours 9-5 --> 

// color coded work  --> 

// type and save button --> 

// refresh but it saves JSON Local --> 