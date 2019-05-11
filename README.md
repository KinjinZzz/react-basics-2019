### Deploy create-react-app to GitHub pages:

1. Open your package.json file and add homepage property.

```
"homepage":"https://yourusername.github.io/repository-name"
```

Replace the above url with your GitHub username and repository name.

2. Next, we need to install a package called gh-pages.

```
npm install --save gh-pages
```

3. Add to deploy scripts in your `package.json`

```
"scripts":{
 "predeploy": "npm run build",
 "deploy": "gh-pages -d build",
}
```

Once you successfully deployed open your GitHub code repository and click on settings tab if you scroll down you can see a GitHub Pages then choose a branch to gh-pages.
