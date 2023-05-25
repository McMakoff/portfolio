const jc = (classes: (string | boolean | undefined)[]) => classes.filter(Boolean).join(' ');
export default jc;