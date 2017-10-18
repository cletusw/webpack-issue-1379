# Minimal reproduction case for https://github.com/webpack/webpack/issues/1379

## Steps to reproduce

1. `npm install`
2. `node index.js` (could also use webpack-dev-server here since it exhibits same issue)
3. Edit and save `./src/nested/no.js`
3. Notice webpack recompiles, even though that file isn't loaded anywhere
5. `node_modules/.bin/webpack --watch`
3. Edit and save `./src/nested/no.js` again
6. Notice webpack correctly ignores the changes to that file and doesn't recompile
