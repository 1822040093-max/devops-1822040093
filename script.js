// Clock and Date functionality
function updateClock() {
    const now = new Date();
    
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    const dayName = days[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const dateElement = document.getElementById('current-date');
    if (dateElement) {
        dateElement.textContent = `${dayName}, ${date}/${month}/${year}`;
    }
}

// Click Counter
let clickCount = 0;
const countBtn = document.getElementById('btn-count');
const countDisplay = document.getElementById('click-counter');

if (countBtn && countDisplay) {
    countBtn.addEventListener('click', () => {
        clickCount++;
        countDisplay.textContent = clickCount;
        
        // Micro-animation effect
        countBtn.style.transform = 'scale(0.96)';
        setTimeout(() => {
            countBtn.style.transform = '';
        }, 100);
    });
}

// Theme Toggle
const themeBtn = document.getElementById('btn-theme');
let isDarkTheme = true;

if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            document.documentElement.removeAttribute('data-theme');
            themeBtn.textContent = 'Đổi chế độ màu (Sáng)';
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            themeBtn.textContent = 'Đổi chế độ màu (Tối)';
        }
    });
}

// Initialize clock
setInterval(updateClock, 1000);
updateClock();

console.log("Website Dương Hoàng Thái - 1822040093 đã sẵn sàng cho CI/CD với GitHub Actions!");
