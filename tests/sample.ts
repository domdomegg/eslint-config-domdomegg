const x = 'this is an example';

const myFunc = (args: string | string[]) => {
  return [args].flat().join(', ') + x;
};

for (let i = 0; i < 10; i++) {
  myFunc(x);

  // eslint-disable-next-line no-plusplus
  i++;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const myUnused = 'thing';

const correctTemplate = `${x}thing${x}`;

// eslint-disable-next-line prefer-template
const shouldBeTemplate = x + 'thing' + x;

// eslint-disable-next-line @typescript-eslint/indent
  let indentedWrong = 'true';
// eslint-disable-next-line @typescript-eslint/indent
    indentedWrong = 'still true';
// eslint-disable-next-line @typescript-eslint/indent
      indentedWrong = 'even worse';

// eslint-disable-next-line @typescript-eslint/space-infix-ops, no-multi-spaces, no-whitespace-before-property
const spacing = (1 +  2+3+4) .toString();

// Just to use things
myFunc([correctTemplate, shouldBeTemplate, indentedWrong, spacing]);

export default myFunc;
