var trapFuncs = {};
var fs = require('fs');
trapFuncs.words = fs.readFileSync('vnmwords.txt').toString().split("\n");
trapFuncs.addLink = function(html) {
    var rand = require('random-seed').create(html);
    if (rand(10) === 1) {
        html = "<a href='" + html + "'>" + html + "</a>"; // add link every about ten words.
    }
    if (rand(100) === 1) {
        html += "<br>"; // Add new line every about 100 words
    } else if (rand(200) === 1) {
        var header = rand.intBetween(2, 3);
        html = "</p><h" + header + ">" + html + "</h" + header + "><p>";// add new paragraph every about 60 words
    }
    return html;
}
trapFuncs.generate = function(word){
    var html = "";
    var rand2 = require('random-seed').create(word);
    for (var i = 0 ; i < rand2.intBetween(400,600); i++){
        var word = (rand2(10) === 1) ? this.words[rand2(this.words.length)] + ' ' + this.words[rand2(this.words.length)] : this.words[rand2(this.words.length)];
        html = html + ' ' + this.addLink(word);
    }
    return html;

}
module.exports = trapFuncs;
