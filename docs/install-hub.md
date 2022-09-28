## Install to HUB 

**New dependencies** 

Installing Features to HUB and merging the code into staging is straightforward and will only required once. However, there are a few extra dependencies we'll need to add and NPM is currently causing issues in HUB dependencies whereby the `--force` flag is usually needed. 

This is not ideal. The solution which finally worked for me was to use [yarn](https://yarnpkg.com) instead of NPM.. The `package.json` file has changed so simply running `npm install` _should just work_. But it probably won't.

  - [@types/mocha](https://www.npmjs.com/package/@types/mocha)
  - [style-loader](https://www.npmjs.com/package/style-loader)
  - [css-loader](https://www.npmjs.com/package/css-loader)
  - [@types/jest](https://www.npmjs.com/package/@types/jest) 
  - [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit)

```bash
yarn add @reduxjs/toolkit @types/jest @types/mocha style-loader css-loader --registry https://registry.npmjs.org
```
**Copy source to project**

**Wire up Features in HUB**
    - Add redux store `./src/`
    - Add component

**Verify install**

The HUB frontend should now be running on local:8080 and look like this...

![Features](./media/hub-install-success.jpg)

