# react-dom-id

Library to generate unique and deterministic ids for React components.
## Install

### NPM

```
npm i --save react-dom-id
```

### Yarn

```
yarn add react-dom-id
```

## Usage

### useId Hook (React Functional Components)

**Hook** that returns a unique and deterministic id per component or element.

```javascript
import React from "react";
import { useId } from "react-dom-id";

const RadioButton = ({ children, ...rest }) => {
  const radioButtonId = useId('my-prefix');

  return (
    <div>
      <label htmlFor={radioButtonId}>{children}</label>
      <input id={radioButtonId} type="radio" {...rest} />
    </div>
  );
};
```
## API

### useId(namespacePrefix?: string | undefined): string | null;

| **Arguments**   | **Type** | **Required?** | **Default** | **Description**                          |
|-----------------|----------|---------------|-------------|------------------------------------------|
| namespacePrefix | string   | No            | app         | Allows provide a custom namespace prefix |