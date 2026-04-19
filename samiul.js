    function openSection(id) {
    document.getElementById(id).classList.add('active');
    // বডি স্ক্রল চালু রাখতে নিচের লাইনটি মুছে দিন বা এভাবে লিখে দিন:
    document.body.style.overflow = 'auto'; 
}

        function closeAll() {
            document.querySelectorAll('.overlay-section').forEach(s => s.classList.remove('active'));
            document.body.style.overflow = 'auto'; // Enable scrolling again
        }
        
        // বাটন এবং মেনুবার খুঁজে নেওয়া
const menuBtn = document.getElementById('hamburger-icon');
const navBar = document.getElementById('myNavbar');

// বাটনে ক্লিক করলে মেনু আসবে বা যাবে
if (menuBtn && navBar) {
    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // ক্লিকটি যেন বাইরের এলিমেন্টে না যায়
        navBar.classList.toggle('active');
    });
}


// স্ক্রিনের অন্য কোথাও ক্লিক করলে যেন মেনু বন্ধ হয়ে যায়
window.onclick = function(event) {
    if (!event.target.matches('#hamburger-icon') && !event.target.closest('.navbar')) {
        if (navBar.classList.contains('active')) {
            navBar.classList.remove('active');
        }
    }
}




















// Function to open modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Function to close modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = "none";
    }
}

// Handle Image Upload and Delete
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const gallery = document.getElementById('imageGallery');
            
            const div = document.createElement('div');
            div.className = 'gallery-item';
            
            div.innerHTML = `
                <img src="${e.target.result}">
                <button class="del-btn" onclick="this.parentElement.remove()">X</button>
            `;
            
            gallery.appendChild(div);
        }
        reader.readAsDataURL(file);
    }
}
