import { FallingLeaves } from 'falling-leaves';

const hero = document.querySelector('.cover');

if (hero) {
  const mobile = matchMedia('(max-width: 599px)');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const settings = () => ({
    count: mobile.matches ? 8 : 17,
    size: mobile.matches ? [12, 23] : [15, 29]
  });

  const leaves = new FallingLeaves({
    container: hero,
    autoStart: false,
    ...settings(),
    shapes: ['maple', 'ginkgo'],
    colors: ['#e9a453', '#b65b37', '#d7a45c', '#ad6740'],
    speed: [0.45, 1.05],
    wind: [-0.2, 0.45],
    sway: [0.3, 0.9],
    opacity: 0.72,
    zIndex: 2
  });

  let onScreen = false;
  const syncPlayback = () => {
    if (onScreen && document.visibilityState === 'visible' && !reducedMotion.matches) {
      leaves.start();
    } else {
      leaves.stop();
    }
  };

  new IntersectionObserver(entries => {
    onScreen = entries[0].isIntersecting;
    syncPlayback();
  }, { threshold: 0.05 }).observe(hero);

  mobile.addEventListener('change', () => leaves.update(settings()));
  reducedMotion.addEventListener('change', syncPlayback);
  document.addEventListener('visibilitychange', syncPlayback);
}
