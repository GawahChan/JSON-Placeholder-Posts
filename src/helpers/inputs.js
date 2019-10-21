const inputs = (inputValue) => {
    const input = []
    const allInputs = inputValue.includes(",") ? inputValue.split(",") : [inputValue];
    
    allInputs.filter((item, index) => allInputs.indexOf(item) === index)
        .map(string => input.push(Number(string)));

    console.log("input", input);
    return input;

}

export default inputs;