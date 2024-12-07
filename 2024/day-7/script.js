fetch("input")
    .then((res) => res.text())
    .then((input) => {
        input = input.split("\n");
        input.pop();

        var test_values = [];
        var test_inputs = [];
        var calibration_value = 0;

        for (let i = 0; i < input.length; i++) {
            test_values.push(input[i].split(": ")[0]);
            test_inputs.push(input[i].split(": ")[1].split(" "));
        }

        function test(index) {
            var operator_count = test_inputs[index].length - 1
            var possibilities = Math.pow(2, operator_count)
            var tests = []
            var correct_possibibilites = 0;

            console.log(possibilities)
            console.log(test_inputs[index])

            console.log(possibilities * operator_count)

            for (let i = 0; i < possibilities; i++) {
                var current_test = []
                // console.log(i % 3)

                for (let j = 0; j < operator_count; j++) {
                    
                    console.log(current_test)
                }

            }

        }

        test(0)

        // console.log(test_values)
        // console.log(test_inputs)

    })
    .catch((e) => console.error(e));