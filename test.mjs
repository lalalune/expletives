import { hasBadWords } from './dist/index.js';

// Shouldn't be bad
if (!hasBadWords('Hello World')) {
    console.log('Hello World Test: PASSED');
} else {
    console.log('Hello World Test: FAILED');
}

// Should be bad
if (hasBadWords('f4ck')) {
    console.log('Profanity Test: PASSED');
} else {
    console.log('Profanity Test: FAILED');
}