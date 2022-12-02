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

