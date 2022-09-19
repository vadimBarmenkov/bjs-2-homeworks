let phoneAlarm = new AlarmClock();

phoneAlarm.addClock("16:16", () => console.log("Пора вставать"), 1);
phoneAlarm.addClock("16:17", () => {console.log("Давай вставай"); clock.removeClock(2)}, 2);
phoneAlarm.addClock("16:17", () => console.log("Иди умывайся"));

phoneAlarm.addClock("16:17", () => {
    console.log("Go go");
    phoneAlarm.clearAlarms();
    phoneAlarm.printAlarms();
}, 3);

phoneAlarm.addClock("16:17", () => console.log("Пора"), 1);

phoneAlarm.printAlarms();

phoneAlarm.start();
