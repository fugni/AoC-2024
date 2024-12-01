fetch("input")
    .then((res) => res.text())
    .then((input) => {
        input = (input.split(/   |\n/));

        var list_left = [];
        var list_right = [];

        for (let i = 0; i < input.length - 1; i++) {
            if (i % 2) {
                list_right.push(input[i])
            } else {
                list_left.push(input[i])
            }
        }
        
        list_left.sort(function(a, b) {return a - b});
        list_right.sort(function(a, b) {return a - b});

        var difference = 0;

        for (let i = 0; i < list_left.length; i++) {
            difference += Math.abs(list_left[i] - list_right[i]);
        }

        console.log(difference)
    })
    .catch((e) => console.error(e));