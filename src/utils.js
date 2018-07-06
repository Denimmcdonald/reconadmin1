export const getFeatureCount = (data, category) => {
  if (category === 'all') {
    return data.features.length;
  } else {
    return data.features.filter(
      (feature) => feature.properties.category === category
    ).length;
  }
};

// export const getFeatureCountLast24Hours = (data, category) => {
//   if (category === 'all') {
//     return data.features.length;
//   } else {
//     return data.features.filter(
//       (feature) => feature.properties.category === category
//     ).length;
//   }
// };
