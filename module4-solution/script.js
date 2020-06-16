(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  for( var i in names){
    // console.log(names[i]);
    var firstLetter = names[i].charAt(0).toLowerCase();
    // console.log(firstLetter);
    if( firstLetter === 'j' ){
      byeSpeaker.speak(names[i]);
    }
    else{
      helloSpeaker.speak(names[i]);
    }
  }
})();
