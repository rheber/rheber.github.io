"use strict"

$(function () {
  const welcomeText = 'Rob\'s Shell version 0.1. Enter `help` for basic information.\n';
  const noFocus = false;
  const jqc = $('#console').jqconsole(welcomeText, '\n>>> ', '... ', noFocus);

  const helpText = `
This is the personal website of Robert Heber, software developer by vocation and swing dancer by avocation.

My website is a shell because I am cool.

Below is a list of available commands.
`

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

  function echo(parsed) {
    for(let i=1; i<parsed.length; i++) {
      out(parsed[i] + ' ');
    }
    out('\n');
  }

  function help() {
    out(helpText);
    out('\n');
    out('echo [ARGS]\tPrint arguments.\n');
    out('help\t\tShow this message.\n');
  }

  const cmds = {
    'echo': echo,
    'help': help
  };

  function parse(input) {
    return input.split(/ +/);
  }

  function exec(input) {
    const parsed = parse(input);
    if(parsed.length === 0) {
      return;
    }
    const cmd = parsed[0];
    try {
      cmds[cmd](parsed);
    } catch (e) {
      err('Syntax error\n');
    }
  }

  const repl = function () {
    const historyEnabled = true;
    jqc.Prompt(historyEnabled, function (input) {
      exec(input);
      repl();
    });
  };
  repl();
});
