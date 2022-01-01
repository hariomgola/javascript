/**
 # Install dependencies
  - npm install gh-pages --save-dev
  - npm install --save gh-pages
 # package.json
  - "homepage": "http://hariomgola.github.io/javascript"
  - "scripts": {
                //...
                "predeploy": "npm run build",
                "deploy": "gh-pages -d build"
                }

 # Deploy the code
  - npm run deploy
 */