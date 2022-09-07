class AlarmClock{
    constructor() {
        alarmCollection: [],
        timerId
    }

    addClock(time, funcType, identifier){
        this.alarmCollection.push( {time: time, funcType: funcType, identifier: identifier} );
    }


    getCurrentFormattedTime(){
        var date = new Date().now();
        return date;
    }

    removeClock(timerId){

    }

    start(){

    }

    stop(){

    }

    printAlarms(){
        this.alarmCollection.forEach(element => console.log(element));
    }


}
