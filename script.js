function spawnH(e) {
  const container = document.getElementById('fx');
  const emojis = ['💕', '💗', '🌸', '💝', '🌷', '✨', '💖'];

  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      const heart = document.createElement('span');
      heart.className = 'fh';
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = (e.clientX - 10 + Math.random() * 40 - 20) + 'px';
      heart.style.top = (e.clientY - 10) + 'px';
      heart.style.fontSize = (14 + Math.random() * 14) + 'px';
      heart.style.animationDelay = (i * 0.08) + 's';
      container.appendChild(heart);
      setTimeout(() => heart.remove(), 3000);
    }, i * 60);
  }
}
