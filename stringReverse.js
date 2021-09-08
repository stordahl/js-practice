// Reverse a string

const args = process.argv.slice(2)[0];

const reverse = (param) => {
  let length = param.length;

  let hold = [];

  for (let i = length; i !== -1; i--) {
    hold.push(param[i]);
  }

  console.log(hold.join(""));
  return hold.join("");
};

reverse(args);
