import isitfriday from 'isitfriday';

type Candidate = ConstructorParameters<typeof Date>[0];

const isitnotfriday = (candidate?: Candidate): boolean => {
    return !isitfriday(candidate);
};

export default isitnotfriday;