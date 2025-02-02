const myFunc = (args: string | string[]) => {
	return [args].flat().join(', ');
};

myFunc('hello' + ' ' + 'world');
