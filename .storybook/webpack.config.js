// module.exports = (baseConfig, env) => {
//   const config = { ...baseConfig.config };

//   // Overwrite .css rule
//   const cssRule = config.module.rules.find(rule => rule.test && rule.test.toString() === '/\\.css$/');
//   if (cssRule) {
//     cssRule.exclude = /\.component\.css$/;
//   }

//   // Add .scss rule
//   config.module.rules.unshift({
//     test: /\.scss$/,
//     loaders: ['sass-loader'],
//   });

//   return config;
// };
