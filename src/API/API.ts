import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;

export const getStoryIds = async () => {
  return await axios.get(newStoriesUrl)
    .then(({ data }) => data);
}