const addSlashes = (string) => {
    return string.replace(/\\/g, '\\\\').
        replace(/\u0008/g, '\\b').
        replace(/\t/g, '').
        replace(/\n/g, '').
        replace(/\f/g, '').
        replace(/\r/g, '').
        replace(/'/g, '\\"').
        replace(/"/g, '\\"');
  }

module.exports = addSlashes;