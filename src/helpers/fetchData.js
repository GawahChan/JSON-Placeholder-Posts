function fetchData() {
    return (
        fetch('https://jsonplaceholder.typicode.com/posts')
    );
}

export default fetchData;