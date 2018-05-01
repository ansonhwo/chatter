const r = require('rethinkdb');

let connection = null;
const options = {
  db: 'chatter',
  host: 'localhost',
  port: 28015
};

(async () => {
  try {
    const connection = await r.connect(options);

    const createTable = await r
      .db('chatter')
      .tableCreate('authors')
      .run(connection);

    console.log(`\nTable created: ${JSON.stringify(createTable, null, 2)}`);

    const insert = await r
      .table('authors')
      .insert([
        {
          name: 'William Adama',
          tv_show: 'Battlestar Galactica',
          posts: [
            {
              title: 'Decommissioning speech',
              content: 'The Cylon War is long over...'
            },
            {
              title: 'We are at war',
              content: 'Moments ago, this ship received word...'
            },
            {
              title: 'The new Earth',
              content: 'The discoveries of the past few days...'
            }
          ]
        },
        {
          name: 'Laura Roslin',
          tv_show: 'Battlestar Galactica',
          posts: [
            {
              title: 'The oath of office',
              content: 'I, Laura Roslin, ...'
            },
            {
              title: 'They look like us',
              content: 'The Cylons have the ability...'
            }
          ]
        },
        {
          name: 'Jean-Luc Picard',
          tv_show: 'Star Trek TNG',
          posts: [
            {
              title: 'Civil rights',
              content: 'There are some words I have known since...'
            }
          ]
        }
      ])
      .run(connection);

    console.log(`Inserted data: ${JSON.stringify(insert, null, 2)}`);

    const all = await r.table('authors').run(connection);
    const array = await all.toArray();

    console.log(`\nAll authors data: ${JSON.stringify(array, null, 2)}`);
  } catch (err) {
    console.log(`Error: ${JSON.stringify(err, null, 2)}`);
  }
})();
