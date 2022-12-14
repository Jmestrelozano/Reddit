import {
  DataPublication,
  Publication,
} from '../domain/interfaces/slices/publicationsInterface';

export const createdAddaptedPublication = (publication: DataPublication) => {
  const formattedPublication: Publication = {
    author: publication.author,
    title: publication.title,
    numComments: publication.num_comments,
    created: publication.created,
    score: publication.score,
    url: `https://www.reddit.com/${publication.permalink}`,
    image: publication.url,
  };

  return formattedPublication;
};
