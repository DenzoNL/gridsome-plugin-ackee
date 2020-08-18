# gridsome-plugin-ackee

> Ackee analytics plugin for Gridsome.

## Install

- `yarn add gridsome-plugin-ackee`
- `npm install gridsome-plugin-ackee`

## Usage

```js
module.exports = {
  plugins: [
    {
      use: 'gridsome-plugin-ackee',
      options: {
        domain: 'https://ackee.example.com',
        domainId: '12345-67890-12345-67890'
      }
    }
  ],
}
```