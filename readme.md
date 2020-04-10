# ensure-localhost

## Usage

Run

```
npx ensure-localhost
```

In a package where an environmental param named HOST is configured, either globally or through a .env file.

## Typical setup

Install as a dev dependency and add the following to your package.json `scripts`:

```json
  "prestart": "ensure-localhost"
```

It will then run whenever you run `npm start` and kill the process if hosts file not configured.
