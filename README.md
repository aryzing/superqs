# @aryzing/superqs

Create and parse URL-safe query strings from arbitrary values.

Install with

```shell
npm i @aryzing/superqs
# or
yarn add @aryzing/superqs
# or
pnpm i @aryzing/superqs
# or
bun add @aryzing/superqs
```

## Usage

```ts
import { stringify, parse } from "@aryzing/superqs";

// Create a value of any type. This example uses an object, although any value
// can be used.
const data = {
  bool: true,
  undef: undefined,
  nullVal: null,
  date: new Date(),
  hugeNum: 0xffffffffffffffffffffn,
  bin: new Uint8Array([42, 24]),
};

// Create a URL-safe string representing the data above.
const stringifiedData = stringify(data);

// Use the stringified data to construct a URL.
const url = new URL(`https://example.com?data=${stringifiedData}`);

// Reconstruct the original data.
const params = new URLSearchParams(url.search);
const stringifiedDataParam = params.get("data");
const parsedData = parse(stringifiedDataParam);

// The `data` and `parsedData` values are equal.
expect(parsedData).toEqual(data); // true
```

## Use cases

- Sending data to a browser extension popup.
- Creating shareable links containing application state.
- Passing non-text data to custom elements.

# Development

Get started with

```bash
bun install
```

Run tests with

```bash
bun run test
```

Build the package with

```bash
bun run build
```
