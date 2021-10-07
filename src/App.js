import './terminal.css';
import { defaultConfiguration, Unixorn } from "unixorn";

const randomElement = (xs) => {
  const index = Math.floor(Math.random() * xs.length);
  return xs[index];
};

const customCommands = [
  {
    name: "exit",
    usage: "exit",
    summary: 'Close the shell.',
    action: () => {
      window.close();
    },
  },
  {
    name: "fortune",
    usage: "fortune",
    summary: "Print a random message.",
    action: (kernel) => {
      fetch('/assets/text/fortunes/paradoxum').then(
        response => response.text()
      ).then(text => {
        const fortunes = text.split('%\n').filter(f => f.length > 0);
        kernel.printOut(randomElement(fortunes));
      });
    },
  },
  {
    name: "github",
    usage: "github",
    summary: "Visit my github profile.",
    action: (kernel) => {
      kernel.visit("github.com/rheber");
    },
  },
  {
    name: "help",
    usage: "help",
    summary: "Show this message.",
    action: (kernel) => {
      const isPersonalCommand = (command) => {
        return ["github", "unixorn"].includes(command.name);
      };

      kernel.printOut("This is the personal website of Robert Heber.");
      kernel.printOut('\n');
      kernel.printOut("My website is a shell because I am cool.");
      kernel.printOut('\n');

      kernel.printOut("Commands to get more information about me:");
      kernel.printOut('\n');
      kernel.commands().filter(isPersonalCommand).forEach(command => {
        kernel.printOut(`${command.usage}`.padEnd(20) + command.summary);
      });
      kernel.printOut('\n');

      kernel.printOut("Other commands:");
      kernel.printOut('\n');
      kernel.commands().filter(command => !isPersonalCommand(command)).forEach(command => {
        kernel.printOut(`${command.usage}`.padEnd(20) + command.summary);
      });
      kernel.printOut('\n');

      kernel.printOut('Keybindings:');
      kernel.printOut('\n');
      kernel.keybindings().forEach(keybinding => {
        kernel.printOut(`ctrl-${keybinding.key}`.padEnd(20) + keybinding.summary);
      });
    },
  },
  {
    name: "unixorn",
    usage: "unixorn",
    summary: "Visit the main page of Unixorn, a library I built to create this site.",
    action: (kernel) => {
      kernel.visit("github.com/rheber/unixorn");
    },
  },
];
const commands = [
  ...defaultConfiguration.commands.filter(command => command.name !== "help"),
  ...customCommands,
];

const customKeybindings = [
  {
    key: "d",
    ctrl: true,
    meta: false,
    summary: "Close the shell.",
    action: () => {
      window.close();
    },
  },
];
const keybindings = [
  ...defaultConfiguration.keybindings,
  ...customKeybindings,
];

const configuration = {
  autoFocus: true,
  commands,
  keybindings,
  startupMessage: "Rob's Shell version 1.0. Enter `help` for basic information.",
};

function App() {
  return (
    <Unixorn
      {...configuration}
    />
  );
}

export default App;
