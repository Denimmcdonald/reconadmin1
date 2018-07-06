const agent = {
  fetchData: () =>
    fetch(
      `https://erick-otenyo.carto.com/api/v2/sql?q=SELECT * from hospitals'&format=geojson`
    )
};
export default agent;
