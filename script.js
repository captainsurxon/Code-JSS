let body = document.querySelector("body");
let root = document.querySelector("#root");

// bnt.addeventListener("click", function(
//     two.style.display = "block";
//     one.style.display = "none";
// ))

root.style.width = "100vw";
root.style.height = "100vh";
root.style.display = "flex";
root.style.alignItems = "center";
root.style.justifyContent = "center";
root.style.backgroundColor = "#EDF2F8";



let bac1 = document.createElement("div");
bac1.style.width = "730px";
bac1.style.height = "280px";
bac1.style.borderRadius = "10px";
bac1.style.backgroundColor = "#FFF";
bac1.style.boxShadow = "1px 20px 19px 4px #DBE5ED";
bac1.style.margin = "0 auto";
root.appendChild(bac1);

let container = document.createElement("div");
container.style.display = "flex";
container.style.gap = "40px";
bac1.appendChild(container);


let img = document.createElement("div");
img.style.backgroundImage = "url(rec.png)";
img.style.width = "285px";
img.style.height = "280px";
img.style.backgroundRepeat = "no-repeat";
img.style.backgroundSize ="cover";
container.appendChild(img);

let shift = document.createElement("p");
shift.style.width = "346px";
shift.style.height = "84px";
shift.textContent = `Shift the overall look and feel by adding 
these wonderful touches to 
furniture in your home`;
shift.style.color = "#49556B";
shift.style.fontSize = "20px";
shift.style.letterSpacing = "0.42px";
shift.style.lineHeight = "138%";
shift.style.fontFamily = "Manrope";
shift.style.fontWeight = "bold";
shift.style.padding = "10px 59px 0 0";
container.appendChild(shift);

let ever = document.createElement("p");
ever.textContent = `Ever been in a room and felt like something  was missing?
Perhaps it felt slightly bare and uninviting. I’ve got some 
simple tips to help ypu make any room feel complete.`;
ever.style.fontSize = "12.5px";
ever.style.color = "#73859D";
ever.style.fontWeight = "500px";
ever.style.fontHeigth = "20px";
ever.style.letterSpacing = "0.313px";
shift.appendChild(ever);

let myname = document.createElement("div");
myname.style.display = "flex";
myname.style.alignItems = "center";
myname.style.justifyContent = "star";

shift.appendChild(myname);

let myimg = document.createElement("div");
myimg.style.backgroundImage = "url(avatar.png)";
myimg.style.width = "40px";
myimg.style.height = "40px";
myimg.style.backgroundRepeat = "no-repeat";
myimg.style.backgroundSize ="cover";
myname.appendChild(myimg);

let namcap = document.createElement("div");
namcap.textContent = "Sardorjon Khayrullayev";
namcap.style.fontSize = "12.5px";
namcap.style.color = "#49556B";
namcap.style.letterSpacing = "0.188px";
namcap.style.marginLeft = "16px";
myname.appendChild(namcap);

let march = document.createElement("div");
march.textContent = "28 Jun 2020";
march.style.fontSize = "12px";
march.style.color = "#BFC3CC";
march.style.letterSpacing = "0.156px";
namcap.appendChild(march);


let share = document.createElement("div");
share.style.backgroundImage = "url(share.png)";
share.style.width = "32px";
share.style.height = "32px";
share.style.backgroundRepeat = "no-repeat";
share.style.backgroundSize = "cover";
share.style.marginLeft = "110px";
myname.appendChild(share);


