//Given that I visit the site, when I first start, I expect my list to be empty.

const getbook = require('./ReadingList');

test('Given That I visit The site ,when I first start,i expect list to be empty.',()=>{

    expect(getbook()).toBe(0);
    
})



