# familiada
Web application to play Familiada with your friends (https://en.wikipedia.org/wiki/Familiada).

## Demo
Main display: http://familiada.herokuapp.com

Control panel: http://familiada.herokuapp.com/control

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
