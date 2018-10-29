# familiada
Web application to play Familiada with your friends (https://en.wikipedia.org/wiki/Familiada).

## Demo
Go to http://familiada.herokuapp.com. Open 'main display' and 
'control panel' links in two separate tabs.

## Develop
`npm install && npm start`

## Deploy
Following [these instructions](https://angular-fullstack.github.io/generators/heroku/):
```
gulp build
cd dist/
git init
heroku git:remote -a familiada
cd ..
gulp buildcontrol:heroku
```
