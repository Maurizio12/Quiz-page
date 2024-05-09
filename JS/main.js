const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');

//This method creates after startBtn is clicked a new class name (active).
startBtn.onclick = () => {
    popupInfo.classList.add('active');  
}