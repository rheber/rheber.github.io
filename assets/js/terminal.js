"use strict"

$(function () {
  var welcomeText = 'Welcome to the terminal. Enter "help" for instructions.\n\n';
  var noFocus = false;
  var jqc = $('#console').jqconsole(welcomeText, '>>> ', '... ', noFocus);

  jqc.RegisterShortcut('A', function() {
    jqc.MoveToStart();
  });
  jqc.RegisterShortcut('E', function() {
    jqc.MoveToEnd();
  });

  jqc.SetKeyPressHandler(function(key) {
    return /[\w\s!-\/:-@\[-`{-~]/.test(String.fromCharCode(key.which));
  });

  function out(msg) {
    jqc.Write(msg, 'out');
  }
  function err(msg) {
    jqc.Write(msg, 'err');
  }

  function birthday() {
    out(happyBirthday.command() + '\n');
  }

  function echo(parsed) {
    for(var i=1; i<parsed.length; i++) {
      out(parsed[i] + ' ');
    }
    out('\n');
  }

  function help() {
    out('birthday\tGenerate a birthday message.\n');
    out('echo [ARGS]\tPrint arguments.\n');
    out('help\t\tShow this message.\n');
  }

  var cmds = {
    'birthday': birthday,
    'echo': echo,
    'help': help
  };

  function parse(input) {
    return input.split(/ +/);
  }

  function exec(input) {
    var parsed = parse(input);
    if(parsed.length === 0) {
      return;
    }
    var cmd = parsed[0];
    try {
      cmds[cmd](parsed);
    } catch (e) {
      err('Syntax error\n');
    }
  }

  var repl = function () {
    var historyEnabled = true;
    jqc.Prompt(historyEnabled, function (input) {
      exec(input);
      repl();
    });
  };
  repl();
});
