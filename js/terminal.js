let terminal = document.getElementById("terminal");
let terminalEnabler = document.getElementById("terminalEnabler");
let terminalInput = document.getElementById("terminalInput");
let terminalEnabled = false;

terminalInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        onTerminalInput();
    }
});

function enableTerminal() {
    terminalEnabled = !terminalEnabled;
    if (terminalEnabled) {
        terminal.style.height = "45%";
        terminalEnabler.style.bottom = "calc(var(--standard-padding) + 45%)";
    } else {
        terminal.style.height = "0%";
        terminalEnabler.style.bottom = "var(--standard-padding)";
    }
}

function onTerminalInput() {
    let input = terminalInput.value;
    let valid = false;
    if (input === "xernas") {
        valid = true;
    }
    if (input === "on") {
        torch(true)
        valid = true;
    }
    if (input === "off") {
        torch(false)
        valid = true;
    }

    if (valid) terminalInput.value = "";
}