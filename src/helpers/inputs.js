const inputs = (inputValue) => {
    const input = []
    const allInputs = inputValue.includes(",") ? inputValue.split(",") : [inputValue];
    allInputs.map(string => input.push(Number(string)));

    return input;

}

export default inputs;