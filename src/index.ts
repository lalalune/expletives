import badWords from './badwords'
import { nazi } from './nazi'
import { nword } from './nword'

const badWordsArray = badWords.trim().toLowerCase().split(', ').sort()

const badWordsArraySortedByLength = badWordsArray.sort((a, b) => b.length - a.length);

const minimalBadWordsArray = []
for (const badWord of badWordsArraySortedByLength) {
    let contains = false
    for (const minimalMatchString of minimalBadWordsArray) {
        if (badWord.includes(minimalMatchString)) {
            contains = true
            break
        }
    }
    if(!contains) minimalBadWordsArray.push(badWord)
}

function hasBadWords(inp: string) {
    if (nazi(inp) || nword(inp)) return true
    for (const matchString of minimalBadWordsArray) {
        if (inp.includes(matchString)) {
            return true
        }
    }
    return false
}

export {
    badWords,
    badWordsArray,
    minimalBadWordsArray,
    hasBadWords,
    nazi,
    nword
}