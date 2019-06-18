# nodeXpress-boilerplate

Starter code for Node + Express server

My personal bare-minimum Node / Express setup. One can easily refactor and improve upon this, adding databases, middleware, etc.

## Development

### Running locally

```
yarn
yarn start
```

or

```
npm i
npm start
```

### Testing (Watch Mode)

```
yarn test:watch
```

## Things to Consider

- No view engine. No `public` folder.
- Add a file named `.env` to the root directory and store your environment variables in there. You can customize the port number as such `PORT=3000`.
- Uses Jest for testing. Initial tests can be accessed in the `/__tests__` folder.
