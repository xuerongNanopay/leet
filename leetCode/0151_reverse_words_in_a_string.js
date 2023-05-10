var reverseWords = function(s) {

  return s.trim().split(" ").filter(w => w.trim() !== '').reverse().join(" ");

};