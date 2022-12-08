module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        root: ["./src"],
        
        alias: {
          "screens":"./src/screens",
          "context":"./src/context",
          "components":"./src/components",
          "database":"./src/database",
          "interfaces":"./src/interfaces",
          "utils":"./src/utils",
          "helper":"./src/helper",
          "assets":"./src/assets",
          "src":"./src/*",
          
        },
      },
    ],
    
    //'@babel/plugin-proposal-export-namespace-from',
    //'react-native-reanimated/plugin',
    ],
  };
};
