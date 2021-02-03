import '../styles/styles.css';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

let revealOnScroll = new RevealOnScroll();

let mobilemenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
