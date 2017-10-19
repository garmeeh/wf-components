# Workflow Components

[![Greenkeeper badge](https://badges.greenkeeper.io/garmeeh/wf-components.svg)](https://greenkeeper.io/)

This repo has been set up for the purpose of using it is a playground for developing and publishing React components to npm.

## Getting Started
```
git clone git@github.com:garmeeh/wf-components.git
npm install -g lerna
cd wf-components
yarn install
```

More info on [Lerna](https://lernajs.io/)

## Scripts
These can be run using yarn or npm. I use yarn.

- To start a development environment run:
```
yarn start
```

- To easily install all the dependencies in your individual packages at once run:
```
yarn bootstrap
```

- Run all your packages tests and generate coverage report:
```
yarn test
```

- To export your storybook as a static app:
```
yarn build-storybook
```

- It will be placed in `.out/` To test locally after export:
```
cd .out
python -m SimpleHTTPServer
```

- Create a new release of the packages that have been updated. Prompts for a new version and updates all the packages on git and npm:
```
yarn publish
```


This project is powered by Lerna so all [Lerna commands](https://lernajs.io/) are also available.

## Creating New Packages
...
