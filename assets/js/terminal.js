"use strict"

$(function () {
  var jqc = $('#console').jqconsole('Welcome to the terminal.\n', '>>>', '...');
  var restartPrompt = function () {
    var historyEnabled = true;
    jqc.Prompt(historyEnabled, function (input) {
      jqc.Write(input + '\n', 'jqconsole-output');
      restartPrompt();
    });
  };
  restartPrompt();
});
