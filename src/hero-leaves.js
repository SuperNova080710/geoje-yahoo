import { FallingLeaves } from 'falling-leaves';

const mobile = matchMedia('(max-width: 599px)');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
const settings = () => ({
  count: mobile.matches ? 8 : 16,
  size: mobile.matches ? [12, 22] : [15, 28]
});

// No container makes the package use a fixed, click-through viewport canvas.
const leaves = new FallingLeaves({
  autoStart: false,
  ...settings(),
  shapes: ['maple', 'ginkgo'],
  colors: ['#e9a453', '#b65b37', '#d7a45c', '#ad6740'],
  speed: [0.45, 1.05],
  wind: [-0.2, 0.45],
  sway: [0.3, 0.9],
  opacity: 0.55,
  zIndex: 6
});

const syncPlayback = () => {
  if (document.visibilityState === 'visible' && !reducedMotion.matches) {
    leaves.start();
  } else {
    leaves.stop();
  }
};

syncPlayback();
mobile.addEventListener('change', () => leaves.update(settings()));
reducedMotion.addEventListener('change', syncPlayback);
document.addEventListener('visibilitychange', syncPlayback);
