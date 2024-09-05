window.onload = function () {
    const middleButton = document.getElementById('weirdfunction');
    const article = document.getElementById('hiddenParagraph');
    const showHidden = document.getElementById('showHidden');
    
    article.style.display = 'none';
    
    showHidden.addEventListener('mouseover', function () {
       article.style.display = 'block';
    });

    showHidden.addEventListener('mouseout', function () {
        article.style.display = 'none';
    });
    
    middleButton.addEventListener('click', function () {
        // random color changing whe button is clicked
        setInterval( randomBgColor, 100);
        makeCatImage();
    });







function makeCatImage() {
    if (document.getElementById('catImage')) {
        // alert('You already made the cat appear and dance!');
        return;
    }

    // Create a new image element
    const newImage = document.createElement('img');
    newImage.src = '/images/giphy.webp';
    newImage.id = 'catImage';
    newImage.style.width = '200px';
    newImage.style.height = '200px';
    newImage.style.borderRadius = '50%';
    newImage.style.position = 'absolute';
    newImage.style.top = '15%';
    newImage.style.left = '44%';

    document.body.appendChild(newImage);

    alert('You made the cat appear and dance! 🐈');
}

function randomBgColor() {
    
    const randomColor = ['red', 'white', 'blue', 'green', 'yellow', 'purple', 'orange', 'pink', 'brown'];
    document.body.style.backgroundColor = randomColor[Math.floor(Math.random() * randomColor.length)];
}
};