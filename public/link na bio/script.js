(function () {
  const links = document.querySelectorAll('.link');

  function handleKeyFocus(e) {
    if (e.key === 'Tab') {
      document.documentElement.classList.add('using-keyboard');
    }
  }
  function handleMouseDown() {
    document.documentElement.classList.remove('using-keyboard');
  }

  window.addEventListener('keydown', handleKeyFocus);
  window.addEventListener('mousedown', handleMouseDown);

  links.forEach((link) => {
    link.addEventListener('mousemove', (e) => {
      const rect = link.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      link.style.setProperty('--x', x + '%');
      link.style.setProperty('--y', y + '%');
    });

    link.addEventListener('click', (evt) => {
      const rect = link.getBoundingClientRect();
      const ripple = document.createElement('span');
      const size = Math.max(rect.width, rect.height);
      const x = evt.clientX - rect.left - size / 2;
      const y = evt.clientY - rect.top - size / 2;
      ripple.style.position = 'absolute';
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.borderRadius = '50%';
      ripple.style.background = 'rgba(228, 90, 146, 0.3)';
      ripple.style.transform = 'scale(0)';
      ripple.style.opacity = '1';
      ripple.style.pointerEvents = 'none';
      ripple.style.transition = 'transform 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 800ms ease';
      ripple.className = 'ripple';
      link.appendChild(ripple);
      requestAnimationFrame(() => {
        ripple.style.transform = 'scale(2)';
        ripple.style.opacity = '0';
      });
      setTimeout(() => ripple.remove(), 850);
    });
  });
})();

// WhatsApp Modal Functions
const whatsAppModal = document.getElementById('whatsappModal');
function openWhatsAppModal() {
  if (whatsAppModal) {
    whatsAppModal.classList.add('active');
    whatsAppModal.setAttribute('aria-hidden', 'false');
    document.getElementById('whatsappMessage').focus();
  }
}

function closeWhatsAppModal() {
  if (whatsAppModal) {
    whatsAppModal.classList.remove('active');
    whatsAppModal.setAttribute('aria-hidden', 'true');
  }
}

function sendWhatsAppMessage() {
  const message = document.getElementById('whatsappMessage').value;
  const phone = '5566996823277'; // Substitua pelo seu número
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
  closeWhatsAppModal();
}

// Popup Modal Functions
const popupModal = document.getElementById('popupModal');
function openPopupModal() {
  if (popupModal) {
    popupModal.classList.add('active');
    popupModal.setAttribute('aria-hidden', 'false');
  }
}

function closePopupModal() {
  if (popupModal) {
    popupModal.classList.remove('active');
    popupModal.setAttribute('aria-hidden', 'true');
  }
}



// Close modals when clicking outside
document.addEventListener('click', function(e) {
  if (e.target === whatsAppModal) {
    closeWhatsAppModal();
  }
  if (e.target === popupModal) {
    closePopupModal();
  }
});

// Close modals with ESC key
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeWhatsAppModal();
    closePopupModal();
  }
});