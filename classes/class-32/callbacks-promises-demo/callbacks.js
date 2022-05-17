function change() {

    console.log('hi 1');

    setTimeout(function cb() {
        console.log('hi 2');
    },3000);
    
    console.log('hi 3');
}
