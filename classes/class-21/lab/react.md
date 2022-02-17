# REACT

## Steps

1. Create a new repo on Github called `react-front-end` , then set it up based on the following structure.

```text
├── __tests__
│   ├── App.test.js
├── public
│   └── index.html
├── src
│   ├── index.js
│   └── App.jsx
└── package.json
├── .eslintrc.json
└── .gitignore
```

2. Work on a `non-main` branch.
3. After completing the lab, create a PR from your `non-main` branch to `main` then merge your code.
4. Deploy your server on Heroku from `main` branch.

## Lab Requirements

- Create a component called `Person` which will take a persons name, age, gender.
- In the component create a form where the user can change these information.
- The new info should be rendered in the browser after the change when the form is submitted.
- When the form is submitted, in addition to the data being rendering in the webpage, we need to send an axios post request to our `/person` route in our backend.
- The response from the POST request should render the new age in the webpage.
- Add github action workflow to your repo for the React app and make sure it passes all tests.

## Submission Instructions

- Submit your Github repo link and the deployed Netlify link.
