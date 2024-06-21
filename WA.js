document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var whatsappMessage = document.getElementById('whatsapp-message');
        if (whatsappMessage) {
            whatsappMessage.style.display = 'block';
        }
    }, 5000); // 5 seconds delay

    var closeBtn = document.getElementById('close-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            var whatsappMessage = document.getElementById('whatsapp-message');
            if (whatsappMessage) {
                whatsappMessage.style.display = 'none';
            }
        });
    }
});
