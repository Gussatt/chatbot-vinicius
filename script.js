const chatContainer = document.getElementById('chat');
const userInput = document.getElementById('user-input');

function appendMessage(role, text) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(role);
    messageElement.innerText = text;
    chatContainer.appendChild(messageElement);
}

function sendMessage() {
    const userMessage = userInput.value;
    appendMessage('user', userMessage);
    userInput.value = '';

    // Substitua 'SUA_CHAVE_API' pelo seu próprio token de API do OpenAI
    const apiKey = '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';
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
            prompt: userMessage,
            max_tokens: 150,
        }),
    })
    .then(response => response.json())
    .then(data => {
        const botMessage = data.choices[0].text.trim();
        appendMessage('bot', botMessage);
    })
    .catch(error => console.error('Error:', error));
}