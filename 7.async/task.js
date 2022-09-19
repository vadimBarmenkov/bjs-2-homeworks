class AlarmClock{
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }

    addClock(time, callback, id){
        if(!id){
            throw new Error("error text");
        }

        if(this.alarmCollection.some((alarm) => alarm.id === id)){
            console.error("такой звонок уже существует");
            return;
        }

        this.alarmCollection.push({time, callback, id});
    }

    removeClock(id){
        const lengthBeforeRemove = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        return this.alarmCollection.length !== lengthBeforeRemove;
    }

    getCurrentFormattedTime(){
        const currentDate = new Date();
        const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
        const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
        return `${hours}:${minutes}`;
    }

    start(){
        if(this.timerId){
            return
        }

        const checkClock = (alarm) => {
            if(alarm.time === this.getCurrentFormattedTime()){
                alarm.callback();
            }
        }

        this.timerId = setInterval(() => {
            this.alarmCollection.forEach(alarm => {checkClock(alarm)})
        }, 2000);
    }

    stop(){
        if(this.timerId){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        this.alarmCollection.forEach(element => console.log("id: " + element.id + "time: " + element.time + "\n"));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }

}
