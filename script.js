const btn1 = document.querySelector('.arrow-icon');
const btn2 = document.querySelector('.arrow2');
const popup = document.querySelector('.popup');
const footer = document.querySelector('footer');
const contentWrapper = document.querySelector('.content-wrapper');

btn1.addEventListener('click', togglePopup);
btn2.addEventListener('click', deactivatePopup);

function togglePopup() {
	if (window.innerWidth < 880) {
		if (popup.style.display === 'none') {
			popup.style.display = 'flex';
			footer.style.display = 'none';
			contentWrapper.style.padding = '40px 30px 0px 30px';
		} else {
			popup.style.display = 'none';
			footer.style.display = 'flex';
			contentWrapper.style.padding = '40px 30px 20px 30px';
		}
	} else {
		if (popup.style.display === 'none') {
			popup.style.display = 'flex';
		} else {
			popup.style.display = 'none';
		}
	}
}

function deactivatePopup() {
	if (window.innerWidth < 880) {
		popup.style.display = 'none';
		footer.style.display = 'flex';
		contentWrapper.style.padding = '40px 30px 20px 30px';
	} else {
		popup.style.display = 'none';
	}
}
