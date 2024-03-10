function TemplateProcessor(template) {
    this.template = template;
}
TemplateProcessor.prototype.fillIn = function (dictionary) {
    var res = this.template;
    var re = /{{[^{]*}}/g;
    var match = this.template.match(re);
    var pre, key, after;
    for (var i = 0; i < match.length; i++) {
        pre = match[i];
        key = pre.replace("{{", "");
        key = key.replace("}}", "");
        after = dictionary[key] || '';
        // if (after === undefined) {
        // 	after = '';
        // }

        res = res.replace(pre, after);
    }
    return res;
}
var template = "My favorite month is {{month}} but not the day {{day}} or the year {{year}}";
var dateTemplate = new TemplateProcessor(template);

var dictionary = { month: "July", day: "1", year: "2016" };
var str = dateTemplate.fillIn(dictionary);

console.log(str);

// Case: property doesn't exist in dictionary
var dictionary2 = { day: "1", year: "2016" };
var str = dateTemplate.fillIn(dictionary2);

console.log(str);