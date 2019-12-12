module.exports = ({ config }) => {
  config.module.rules.push(
    {
      test: /\.(ts|tsx)$/,
      use: ['ts-loader', 'react-docgen-typescript-loader'],
    }
  );
  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
