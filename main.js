const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');

//Default Opacity
const opacity = 0.4;
// set First Image Opacity
imgs[0].style.opacity = opacity;



imgs.forEach(function(img){

    img.addEventListener('click', function(gimg){
        //res opacity
        imgs.forEach(img => (img.style.opacity = 1))
        //current Image src change
        current.src = gimg.target.src;
        //Change current opacity
        gimg.target.style.opacity = opacity;

        // Add fade in class
        current.classList.add('fade-in')

        //Remode fadeIn after .5s seconds
        setTimeout(function(){
            current.classList.remove('fade-in')
        },500)

    })

})
