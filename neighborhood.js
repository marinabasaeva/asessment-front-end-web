let randomBtn = document.getElementById('random-res')


randomBtn.addEventListener('click', () => {
    let restaurants = ['Carlos Cucina Italiana', 'Boston Burger Company','Atlantic Fish Co', 'Wahlburgers', 'Pho Basil', 'Busy Bee Restaurant', 'Saltie Girl']
    const random = Math.floor(Math.random() * restaurants.length);
   alert(restaurants[random])
})