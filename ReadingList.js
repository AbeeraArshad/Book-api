//empty case
var myBookList = new Array();

class meriBook{
    constructor(title,author){
        this.title = title
        this.author = author
    }
}

function getbook(){
    return myBookList.length;
}

//eturn 1 in this case


function addbook(b){
    myBookList.push(b);
}

function additionalbook(c){
    myBookList.push(c);
}


module.exports = {
    getbook,
    addbook,
    additionalbook,
    meriBook
}

