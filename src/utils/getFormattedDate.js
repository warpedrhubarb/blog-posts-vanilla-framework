export function getFormattedDate(date) {

  const formattedDate = new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(new Date(date));

  return formattedDate;
}
