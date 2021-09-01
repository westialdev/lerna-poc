Tamagotchi TDD Workshop - frontend
==================================

This TDD workshop exercise is focused on a usual frontend side use cases.

See https://docs.google.com/presentation/d/1e8D21sHkyLx16kdjPDyO2Da5D0mZqM3ynWyrnmS9knM/edit?usp=sharing

## Workshop from scratch ##

It consists on creating the source code from scratch, step by step. Check the example source code or extend it and collaborate by pulling requests, your point of view will be very welcome and helpful.

### Example source code ###

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

Create a new project from scratch.

```
mkdir /path/to/kata-tdd-tamagotchi-frontend
cd /path/to/kata-tdd-tamagotchi-frontend
npm init
npm install --save-dev mocha sinon assert
mkdir -p test/unit src
tree -I node_modules
```

### Test List ###

First step, create a test list.

- Ask whether a Tamagotchi is hungry.
- Feed a Tamagotchi.
- Make a Tamagotchi poop.

### Test rounds ###

Follow the red, green, refactor cycle and go on.

### Async/Await testing with filesystem ###

- Filesystem based API client implementation.

### Integration tests ###

- Presenter implementation, duplicate spec test file and replace presenter.
- API client implementation, duplicate spec test file and replace client.

## Author ##

Jaume Mila Bea <jmila@ext.leadtech.com>
