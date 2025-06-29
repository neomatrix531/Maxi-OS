// This file will contain the core logic for the OS, apps, and tab management.
// For now, it's intentionally empty as per the prompt "no apps or tabs yet".
console.log("OS loaded. Ready for apps and tabs!");

// Get references to the Maxi IDE elements
const maxiIdeIcon = document.getElementById('maxi-ide-icon');
const maxiIdeWindow = document.getElementById('maxi-ide-window');
const maxiIdeCloseButton = document.getElementById('maxi-ide-close');

// Get references to the Maxi OS Explorer elements
const maxiExplorerIcon = document.getElementById('maxi-explorer-icon');
const maxiExplorerWindow = document.getElementById('maxi-explorer-window');
const maxiExplorerCloseButton = document.getElementById('maxi-explorer-close');

// Get references to the mcr.home elements
const mcrHomeIcon = document.getElementById('mcr-home-icon');
const mcrHomeWindow = document.getElementById('mcr-home-window');
const mcrHomeCloseButton = document.getElementById('mcr-home-close');

// Get references to the MOS Terminal 1.0 elements
const mosTerminalIcon = document.getElementById('mos-terminal-icon');
const mosTerminalWindow = document.getElementById('mos-terminal-window');
const mosTerminalCloseButton = document.getElementById('mos-terminal-close');

// Function to open Maxi IDE window
function openMaxiIde() {
    if (maxiIdeWindow) {
        maxiIdeWindow.style.display = 'flex'; // Use flex to show the window with its column layout
    }
}

// Function to close Maxi IDE window
function closeMaxiIde() {
    if (maxiIdeWindow) {
        maxiIdeWindow.style.display = 'none';
    }
}

// Function to open Maxi OS Explorer window
function openMaxiExplorer() {
    if (maxiExplorerWindow) {
        maxiExplorerWindow.style.display = 'flex'; // Use flex to show the window
    }
}

// Function to close Maxi OS Explorer window
function closeMaxiExplorer() {
    if (maxiExplorerWindow) {
        maxiExplorerWindow.style.display = 'none';
    }
}

// Function to open mcr.home window
function openMcrHome() {
    if (mcrHomeWindow) {
        mcrHomeWindow.style.display = 'flex'; // Use flex to show the window
    }
}

// Function to close mcr.home window
function closeMcrHome() {
    if (mcrHomeWindow) {
        mcrHomeWindow.style.display = 'none';
    }
}

// Function to open MOS Terminal 1.0 window
function openMosTerminal() {
    if (mosTerminalWindow) {
        mosTerminalWindow.style.display = 'flex'; // Use flex to show the window
    }
}

// Function to close MOS Terminal 1.0 window
function closeMosTerminal() {
    if (mosTerminalWindow) {
        mosTerminalWindow.style.display = 'none';
    }
}

// Add event listeners for Maxi IDE
if (maxiIdeIcon) {
    maxiIdeIcon.addEventListener('click', openMaxiIde);
}

if (maxiIdeCloseButton) {
    maxiIdeCloseButton.addEventListener('click', closeMaxiIde);
}

// Add event listeners for Maxi OS Explorer
if (maxiExplorerIcon) {
    maxiExplorerIcon.addEventListener('click', openMaxiExplorer);
}

if (maxiExplorerCloseButton) {
    maxiExplorerCloseButton.addEventListener('click', closeMaxiExplorer);
}

// Add event listeners for mcr.home
if (mcrHomeIcon) {
    mcrHomeIcon.addEventListener('click', openMcrHome);
}

if (mcrHomeCloseButton) {
    mcrHomeCloseButton.addEventListener('click', closeMcrHome);
}

// Add event listeners for MOS Terminal 1.0
if (mosTerminalIcon) {
    mosTerminalIcon.addEventListener('click', openMosTerminal);
}

if (mosTerminalCloseButton) {
    mosTerminalCloseButton.addEventListener('click', closeMosTerminal);
}

// Remove the initial welcome message if it exists
const messageDiv = document.querySelector('.message');
if (messageDiv) {
    messageDiv.remove();
}