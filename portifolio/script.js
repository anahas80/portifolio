<script>
    // Selecionar elementos necessários
    const carouselImages = document.querySelector('.carousel-images');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    // Configurações do carrossel
    let currentIndex = 0;
    const imageWidth = carouselImages.querySelector('img').clientWidth;
    const totalImages = carouselImages.querySelectorAll('img').length;

    // Função para atualizar a posição do carrossel
    function updateCarousel() {
        const offset = -currentIndex * imageWidth;
        carouselImages.style.transform = `translateX(${offset}px)`;
    }

    // Evento para o botão "Anterior"
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? totalImages - 1 : currentIndex - 1;
        updateCarousel();
    });

    // Evento para o botão "Próximo"
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === totalImages - 1) ? 0 : currentIndex + 1;
        up
