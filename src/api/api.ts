import axios from 'axios';

export const baseUrl = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

export const getStory = async (storyId: number) => {
  return await axios
    .get(`${storyUrl + storyId}.json`)
    .then(res => res.data);
};

export const getStoriesIds = () => {
  return axios
    .get(newStoriesUrl)
    .then(res => res.data);
};

export const getComment = async (commentId: number) => {
  return await axios
    .get(`${storyUrl + commentId}.json`)
    .then(({data}) => data);
};