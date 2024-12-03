fetch("input")
    .then((res) => res.text())
    .then((input) => {
        const regex = /mul\(\-?\d+,\-?\d+\)/g
        const valid_muls = input.match(regex);

        let result = 0;

        valid_muls.forEach(mul => {
            var numbers = (mul.slice(4, mul.length - 1)).split(",")
            var multiplied = parseInt(numbers[0]) * parseInt(numbers[1])
            result += multiplied;
        });

        console.log(result)
    })
    .catch((e) => console.error(e));