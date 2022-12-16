import {createdAddaptedPublication} from '../../src/adapters/createAddaptedPublication';

describe('publications information adapter', () => {
  test('should get the same adapter structure', () => {
    const link = 'https://www.reddit.com/';
    const formattedPublication = {
      author: 'jorge',
      title: 'este es mi post',
      numComments: 0,
      created: 122321321,
      score: 0,
      url: `https://www.reddit.com/${link}`,
      image: 'image.jpg',
    };

    const data: any[] = [
      {
        author: 'jorge',
        thumbnailWidth: 0,
        likes: null,
        title: 'este es mi post',
        num_comments: 0,
        created: 122321321,
        score: 0,
        permalink: 'https://www.reddit.com/',
        url: 'image.jpg',
      },
    ];

    const [newData] = data.map(d => createdAddaptedPublication(d));

    expect(newData).toMatchObject(formattedPublication);
  });
});
