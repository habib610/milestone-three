// 1st problem feetToMile

function feetToMile(feet){
    if(feet < 0){
        return "feet can not be negative";
    }
    var mile = 0.000189394 * feet;
    mile = mile.toFixed(4);
    return mile;
}
var totalMile = feetToMile(10000);
totalMile = parseFloat(totalMile);
console.log(totalMile);

// 1st problem feetToMile end



// 2nd problem woodCalculator started
function woodCalculator (chair, table, bed){
    if(chair == undefined){
        return "Warning! Enter the number of required chair";
    }
    else if(chair < 0){
        return "Warning! chair can't be negative value. Enter positive value"
    }
    else if(table== undefined){
        return "Warning! Enter the number of required table";
    }
    else if(table < 0){
        return "Warning! table can't be negative value. Enter positive value"
    }
    else if(bed== undefined){
        return "Warning! Enter the number of required bed";
    }
    else if(bed < 0){
        return "Warning! Bed can't be negative value. Enter positive value"
    }

    table = table * 3;
    bed = bed * 5;
    total = chair + table + bed;
    return total;
}
totalWoodForChairTableBed = woodCalculator(12, 34, 23);
console.log(totalWoodForChairTableBed);
// 2nd problem woodCalculator ended




// 3rd problem brickCalculator started 
function brickCalculator(brick){
    var toTen = 0;
    var elevenToTwenty= 0;
    var twentyPlus = 0;
    
    if(brick<0){
        return "Warning! Building couldn't be negative. Use positive value";
    }

    if(brick > 20){
        twentyPlus = brick - 20;
        brick = brick - twentyPlus;
    }
    if(brick > 10){
        elevenToTwenty = brick - 10;
        brick = brick - elevenToTwenty;
    }
    if(brick < 11){
        toTen = brick;
    }
    var totalFeet = (toTen * 15) + (elevenToTwenty * 12) + (twentyPlus * 10);
    var totalBrickInFeet = totalFeet * 1000;
    return totalBrickInFeet;
}
totalBrickNeeds = brickCalculator(60);
console.log(totalBrickNeeds);

// 3rd problem brickCalculator ended



// 4th problem tinyFriend started
function tinyFriend(friendList){
    var min = friendList[0];
    var position = 0;
    for(var i = 0; i < friendList.length; i++){
        if(min.length > friendList[i].length){
            min = friendList[i];
            position = i;
        }
    }
    if(min =='' || min ==' ')
    {
        return "Not acceptable. Use valid character at index " + position;
    }
    else{
        return min;
    }
}

smallerFriendName = tinyFriend(["habib", "rahman", "fb", "Fbi","abdur","rahim", "rahmant","sunny"]);
console.log(smallerFriendName);

// 4th problem tinyFriend ended