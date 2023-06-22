const getTodosAlso = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/10')
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
}

getTodosAlso()

