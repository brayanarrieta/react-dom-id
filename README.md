# React-Dom-Id

Simple helper and hook to generate id for the react components

TODO:

- Add better documentation

## Install

```bash
npm i --save react-dom-id
```

## Usage

### Hook (React functional components)

```javascript
import React from "react";
import { useComponentIdGenerator } from "react-dom-id";

const RadioButton = ({ children, ...rest }) => {
  const radioButtonId = useComponentIdGenerator();

  return (
    <div>
      <label htmlFor={radioButtonId}>{children}</label>
      <input id={radioButtonId} type="radio" {...rest} />
    </div>
  );
};
```

### Helper (React class components)

```javascript
import React from "react";
import { idGenerator } from "react-dom-id";

class RadioButton extends React.Component {
  render() {
    const radioButtonId = idGenerator();
    return (
    <div>
      <label htmlFor={radioButtonId}>{children}</label>
      <input id={radioButtonId} type="radio" {...rest} />
    </div>
  );
  }
}
```

