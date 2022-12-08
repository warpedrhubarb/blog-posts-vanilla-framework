export function getArticleHeader(item) {
  let arrayIndex;

  if (item.group[0]) {
    arrayIndex = "3";
  } else if (item.topic[0]) {
    arrayIndex = "2";
  } else if (item.tags[0]) {
    arrayIndex = "1";
  } else if (item.categories[0]) {
    arrayIndex = "0";
  }

  if (item._embedded["wp:term"][arrayIndex][0]["name"] &&
    item._embedded["wp:term"][arrayIndex][0]["link"]) {
    return {
      articleHeader: item._embedded["wp:term"][arrayIndex][0]["name"],
      articleHeaderLink: item._embedded["wp:term"][arrayIndex][0]["link"]
    }
  }

  return {
    articleHeader: "",
    articleHeaderLink: ""
  };
}
