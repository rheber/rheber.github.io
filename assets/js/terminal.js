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
  jqc.RegisterShortcut('D', function() {
    exit();
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

  function randomElement(xs) {
    const index = Math.floor(Math.random() * xs.length);
    return xs[index];
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

  function exit() {
    window.close();
  }

  function fortune() {
    fetch('/assets/text/fortunes/paradoxum').then(
      response => response.text()
    ).then(text => {
      const fortunes = text.split('%\n').filter(f => f.length > 0);
      out(randomElement(fortunes));
    });
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
    out('exit\t\tClose the shell.\n');
    out('fortune\t\tPrint a random message.\n');
    out('help\t\tShow this message.\n');
    out('visit URL\tVisit a URL.\n');
    out('\n');
    out('Key bindings:\n');
    out('\n');
    out('Ctl-A\tMove cursor to start of line.\n');
    out('Ctl-D\tClose the shell.\n');
    out('Ctl-E\tMove cursor to end of line.\n');
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
    'exit': exit,
    'fortune': fortune,
    'help': help,
    'visit': visit,

    'github': github,
    'tryhackme': tryhackme,
  };

  /*
   * Convert a string into a parse tree.
   */
  function parse(input) {
    return input.split(';').map(parseStmt);
  }

  /*
   * Convert a stmt into a list of words.
   */
  function parseStmt(input) {
    return input.split(/ +/);
  }

  function exec(input) {
    const parseTree = parse(input);
    parseTree.map(stmt => {
      if(stmt[0].length === 0) {
        return;
      }
      const cmd = stmt[0];
      try {
        cmds[cmd](stmt);
      } catch (e) {
        err('Syntax error\n');
      }
    });
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
