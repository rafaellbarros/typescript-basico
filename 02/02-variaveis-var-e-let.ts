function showWithVar() {
    var text = 'rafael barros';
    if (true) {
        var text = 'text';
    }
    console.log(text);
}

function showWithLet() {
    let text = 'rafael barros';
    if(true) {
        let text = 'text';
    }
    console.log(text);
}

showWithLet();