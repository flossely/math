function calculate() {
    var input = document.getElementById('calc').value;
    document.getElementById('inputPanel').value = input;
    var calc = input;
    if (calc.includes('x')) {
        var solve = nerdamer.solve(calc, 'x');
        var result = eval(solve);
    } else if (calc.includes('?')) {
        var expdel = calc.split('?');
        var leftpart = eval(expdel[0]);
        var rightpart = eval(expdel[1]);
        if (leftpart > rightpart) {
            var result = leftpart + '>' + rightpart;
        } else if (leftpart < rightpart) {
            var result = leftpart + '<' + rightpart;
        } else if (leftpart == rightpart) {
            var result = leftpart + '==' + rightpart;
        }
    } else {
        var result = eval(calc);
    }
    var output = result;
    document.getElementById('calc').value = output;
    document.getElementById('outputPanel').value = output;
    return output;
}