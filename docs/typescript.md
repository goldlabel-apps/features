#### TypeScript

A TypeScript usage pattern is emerging. It currently uses definition files like this `./src/features/Features/type.ts.d` which use this syntax

```javascript
export type FeaturesKeyValue = {
  key: string;
  value: any;
}
```

These types can then be imported and used in the project like this 
`./src/features/Features/Shared/store/slice.ts`

```javascript
import {FeaturesKeyValue} from "../types";

...
reducers: {
    setSharedKey: (state, action: PayloadAction<FeaturesKeyValue>) => {
```