const getTheTitles = require('./getTheTitles');
// const getTheAuthor = require('./getTheAuthor');

describe('getTheTitles', () => {
  const books = [
    {
      title: 'Book',
      author: 'Name',
    },
    {
      title: 'Book2',
      author: 'Name2',
    },
  ];

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book', 'Book2']);
  });
  // test('gets titles', () => {
  //   expect(getTheAuthor(books)).toEqual(['Name', 'Name2']);
  // });
});
