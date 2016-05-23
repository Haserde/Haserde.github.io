var text1 = ["55 ","12 ","7 ","8 ","100 ","18 ","21 ","40 ","1398 ","5 ","3 ","25 ","35 ","99 ","22 "];
var text2 = [
  "Life Lessons We Learned From",
  "Questions You Might Ask Yourself Before",
  "Things You Should Look Into Before",
  "Activities You Can Do To Improve",
  "Pictures That Show The True Side Of",
  "Most Powerful Moments From",
  "Shows That Have The Most",
  "Signs That Show You're On The Verge Of",
  "Things Your Mother Never Told You About",
  "Reasons We Are Obsessed With",
  "Signs You Might Be Secretly In Love With",
  "Tips To Getting Drunk In Public Without",
  "Public Service Anouncements About Your Addiction To"
  ]; 
var text3 = [
  " Crazed Lunatics",
  " Watching The Lord Of The Rings: The Motion Picture Trilogy (Special Extended Edition)",
  " A Guide Book To Objective C",
  " Cats",
  " Hordes Of Children",
  " Midnight Shopping at Walmart",
  " Donald Trump",
  " YouTube Drama",
  " Conspiracy Theories",
  " Netflix Binge Watching",
  " Golden Girls",
  " Kardashians",
  " Cops Noticing You",
  " Russian Roulette",
  " Drinking Till You Black Out",
  " The Dog Snapchat Filter"
  ];
var index = [];
var article = [];
var img;
var fr = .4;

function setup() {
  createCanvas(1400,630);
  textSize(36);
  fill(51,51,51);
  img = loadImage("buzzfeedBG.png");
  frameRate(fr);
}
function draw(){
  image(img,-100,0);
  newArticle();
}
function newArticle() {
  var r1 = floor(random(text1.length));
  var r2 = floor(random(text2.length));
  var r3 = floor(random(text3.length));
  text(text1[r1]+text2[r2]+text3[r3],120,310,600,150);
}