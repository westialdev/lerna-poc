Tamagotchi TDD Workshop - frontend
==================================

This TDD workshop exercise is focused on a usual frontend side use cases.

See https://docs.google.com/presentation/d/1e8D21sHkyLx16kdjPDyO2Da5D0mZqM3ynWyrnmS9knM/edit?usp=sharing

## Workshop from scratch ##

It consists on creating the source code from scratch, step by step. Although you can base your approach pon the current project state as an example.

## Example source code ##

### Install and usage ###

Installing and running the unit test scenarios only as follows:

```
npm install
npm test
```
Running all test scenarios, unit and integration ones as follows:

```
npm run fulltests
```

## Notes for workshop ##

### Commands ###

```
npm init
npm install --save-dev mocha sinon assert
mkdir -p test/unit src
tree -I node_modules
```

### Test List ###

- Ask whether a Tamagotchi is hungry.
- Feed a Tamagotchi.
- Make a Tamagotchi poop.

### Test rounds ###

Red, green, refactor.

### Async/Await testing with filesystem ###

- Filesystem based API client implementation.

### Integration tests ###

- Presenter implementation, duplicate spec test file and replace presenter.
- API client implementation, duplicate spec test file and replace client.

## Author ##

Jaume Mila Bea <jmila@ext.leadtech.com>
