export const filterNews = (data, length) => {
  const filterNews = data.filter((item, index) => {
    // console.log(item);
    if (item.author && item.urlToImage) {
      return item;
    }
  });

  // console.log(filterNews);

  return filterNews.slice(0, length);
};
