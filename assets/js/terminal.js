"use strict"

$(function () {
  const welcomeText = 'Rob\'s Shell version 0.1. Enter `help` for basic information.\n';
  const noFocus = false;
  const jqc = $('#console').jqconsole(welcomeText, '\n>>> ', '... ', noFocus);

  const helpText =
    'This is the personal website of Robert Heber, software developer by vocation and swing dancer by avocation.\n' +
    '\n' +
    'My website is a shell because I am cool.\n'

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

  function _visit(url) {
    if(url.includes('://')) {
      window.open(url);
      return;
    }
    window.open(`https://${url}`);
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
    out('Commands to get more information about me:\n');
    out('\n');
    out('github\t\tVisit my github profile.\n');
    out('tryhackme\tVisit my tryhackme profile.\n');
    out('\n');
    out('Other commands:\n');
    out('\n');
    out('echo [ARGS]\tPrint arguments.\n');
    out('help\t\tShow this message.\n');
    out('visit URL\tVisit a URL.\n');
  }

  function visit(parsed) {
    if(parsed.length !== 2) {
      err('Error: visit expects exactly one argument.');
      return;
    }
    const url = parsed[1]
    _visit(url);
  }

  function github() {
    _visit('github.com/rheber');
  }

  function tryhackme() {
    _visit('tryhackme.com/p/rockstep');
  }

  const cmds = {
    'echo': echo,
    'help': help,
    'visit': visit,

    'github': github,
    'tryhackme': tryhackme,
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
