## Repro for lavamoat-browserify strange char in bundle 

stack

- browserify
- lavamoat-browserify
- typescript    
- tsify
- babelify

### Steps to reproduce

- clone repo
- yarn install
- yarn build:browserify => open browserify.html in the browser => react app works fine
- yarn build:lavamoat => open lavamoat.html in the browser => react app crashes
- open chrome console and see error

http://recordit.co/o6pNMzFHo6
