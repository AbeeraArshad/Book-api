//Given that I visit the site, when I first start, I expect my list to be empty.
const Mm = require('./ReadingList');


test('Given That I visit The site ,when I first start,i expect list to be empty.',()=>{

    expect(Mm.getbook()).toBe(0);
    
});


test('Given that I have an empty list, when I add the first book to my list then I expect numberRead to return 1.',()=>{

var b = new Mm.meriBook("harry Potter","RK Rolling");

    Mm.addbook(b);

    expect(Mm.getbook()).toBe(1);
    
})

test('Given that I have an empty list, when I add additional books to the list I expect the numberRead to return the total number of books in my list.',()=>{

    var b = new Mm.meriBook("harry Potter","RK Rolling");
    var c = new Mm.meriBook("Luicfer Moring Start","God Ailen")

    Mm.addbook(b);
    Mm.additionalbook(c);

    expect(Mm.getbook()).toBe(3);

})