// Пример данных
let isUserLoggedIn = false;
const chatMessages = [
    { from: 'Система', text: 'К сожалению, людей на сайте сейчас нету.' }
];

document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    // Эмуляция регистрации
    if (phoneNumber) {
        isUserLoggedIn = true;
        document.getElementById('login').style.display = 'none';
        document.getElementById('chat').style.display = 'flex';
        updateChatMessages();
    } else {
        document.getElementById('statusMessage').textContent = 'Пожалуйста, введите номер телефона.';
    }
});

document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const messageContent = document.getElementById('messageContent').value.trim();
    
    if (messageContent) {
        chatMessages.push({ from: 'Вы', text: messageContent });
        updateChatMessages();
        document.getElementById('messageContent').value = '';
    }
});

function updateChatMessages() {
    const chatMessagesContainer = document.getElementById('chatMessages');
    chatMessagesContainer.innerHTML = '';
    
    chatMessages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.textContent = `${message.from}: ${message.text}`;
        chatMessagesContainer.appendChild(messageElement);
    });
    
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
}

function logout() {
    isUserLoggedIn = false;
    document.getElementById('chat').style.display = 'none';
    document.getElementById('login').style.display = 'block';
}
