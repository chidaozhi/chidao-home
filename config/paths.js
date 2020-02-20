const path = require('path');
const fs = require('fs');
const url = require('url');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
const envPublicUrl = process.env.PUBLIC_URL;
const getPublicUrl = appPackageJson =>
  envPublicUrl || require(appPackageJson).homepage;

function ensureSlash(path, needsSlash) {
    const hasSlash = path.endsWith('/');
    if (hasSlash && !needsSlash) {
        return path.substr(path, path.length - 1);
    } else if (!hasSlash && needsSlash) {
        return `${path}/`;
    } else {
        return path;
    }
}

function getServedPath(appPackageJson) {
    const publicUrl = getPublicUrl(appPackageJson);
    const servedUrl =
        envPublicUrl || (publicUrl ? url.parse(publicUrl).pathname : '/');
    return ensureSlash(servedUrl, true);
}

module.exports = {
    appIndexJs: resolveApp('src/index.js'),
    appSrc: resolveApp('src'),
    appPackageJson: resolveApp('package.json'),
    publicUrl: getPublicUrl(resolveApp('package.json')),
    appNodeModules: resolveApp('node_modules'),
    appPublic: resolveApp('public'),
    appHtml: resolveApp('public/index.html'),
    servedPath: getServedPath(resolveApp('package.json')),
};