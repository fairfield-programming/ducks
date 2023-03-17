# ![Duckgen](https://github.com/fairfield-programming/ducks/blob/master/.github/logo.png?raw=true)

![Code Grade](https://img.shields.io/badge/dynamic/json?color=green&label=Grade&query=grade&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffairfield-programming%2Fducks%2Fmaster%2F.github%2Fmetrics.json)
![Dependency Count](https://img.shields.io/badge/dynamic/json?color=blue&label=Dependencies&query=indirectDependenciesCount&url=https%3A%2F%2Fraw.githubusercontent.com%2Ffairfield-programming%2Fducks%2Fmaster%2F.github%2Fmetrics.json)

## Download

Since the Fairfield Programming Association's duck generator is built on top of node.js and npm, you need to have both of those installed as prerequisites. After that, to download the project, you have to run the below command. From there, you can include it in your node.js code by using the import or require system.

```bash
npm install duckgen
```

## Features

We didn't want to use people's faces for the profile pictures. This was for three reasons: we didn't want to pay for hosting the image files, we were scared of what people would upload, and since our main audience is minors, we didn't want their faces to be publicly available. To solve these problems, we decided to use rubber duck avatars instead of photos. Users are able to customize their ducks by adding glasses, hats, items, etc (and they can even set their own colors).

<p align="center">

<img width="100" src="https://fairfield-programming.herokuapp.com/duck/10001000007000053/30" alt="Real Cool Duck">
<img width="100" src="https://fairfield-programming.herokuapp.com/duck/10102000005000045/30" alt="Real Red Duck">
<img width="100" src="https://fairfield-programming.herokuapp.com/duck/10603000000000004/30" alt="Real Blue Duck">
<img width="100" src="https://fairfield-programming.herokuapp.com/duck/10001000000000011/30" alt="Real Outline Duck">
<img width="100" src="https://fairfield-programming.herokuapp.com/duck/10000000006000012/30" alt="Real Brown Duck">

</p>

## How to Use

After running `npm install duckgen`, you can use it in your code using one of the two below systems. The API is very simple and you can check out the code to the project for the API reference.

**ES6**

```javascript

import duckgen from "duckgen";

```

**Node.js Require**

```javascript
const duckgen = require("duckgen");
```

## Contributing

If you simply star the repo, this helps us out tremendiously. Past that, if you share this repo with your friends, that helps a lot too. If you are feeling super generous, then you can find some issues that you have with the project and try to help us with them.

<p align="center">

<a href="https://github.com/fairfield-programming/backend-server/issues?q=label%3A%22good%20first%20issue%22">
<img alt="GitHub labels" src="https://img.shields.io/github/labels/fairfield-programming/backend-server/good%20first%20issue">
</a>
<a href="https://github.com/fairfield-programming/backend-server/issues?q=label%3A%22help+wanted%22">
<img alt="GitHub labels" src="https://img.shields.io/github/labels/fairfield-programming/backend-server/help%20wanted">
</a>
<a href="https://github.com/fairfield-programming/backend-server/issues?q=label%3A%22bug%22">
<img alt="GitHub labels" src="https://img.shields.io/github/labels/fairfield-programming/backend-server/bug">
</a>
<a href="https://github.com/fairfield-programming/backend-server/issues?q=label%3A%22enhancement%22">
<img alt="GitHub labels" src="https://img.shields.io/github/labels/fairfield-programming/backend-server/enhancement">
</a>

</p>

To start helping, you can click some of the above labels to jump to the pages with issues. Or, you can submit an issue by clicking the last button.
