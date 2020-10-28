import API from './config';
import { envs } from './../config/envs';

const getCharacters = async () => {
  const { data } = await API.get(
    `/published/dialogue_trees/${envs.dtrID}/characters.json`
  );
  return data;
};

const getCharacterByName = async (characterName) => {
  const { data } = await API.get(
    `/published/dialogue_trees/${envs.dtrID}/characters.json?name=${characterName}`
  );
  if (data.length > 0) {
    return data[0];
  }
  return null;
};

const getSuggestion = async (nodeId, extra_nodes = {}) => {
  const {
    data,
  } = await API.post(
    `/published/dialogue_trees/${envs.dtrID}/nodes/${nodeId}/suggestions.json?`,
    { extra_nodes }
  );
  return data;
};

const getSummary = async (nodeId, extra_nodes = {}) => {
  const {
    data,
  } = await API.post(
    `/published/dialogue_trees/${envs.dtrID}/nodes/${nodeId}/summarize.json?`,
    { extra_nodes }
  );
  return data;
};

const getNext = async (nodeId, context) => {
  const params = { context };
  const {
    data,
  } = await API.get(
    `/published/dialogue_trees/${envs.dtrID}/nodes/${nodeId}/next.json`,
    { params }
  );
  return data;
};

export {
  getCharacters,
  getCharacterByName,
  getSuggestion,
  getSummary,
  getNext,
};
