const db = require('../data/dbConfig.js');

const { insert } = require('./kidsModel.js');

describe('testing kids model', function(){
    describe('insert()', function(){
        beforeEach(async () => {
            await db('kids').truncate();
        })

        it('should insert a child', async function(){
          await insert({name: "Wyatt"})
          await insert({name:"Max"})

          const hobbits =await db("kids");

          expect(hobbits).toHaveLength(2);
          expect(hobbits[0].name).toBe("Wyatt");
          expect(hobbits[1].name).toBe("Max");
        })
    })
})