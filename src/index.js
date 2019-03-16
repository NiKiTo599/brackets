module.exports = function check(str, bracketsConfig) {
  var testStr = str.split('');
  for (i = 0; i < bracketsConfig.length; i++) {
    var count = testStr.length;
    for (j = 0; j < testStr.length; j++) {
      if (testStr[j] == bracketsConfig[i][0] && testStr[j+1] == bracketsConfig[i][1]) {
        testStr.splice(j,2);
        j = -1;
      }
    }
    if (testStr.length < count) {
      i = -1;
    }
  }
  return !testStr.length;
}
