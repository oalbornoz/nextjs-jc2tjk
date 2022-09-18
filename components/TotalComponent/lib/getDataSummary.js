export function getDataSummary(data) {
  return data?.reduce((acum, { value }) => acum + value, 0);
}
