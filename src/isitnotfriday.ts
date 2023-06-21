import isitfriday from 'isitfriday';

export const THE_DAY = 5;

type Candidate = ConstructorParameters<typeof Date>[0];

const isitnotfriday = (candidate?: Candidate): boolean => {
    return !isitfriday(candidate);
};

export default isitnotfriday;