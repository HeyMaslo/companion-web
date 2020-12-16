import API from './config';

const getCharacters = async (dtreeId) => {
  const { data } = await API.get(
    `/published/dialogue_trees/${dtreeId}/characters.json`
  );
  return data;
};

const getToxicity = async (dtreeId, nodeId, prompt) => {
  const {
    data,
  } = await API.post(
    `/published/dialogue_trees/${dtreeId}/nodes/${nodeId}/toxicity.json`,
    { prompt }
  );
  return data;
};
// very last minute hack, this should 
// const getToxicity = async (prompt) => {
//   const { data } = await API.get(
//     `/toxic_check.json?prompt=${prompt}`
//   );
//   return data;
// };

const getCharacterByName = async (dtreeId, characterName) => {
  const { data } = await API.get(
    `/published/dialogue_trees/${dtreeId}/characters.json?name=${characterName}`
  );
  if (data.length > 0) {
    return data[0];
  }
  return null;
};

const getSuggestion = async (dtreeId, nodeId, extra_nodes = {}) => {
  const {
    data,
  } = await API.post(
    `/published/dialogue_trees/${dtreeId}/nodes/${nodeId}/suggestions.json?`,
    { extra_nodes }
  );
  return data;
};

const getSummary = async (dtreeId, nodeId, extra_nodes = {}) => {
  const {
    data,
  } = await API.post(
    `/published/dialogue_trees/${dtreeId}/nodes/${nodeId}/summarize.json?`,
    { extra_nodes }
  );
  return data;
};

const getNext = async (dtreeId, nodeId, context) => {
  const params = { context };
  const {
    data,
  } = await API.get(
    `/published/dialogue_trees/${dtreeId}/nodes/${nodeId}/next.json`,
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
  getToxicity
};
