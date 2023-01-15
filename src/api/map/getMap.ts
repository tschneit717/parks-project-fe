export const getMap = async (key) => {
  const map = await fetch(`https://www.bing.com/api/maps/mapcontrol?callbackGetMap&key=${key}`)
    .then((res) => res.json())
    .then(
      (result) => {
        return { isLoaded: true, items: result.resourceSets };
      },
      (error) => {
        return { isLoaded: true, error };
      }
    );
    return  map
};