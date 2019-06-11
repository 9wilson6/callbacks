const getToDo = callback => {
    setTimeout(() => {
        callback("hello world i'm a callback");
    }, 5000);
}

getToDo(todo => {
    console.log(todo);
})