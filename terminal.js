document.addEventListener("DOMContentLoaded", function () {
  var output = document.getElementById("output");
  output.innerHTML +=
    "Welcome to my interactive web terminal.<br>For a list of available commands, type 'help'.<br>";
  // Define an object to hold the available commands
  var commands = {
    whois: function () {
      return "<p class='banner'>Hi 👋, I am FormalSnake 🐍!<br>I am a software and game developer, and I make some interesting projects, like this one!<br>I also make YouTube videos about Game development 🎮!</p>";
    },
    whoami: function () {
      return "<p class='banner'>The paradox of “Who am I?” is: we never know, but, we constantly find out.</p>";
    },
    video: function () {
      return "<p class='banner'>Opening YouTube...</p>";
    },
    social: function () {
      return "<br><p class='banner'><a href='https://discord.gg/JAPhfQgu9J' target='_blank' aria-label='Discord'><i class='uil uil-discord'></i></a><br><a href='https://twitter.com/formalsnake' target=''_blank' aria-label='Twitter'><i class='uil uil-twitter'></i></a><br><a href='https://github.com/FormalSnake' target='_blank' aria-label='Github'><i class='uil uil-github'></i></a></p>";
    },
    projects: function () {
      return "<br><p class='banner'>I am working on... <br> 🧟 A game called Zombie Siege, <br> 💬 A dialog system for Unity.</p>";
    },
    history: function () {
      return commandHistory.join("<br>");
    },
    help: function () {
      var keys = Object.keys(commands);
      var result = "";
      for (var i = 0; i < keys.length; i++) {
        result += "<p class='command-output'>" + keys[i] + "</p>";
      }
      return result;
    },

    email: function () {
      window.location.href = "mailto:hello@formalsnake.dev";
      return "<p class='banner'>Opening mailto:hello@formalsnake.dev...</p>";
    },
    clear: function () {
      var output = document.getElementById("output");
      output.innerHTML = "";
      return "";
    },
    banner: function () {
      return "<p class='banner'>Welcome to my interactive web terminal.<br>For a list of available commands, type 'help'.</p>";
    },
    formalfetch: function () {
      var os = window.navigator.platform; // You can use the window.navigator.platform to get the os
      var browser = window.navigator.userAgent; // You can use the window.navigator.userAgent to get the browser
      return "OS: " + os + "<br>" + "Browser: " + browser;
    },
    ls: function () {
      return "'homework'/   hal9000.sh";
    },
  };
  var commandHistory = [];

  // Function to handle input and execute commands
  function executeCommand() {
    var input = document.getElementById("input").value.toLowerCase();
    var output = document.getElementById("output");
    commandHistory.push(input);
    if (commands[input]) {
      if (input === "video") {
        window.open("https://www.youtube.com/channel/UCTwepsPzsXWSpYW5M1jlbgg");
      }
      if (input === "clear") {
        output.innerHTML = "";
      } else {
        output.innerHTML +=
          "<span id='user'>visitor@formalsnake.dev:~$ " + input + "</span>";
        output.innerHTML +=
          "<p class='command-output'>" + commands[input]() + "</p>";
      }
    } else {
      output.innerHTML +=
        "<span id='user'>visitor@formalsnake.dev:~$ " + input + "</span>";
      output.innerHTML +=
        "<p>Command not found. For a list of commands, type 'help'.</p>";
    }

    // Clear the input field
    document.getElementById("input").value = "";
  }
  document.getElementById("input").onkeydown = function (e) {
    if (e.key === "Enter") executeCommand();
  };
});
