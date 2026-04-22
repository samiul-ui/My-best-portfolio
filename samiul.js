const menuBtn = document.getElementById('hamburger-icon');
const navBar = document.getElementById('myNavbar');

function openSection(id) {
    document.getElementById(id).classList.add('active');
    document.body.style.overflow = 'auto'; 
}

function closeAll() {
    document.querySelectorAll('.overlay-section').forEach(s => s.classList.remove('active'));
    document.body.style.overflow = 'auto';
}

if (menuBtn && navBar) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navBar.classList.toggle('active');
    });
}

function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if(modal) modal.style.display = "none";
}


window.onclick = function(event) {
    
    if (navBar && !event.target.matches('#hamburger-icon') && !event.target.closest('.navbar')) {
        if (navBar.classList.contains('active')) {
            navBar.classList.remove('active');
        }
    }

    
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const gallery = document.getElementById('imageGallery');
            if (gallery) {
                const div = document.createElement('div');
                div.className = 'gallery-item';
                div.innerHTML = `
                    <img src="${e.target.result}">
                    <button class="del-btn" onclick="this.parentElement.remove()">X</button>
                `;
                gallery.appendChild(div);
            }
        }
        reader.readAsDataURL(file);
    }
}



function closeMenu() {
  document.querySelector('.navbar').classList.add('hide');
}