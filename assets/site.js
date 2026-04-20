// Simple nav toggle for mobile
document.addEventListener('DOMContentLoaded', function () {
 const toggle = document.querySelector('.nav-toggle');
 const links = document.querySelector('.nav-links');
 if (toggle && links) {
 toggle.addEventListener('click', function () {
 const isOpen = links.classList.toggle('open');
 toggle.setAttribute('aria-expanded', isOpen);
 toggle.textContent = isOpen ? 'Close' : 'Menu';
 });
 }

 // Smooth-reveal on scroll for .reveal-on-scroll elements
 const observer = new IntersectionObserver(function (entries) {
 entries.forEach(function (entry) {
 if (entry.isIntersecting) {
 entry.target.classList.add('reveal');
 observer.unobserve(entry.target);
 }
 });
 }, { threshold: 0.12 });

 document.querySelectorAll('.reveal-on-scroll').forEach(function (el) {
 observer.observe(el);
 });
});
