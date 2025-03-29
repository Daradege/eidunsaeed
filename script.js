const envelope = document.getElementById('envelope');
const invitationCard = document.getElementById('invitationCard');
const backgroundMusic = document.getElementById('backgroundMusic');

function openEnvelope() {
  envelope.classList.add('opened');
  showInvitationCard();
  playBackgroundMusic();
}

function showInvitationCard() {
  setTimeout(() => {
    invitationCard.classList.remove('hidden');
    invitationCard.style.opacity = 1;
  }, 1500);
}

function playBackgroundMusic() {
  setTimeout(() => {
    backgroundMusic.play();
  }, 1000);
}

function createParticles() {
  for (let i = 0; i < 20; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    particle.style.animationDuration = `${Math.random() * 5 + 3}s`;
    document.body.appendChild(particle);
  }
}

envelope.addEventListener('click', openEnvelope);

createParticles();