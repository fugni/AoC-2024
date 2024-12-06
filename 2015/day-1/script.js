fetch("input")
    .then((res) => res.text())
    .then((input) => {
        input = input.split("")
        
        let floor = 0
        let first_basement = 0

        for (let i = 0; i < input.length; i++) {
            if (input[i] === "(") {
                floor++
            } else {
                floor--
            }
            
            if (floor < 0 && first_basement === 0) {
                console.log(i + 1)
                first_basement = 1
            }
        }

        console.log(floor)
    })
    .catch((e) => console.error(e));