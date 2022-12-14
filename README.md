# Wichtel Pro

**THIS IS CURRENTLY A WORK IN PROGRESS**

The web app for professional "Wichtel".

This web app is a quick fix to handle out "Secret Santa" list creation process.

## Dev setup

- run `nvm use && yarn`
- run `yarn start` to run the app locally ([http://localhost:3000](http://localhost:3000))

## Deployment

This app can be deployed on github pages:

```shell
yarn deploy
```

**NOTE:**
This will not work out of the box for you, since it is configured for my github account.
You will need to adjust the `homepage` in your `package.json` if you want to deploy it on your own github page.

## Concept

This is the current plan but may (and will) change along the way. It's just a place to accumulate my first ideas.

### No "Backend"

This app should be a simple (ish) solution and I want to be able to host it on github pages. Therefore it will only be a
React app without a database in the background. This does have some implications:

- We cannot save anything on a server
- Generated links (e.g. the ones we send to the participants to let them know who is their "target") must contain all
  the necessary information
- We have to trust the person creating the list (since they have all the information)

### The Process

1. The list creator (Charly) opens the app and creates a new list:
   1. Generate a secret (can happen in background)
   2. Charly adds the participants
   3. the app picks random targets for everyone
   4. the app creates a link for every participant
2. The Charly sends the links to the participants
3. each participant clicks on their link and sees their target

### Security

- This app does not save any user data
- The creator of the list could cheat and check who got whom
- The creator of the list could generate the list again and again until they get the list they want
- The creator of the list can generate any links they want or send everyone the same link (so everyone will have to buy
  a present for the creator for example)
- The participants can only see their own target
- The parameters in the link are "encoded" (the key is **not** a secret), so it is not obvious what it says

### Improvements

- [ ] Allow blacklisting (e.g. Peter should not get Mary)
