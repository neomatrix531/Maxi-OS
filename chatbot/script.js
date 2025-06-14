function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() === "") return; // Ignore empty input

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Simple bot response
    let botResponse = getBotResponse(userInput);
    chatBox.innerHTML += `<p><strong>Bot:</strong> ${botResponse}</p>`;

    // Clear input field
    document.getElementById("userInput").value = "";
}

// Simple predefined responses
function getBotResponse(input) {
    let responses = {
        "hello": "Hi there! How can I help?",
        "how are you": "I'm just a chatbot, but thanks for asking!",
        "bye": "Goodbye! Have a great day!",
    };

    return responses[input.toLowerCase()] || "I'm not sure how to respond to that.";
}