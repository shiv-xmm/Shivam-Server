// JavaScript example
window.addEventListener('load', function() {
  var loadingOverlay = document.querySelector('.loading-overlay');
  loadingOverlay.style.opacity = '0';
  setTimeout(function() {
    loadingOverlay.style.display = 'none';
  }, 1000); // Delay before hiding the loading overlay, adjust as needed
});
const typewriters = document.querySelectorAll('.typewriter');

document.body.innerHTML += '<a target="_blank" alt="Main Page" href="https://shiv-xmm.github.io/Shivam-Server/"><div id="svg-wrapper"><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 73 63" style="enable-background:new 0 0 73 63;" xml:space="preserve"> <style type="text/css"> .st0{fill:#231F20;} </style> <path id="Combined-Shape" class="st0" d="M72.9,56.2l-0.5,0.4c-0.5,0.4-1.1,0.8-1.6,1.2l-0.4,0.3L70,57.9c-0.3-0.2-0.7-0.3-1.2-0.3 c-1.6,0-3.9,1.2-6,2.3c-2.4,1.2-4.9,2.5-7.1,2.6c-1,0-1.5-0.4-1.8-0.7c-0.9-1.2,0.3-3.4,1.7-6c1.3-2.5,3-5.6,1.8-6.6 C57.3,49,57.1,49,56.8,49c-1.5,0-4.6,2-8,5.1c-1.1,1-2.2,2-3.2,3c-3,2.9-5.4,5.3-7.5,5.3c-0.5,0-1-0.2-1.2-0.5 C35.1,59.5,40.4,50,41,48.9c0.9-1.7,1.9-3.3,2.8-5c2.4-4.1,4.6-7.9,3.8-9.3c-0.1-0.2-0.2-0.3-0.5-0.3c-2.1,0-7.8,4.4-13,10.9 c-2.6,3.1-5,6.5-7.1,9.5c-3.5,5.1-5.3,7.5-6.9,7.5c-0.3,0-0.5,0-0.6-0.1c-0.2-0.1-0.3-0.2-0.4-0.3c-1.7-2.2,2.1-14.6,7.4-24.2 c2.5-5.1,5.6-9.8,8.3-14c3.4-5.4,7.1-11.6,5.2-11.3c-1.5,0.2-4.1,1.3-7.8,4.3c-5.1,4-11,10.6-15.6,17.5c-5.5,8-9.4,16.5-11.2,20.8 c-0.5,1.3-1,2.4-1.4,3.4c-1.6,3.7-2,4.6-2.9,4.6c-0.8,0-1-0.8-1.1-1.2c0-1,0.9-7.7,4.4-15.9C8,36.9,14.1,27.3,20.8,20 c6.7-7.5,14.9-13.9,22.1-17.1c3.5-1.6,6.9-2.6,9.3-2.6c1.2,0,2,0.2,2.5,0.7c0.3,0.3,0.4,0.6,0.4,1c0,2.4-3.2,6.3-7.6,11.7 c-3,3.7-6.4,7.9-9.4,12.3c-4.3,5.9-7.1,11.4-8.4,14.2c-2.1,4.4-2.7,6.8-2.7,7.5c1-0.3,3.6-3.1,5.6-5.3c2.3-2.5,4.9-5.3,7.8-7.8 c5.1-4.8,10.8-8.2,13.7-8.2c1.1,0,1.9,0.5,2.1,1.4c0.6,2.2-1.8,5.6-4.9,10c-1.1,1.5-2.2,3.1-3.3,4.8c-3.7,5.4-5.9,10.5-5.3,11.9 c0.1,0.2,0.2,0.2,0.2,0.2c0.1,0,0.2,0,0.3,0c1.4,0,3.8-2,6.2-3.9c0.9-0.7,1.8-1.5,2.7-2.2c2.4-1.9,5.8-4.2,8.1-4.2 c0.9,0,1.6,0.3,1.9,1c1.4,1.8-0.4,4.9-2.1,7.8c-1.2,2-2.5,4.4-2,5.3c0.1,0.1,0.2,0.3,0.6,0.4c0.2,0,0.3,0,0.5,0 c1.7,0,3.7-0.9,5.6-1.8c2-0.9,3.9-1.7,5.5-1.7c0.8,0,1.6,0.2,2.2,0.6L72.9,56.2z M18.2,43.5c-1.2,0-2.1-1-2.1-2.1 c0-1.2,0.9-2.1,2.1-2.1s2.1,1,2.1,2.1C20.3,42.6,19.3,43.5,18.2,43.5z"/> </svg> </div></a>';

const btn = document.querySelector("#btn");
const btnText = document.querySelector("#btnText");

btn.onclick = () => {
    btnText.innerHTML = "Thanks";
    btn.classList.add("active");
};