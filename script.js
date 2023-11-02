let body = document.querySelector("body");
let root = document.querySelector("#root");


root.style.width = "100vw";
root.style.height = "100vh";
root.style.display = "flex";
root.style.alignItems = "center";
root.style.justifyContent = "center";

// let bacim = document.createElement("body");
// bacim.style.maxWidth = "1450px"
// bacim.style.height = "1040px"
body.style.backgroundImage = "url(bg.png)";
body.style.backgroundRepeat = "no-repeat";
body.style.backgroundSize ="cover";
// root.appendChild(bacim);


let bac1 = document.createElement("div");
bac1.style.width = "1045px";
bac1.style.height = "507px";
bac1.style.borderRadius = "36px";
bac1.style.backgroundColor = "rgba(0, 161, 255, 0.40)";
bac1.style.margin = "0 auto";
bac1.style.boxShadow = "24px 26px 4px -11px rgba(0, 0, 0, 0.50)";
bac1.style.backdropFilter = "blur(10px)";
root.appendChild(bac1);




let secund = document.createElement("h3");
secund.textContent = "Secundomer";
secund.style.color = "#A5DEFF";
secund.style.textAlign = "center";
secund.style.fontSize = "32px";
secund.style.fontFamily = "Inter";
secund.style.letterSpacing = "6.4px";
secund.style.padding = "15px";
bac1.appendChild(secund);



let horsMinut = document.createElement("div");
horsMinut.style.display = "flex";
horsMinut.style.justifyContent = "space-between";
horsMinut.style.padding = "0 50px 0 50px"
bac1.appendChild(horsMinut);

let hours = document.createElement("div");
hours.style.width = "199px";
hours.style.height = "199px";
hours.style.backgroundColor = "#080F1A";
hours.style.borderRadius = "22px";
horsMinut.appendChild(hours);



let hoursTittle = document.createElement("h1");
hoursTittle.textContent = "360";
hoursTittle.style.textAlign = "center";
hoursTittle.style.fontSize = "64px";
hoursTittle.style.color = "#FFF";
hoursTittle.style.fontFamily = "Inter";
hoursTittle.style.letterSpacing = "2px";
hours.appendChild(hoursTittle);

let hoursTittle2 = document.createElement("p");
hoursTittle2.textContent = "Hours";
hoursTittle2.style.textAlign = "center";
hoursTittle2.style.fontSize = "16px";
hoursTittle2.style.color = "#A5DEFF";
hoursTittle2.style.fontFamily = "Inter";
hoursTittle2.style.marginTop = "-20px";
hours.appendChild(hoursTittle2);

let minutes = document.createElement("div");
minutes.style.width = "199px";
minutes.style.height = "199px";
minutes.style.backgroundColor = "#080F1A";
minutes.style.borderRadius = "22px";
horsMinut.appendChild(minutes);

let minutesTittle = document.createElement("h1");
minutesTittle.textContent = "24";
minutesTittle.style.textAlign = "center";
minutesTittle.style.fontSize = "64px";
minutesTittle.style.color = "#FFF";
minutesTittle.style.fontFamily = "Inter";
minutesTittle.style.letterSpacing = "2px";
minutes.appendChild(minutesTittle);

let minutesTittle2 = document.createElement("p");
minutesTittle2.textContent = "Minutes";
minutesTittle2.style.textAlign = "center";
minutesTittle2.style.fontSize = "16px";
minutesTittle2.style.color = "#A5DEFF";
minutesTittle2.style.fontFamily = "Inter";
minutesTittle2.style.marginTop = "-20px";
minutes.appendChild(minutesTittle2);


let sekonds = document.createElement("div");
sekonds.style.width = "199px";
sekonds.style.height = "199px";
sekonds.style.backgroundColor = "#080F1A";
sekonds.style.borderRadius = "22px";
horsMinut.appendChild(sekonds);

let sekondsTittle = document.createElement("h1");
sekondsTittle.textContent = "60";
sekondsTittle.style.textAlign = "center";
sekondsTittle.style.fontSize = "64px";
sekondsTittle.style.color = "#FFF";
sekondsTittle.style.fontFamily = "Inter";
sekondsTittle.style.letterSpacing = "2px";
sekonds.appendChild(sekondsTittle);

let sekondsTittle2 = document.createElement("p");
sekondsTittle2.textContent = "Seconds";
sekondsTittle2.style.textAlign = "center";
sekondsTittle2.style.fontSize = "16px";
sekondsTittle2.style.color = "#A5DEFF";
sekondsTittle2.style.fontFamily = "Inter";
sekondsTittle2.style.marginTop = "-20px";
sekonds.appendChild(sekondsTittle2);


let milsekonds = document.createElement("div");
milsekonds.style.width = "199px";
milsekonds.style.height = "199px";
milsekonds.style.backgroundColor = "#080F1A";
milsekonds.style.borderRadius = "22px";
horsMinut.appendChild(milsekonds);

let milsekondsTittle = document.createElement("h1");
milsekondsTittle.textContent = "60";
milsekondsTittle.style.textAlign = "center";
milsekondsTittle.style.fontSize = "64px";
milsekondsTittle.style.color = "#FFF";
milsekondsTittle.style.fontFamily = "Inter";
milsekondsTittle.style.letterSpacing = "2px";
milsekonds.appendChild(milsekondsTittle);

let milsekondsTittle2 = document.createElement("p");
milsekondsTittle2.textContent = "Milliseconds";
milsekondsTittle2.style.textAlign = "center";
milsekondsTittle2.style.fontSize = "16px";
milsekondsTittle2.style.color = "#A5DEFF";
milsekondsTittle2.style.fontFamily = "Inter";
milsekondsTittle2.style.marginTop = "-20px";
milsekonds.appendChild(milsekondsTittle2);


let startPauza = document.createElement("div");
startPauza.style.marginTop = "80px";
startPauza.style.display = "flex";
startPauza.style.justifyContent = "center";
startPauza.style.gap = "40px";


bac1.appendChild(startPauza);

let btnStart = document.createElement("button");
btnStart.textContent = "Start"
btnStart.style.fontSize = "32px"
btnStart.style.color = "#FFF"
btnStart.style.width = "185px";
btnStart.style.height = "61px";
btnStart.style.backgroundColor = "#080F1A";
btnStart.style.borderRadius = "13px";
startPauza.appendChild(btnStart);


let btnPause = document.createElement("button");
btnPause.textContent = "Pause"
btnPause.style.fontSize = "32px"
btnPause.style.color = "#FFF"
btnPause.style.width = "185px";
btnPause.style.height = "61px";
btnPause.style.backgroundColor = "#080F1A";
btnPause.style.borderRadius = "13px";
startPauza.appendChild(btnPause);


let btnReset = document.createElement("button");
btnReset.textContent = "Reset"
btnReset.style.fontSize = "32px"
btnReset.style.color = "#FFF"
btnReset.style.width = "185px";
btnReset.style.height = "61px";
btnReset.style.backgroundColor = "#080F1A";
btnReset.style.borderRadius = "13px";
startPauza.appendChild(btnReset);




