menu = false;

function chamaMenu(){
    if(!menu){
        document.getElementById('menuInvisivel').classList.remove('menuInvisivel');
        document.getElementById('menuInvisivel').classList.add('menuVisivel');
        menu = true;
    }else{
        document.getElementById('menuInvisivel').classList.remove('menuVisivel');
        document.getElementById('menuInvisivel').classList.add('menuInvisivel');
        menu = false;
    }
}