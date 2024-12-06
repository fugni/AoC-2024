fetch("input")
    .then((res) => res.text())
    .then((input) => {
        const regex = /mul\(\-?\d+,\-?\d+\)|do\(\)|don't\(\)/g
        const instructions = input.match(regex);

        let enabled = 1
        let result = 0;

        function handleInstructions(instruction) {
            switch (instruction) {
                case "do()":
                    enabled = 1;
                    break;
                case "don't()":
                    enabled = 0;
                    break;
                default:
                    var numbers = (instruction.slice(4, instruction.length - 1)).split(",");
                    numbers[0] = parseInt(numbers[0]), numbers[1] = parseInt(numbers[1]);
                    if (enabled === 1) {
                        var multiplied = numbers[0] * numbers[1]
                        result += multiplied;
                    }
                    break;
            }
        }

        instructions.forEach(instruction => {
            handleInstructions(instruction)
        });

        console.log(result)
    })
    .catch((e) => console.error(e));