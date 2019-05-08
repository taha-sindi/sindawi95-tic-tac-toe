//=============variable================
let player =[]; 
let turnOf = "X"; 
let result = turnOf;
//=============variable================

//===============click=================
const box = function (event){
result = turnOf;
$(event.target).off("click")
$(event.target).text(turnOf)
//===============click=================

//===============turnOf================
if (turnOf === "X" ) {
$(event.target).addClass('x-token');
turnOf = "O";}
//================XOXOX================
else if( turnOf === "O") {
$(event.target).addClass('o-token');
turnOf = "X";}
player[$(event.target).attr('id')]
= $(event.target).text()
//===============turnOf================

//==============function===============
setTimeout(test, 300);}
$(".square").on("click", box)
const test = function () {
//==============function===============

//=============horizontal==============
for (let i = 0; i < 7; i += 3) {
if (player[i] === player[i+1] && player[i] === player[i+2] && player[i+2] ) {
alert("Player " + result +  " Win!!!");
$('.square').off('click') }}
//=============horizontal==============

//==============vertical===============
for (i=0;i<3;i+=1){
if (player[i] === player[i+3] && player[i] === player[i+6] && player[i+6] ) {
alert("Player " + result +  " Win!!!");
$('.square').off('click') }}
//==============vertical===============

//=============diagonal\===============
if (player[0] === player[4] && player[4] === player[8] && player[4]) {
alert("Player " + result +  " Win!!!");
$('.square').off('click') } 
//=============diagonal\===============

//=============diagonal/===============
if (player[2] === player[4] && player[4] === player[6] && player[4]) {
alert("Player " + result +  " Win!!!");
$('.square').off('click') }
//=============diagonal/===============

//================Tie==================
else if (player[0] && player[1] && player[2] && player[3] && player[4] && player[5] && player[6] && player[7] && player[8]) {
alert("Tie!!!"); 
$('.square').off('click')  }}
//================Tie================== 

//===============reset==================
$('#reset').click(reset);
function reset (){  player =[]; turnOf = "X"; 
$(".square").text("");
$('.square').off('click') 
$(".square").on("click", box) }
//===============reset==================