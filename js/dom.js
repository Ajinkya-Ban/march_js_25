// const ele = document.all[23];
// console.log(ele);

// const changText = ele.children[0].innerHTML;
// console.log(changText);

// setTimeout(() => {
//   ele.children[0].textContent = "This is python";
// }, 3000);

// setInterval(() => {
//   console.log("I am from JS");
// }, 2000);

// const imgs = document.images;
// console.log(imgs);

// const link1 = document.links;

// console.log(link1[1]);

// setTimeout(() => {
//   link1[1].innerHTML = "About Us";
// }, 3000);

// const frm = document.forms;
// console.log(frm);

// const anc = document.anchors;
// console.log(anc);

// const url = document.URL;
// console.log(url);

// const url1 = document.baseURI;
// console.log(url1);

// const url2 = document.domain;
// console.log(url2);

// const head = document.getElementById("header").innerText;
// console.log(head);
// setTimeout(() => {
//   document.getElementById("header").innerHTML = "<h1>Wipro Pvt Ltd</h1>";
// }, 5000);

// const mainList = document.querySelectorAll(".list")[1].textContent;
// console.log(mainList);

// const menu = document.querySelector("#menu");
// console.log(menu);

// const head = document.getElementById("header").getAttributeNode("class");
// console.log(head);

// setTimeout(() => {
//   document
//     .getElementById("header")
//     .setAttribute("style", "border:10px dotted black");
// }, 2000);

// setTimeout(() => {
//   document.getElementById("header").setAttribute("class", "demo2");
// }, 2000);

// setTimeout(() => {
//   document.getElementById("header").removeAttribute("class", "demo2");
// }, 4000);

// setTimeout(() => {
//   document.getElementById("header").setAttribute("class", "demo");
// }, 4000);

// document.getElementById("header").classList.add("demo", "demo2");

// 1. parentElement / parentNode
// const headr = document.querySelector(".main-con");
// console.log(headr.parentNode);
// console.log("------------------------------------------")
// console.log(headr.parentElement);

// childNode and children
// const headr = document.querySelector("#menu");
// console.log("Children", headr.children);
// console.log("First Child", headr.firstChild);
// console.log("Last Child", headr.lastChild);
// console.log("firstElementChild", headr.firstElementChild);
// console.log("lastElementChild", headr.lastElementChild);
// console.log(headr.childNodes);

// setTimeout(() => {
//   headr.children[0].innerHTML =
//     "<p></p>लॉरेंझो दे मेदिचीचे आजोबा कोसिमो दे मेदिची हे त्यांच्या घराण्यातील फिरेंझेचे पहिले शासक होते. हे बांको दै मेदिची ही बँक चालवीत असत व त्याद्वारे ते युरोपमधील सर्वात धनाढ्य व्यक्तींपैकी एक झाले होते. त्याचवेळी त्यांनी फिरेंझेच्या राजकारणावर पकड बसवली. सत्तेवर असताना त्यांनी फिरेंझेच्या जनतेसाठीच्या सरकारी कामांवर आणि तेथे कलाप्रसार करण्यावर मुबलक पैसा खर्च केला. लॉरेंझोचे वडील पिएरो दि कोसिमो दे मेदिची यांनीही अनेक कलांना आश्रय दिला तर त्याचे काका जियोव्हानी दि कोसिमो दे मेदिची यांनी परंपरागत व्यवसाय चालविला. लॉरेंझोची आई लुक्रेझिया तोर्नाबुओनी ही कवयत्री होती व फिरेंझेच्या प्लॅटोनिक अकादमीतील सदस्यांशी ती ओळख ठेवून होती. लॉरेंझोच्या वडील आणि काकांच्या मृत्युपश्चात ती लॉरेंझोची मुख्य सल्लागार झाली.</p>";
// }, 3000);

// const headr = document.querySelector(".main-con");
// console.log(headr.nextSibling);
// console.log(headr.nextElementSibling.children[0]);
// console.log(headr.previousElementSibling);

// setTimeout(() => {
//   headr.nextElementSibling.children[0].style.backgroundColor = "red";
// }, 3000);
