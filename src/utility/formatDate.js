export const formatDate = (data) => {
  const newDate = new Date(data);
  const date = newDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return date;
};
