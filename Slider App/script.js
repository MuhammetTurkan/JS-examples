var models = [
    {
        name : 'Porsche Panamera',
        image : 'img/porsche-panamera.jpg',
        link : 'https://tr.motor1.com/news/365832/uzun-egzozlu-porsche-panamera-casus/',
    },
    {
        name : 'Chevrolet Camaro',
        image : 'img/camaro.jpg',
        link : 'https://tr.motor1.com/news/303219/chevrolet-camaro-zl1-1le-sanziman/',
    },
    {
        name : 'Wolkswagen Passat',
        image : 'img/passat.jpg',
        link : 'https://tr.motor1.com/news/269709/vw-passat-cin-versiyonu/',
    },
    {
        name : 'Range Rover',
        image : 'img/range.jpg',
        link : 'https://tr.motor1.com/news/434097/2021-range-rover-rover-sport/',
    },
    {
        name : 'Hundai Tucson',
        image : 'img/tucson.jpg',
        link : 'https://tr.motor1.com/news/443824/yeni-nesil-hyundai-tucson-cok-gosterisli/',
    }
]
var index = 0;
var slaytCount = models.length;
var interval;

var settings={
    duration : '1000',
    random : false
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})


function init(settings){

    var prev;
    interval=setInterval(function(){
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slaytCount);
            }while(index == prev)
            prev = index;
        }else{
            // artan index
            if(slaytCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration)
  

}



function showSlide(i){

    index = i;

    if (i<0) {
        index = slaytCount - 1;
    }
    if(i >= slaytCount){
        index =0;
    }

    document.querySelector('.card-title').textContent = models[index].name;

    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    
    document.querySelector('.card-link').setAttribute('href',models[index].link);
}



