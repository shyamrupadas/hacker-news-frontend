import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId: number) => {
  return await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({data}) => data);
};

export const getStoryIds = async () => {
  return await axios
    .get(newStoriesUrl)
    .then(({ data }) => data);
};

export const getComment = async (commentId: number) => {
  return await axios
    .get(`${storyUrl + commentId}.json`)
    .then(({data}) => data);
};