# Expletives
A list of bad words and some helper functions to check for them.

## Installation
npm install expletives

## Usage
```javascript
// Simple list of words
import { badWords } from 'expletives';
console.log("Every bad word you can think of", badWords);

// Check a string
import { hasBadWords } from 'expletives';

if (!hasBadWords('Hello World')) {
    console.log('Clean as a whistle');
}

if (hasBadWords('f4ck')) {
    console.log('Dirty as a doorknob');
}
```

## API
```typescript
// import any of these into your project as needed
const exports = {
    badWords: string
    badWordsArray: string[]
    minimalBadWordsArray: string[]
    hasBadWords: (string) => true,
    nazi: (string) => true,
    nword: (string) => true
};
```

## Contributions
Contributions welcome, please submit a PR and I'll review it.

#### Contribution Ideas
- Sensitive words and phrases that might not be outright offensive
- Group different kinds of offensive together

#### Note on Filtering by Word Match
"Bad words" implementations are prone to the [Scunthorpe Problem](https://en.wikipedia.org/wiki/Scunthorpe_problem) - please use with care