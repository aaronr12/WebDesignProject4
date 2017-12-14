function start(){
    var adjective = document.getElementById("adjective").value;
    var verb = document.getElementById("verb").value;
    var city = document.getElementById("city").value;
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var store = document.getElementById("store").value;
    var car = document.getElementById("car").value;
    var plurNoun = document.getElementById("plurNoun").value;
    var adverb = document.getElementById("adverb").value;
    var toy = document.getElementById("toy").value;
    var animal = document.getElementById("animal").value;
    var verb2 = document.getElementById("verb2").value;
    var number = document.getElementById("number").value;
    var adjective2 = document.getElementById("adjective2").value;
    
    var sentence = "<h2>Once upon a time there were two " + adjective;
    sentence += ' police officers who ' + verb + ' in '+ city + '.';
    sentence += ' There names were ' + name1 + ' and ' + name2 + '.';
    sentence += ' One day, their captain came to them and said, "Someone has stolen from ' + store + '.';
    sentence += ' We want you to figure out who did it."'
    sentence += ' As quickly as they could, they got into their ' + car + ' and headed for the store.'
    sentence += ' As luck would have it, the resident expert on ' + plurNoun + ' was already on the scene.'
    sentence += ' "What have you got?" the two men said ' + adverb + '.';
    sentence += ' The man responded by saying, "I think I know who did this." He picked up a small ' + toy + '.'
    sentence += ' This is the calling card of the ' + animal + ' gang. There seem to be fingerprints on it too.'
    sentence += ' "Run the prints, and we will bring in whoever they match to." Says one of the officers.'
    sentence += ' "We should' + verb2 + '" Said the other officer. Within ' + number + ' minutes the suspect was in custody.'
    sentence += ' "Another ' + adjective2 + ' day" The officers said in unison.'
    document.write(sentence);
    document.write("<br>Reload Page to Start Again");
}