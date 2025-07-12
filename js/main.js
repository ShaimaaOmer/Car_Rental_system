// Image gallery functionality
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const mainImage = document.getElementById('mainCarImage');
        mainImage.src = this.src.replace('-thumb', '-large');
        
        document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
        this.classList.add('active');
    });
});

// Date picker logic
const today = new Date().toISOString().split('T')[0];
document.getElementById('pickupDate').min = today;

document.getElementById('pickupDate').addEventListener('change', function() {
    const returnDate = document.getElementById('returnDate');
    returnDate.min = this.value;
    
    if (returnDate.value && returnDate.value < this.value) {
        returnDate.value = this.value;
    }
});

// Favorite button toggle
document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('far');
        icon.classList.toggle('fas');
        
        if (icon.classList.contains('fas')) {
            this.style.color = '#ff4757';
            // Add to favorites logic
        } else {
            this.style.color = '';
            // Remove from favorites logic
        }
    });
});