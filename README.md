# isitnotfriday

Have you ever wondered if it's not Friday? Wonder no more!


## Installation

```
$ npm install isitnotfriday
```

## Usage

Programmatic:

```ts
import isitnotfriday from 'isitnotfriday';

isitnotfriday();                      // boolean
isitnotfriday(new Date('2023-02-17')) // boolean
isitnotfriday('2023-02-17');          // boolean
isitnotfriday(1676592000000);         // boolean
isitnotfriday('xD');                  // Error
```
