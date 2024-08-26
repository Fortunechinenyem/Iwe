export const formatDate = (date, format = "yyyy-mm-dd") => {
  const d = new Date(date);
  const yyyy = d.getFullYear();
  const mm = ("0" + (d.getMonth() + 1)).slice(-2);
  const dd = ("0" + d.getDate()).slice(-2);

  if (format === "yyyy-mm-dd") {
    return `${yyyy}-${mm}-${dd}`;
  }

  return `${dd}-${mm}-${yyyy}`;
};
