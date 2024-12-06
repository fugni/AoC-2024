fetch("input")
    .then((res) => res.text())
    .then((input) => {
        input = input.split("")
        console.log(input);

        let delivered_presents = {}

        let santa_x = 0
        let santa_y = 0

        let robo_santa_x = 0
        let robo_santa_y = 0

        let turn = "santa"

        for (let i = 0; i < input.length; i++) {
            if (turn === "santa") {
                switch (input[i]) {
                    case "^":
                        givePresent(santa_x, santa_y)
                        santa_y += 1
                        givePresent(santa_x, santa_y)
                        break;
                    case ">":
                        givePresent(santa_x, santa_y)
                        santa_x += 1
                        givePresent(santa_x, santa_y)
                        break;
                    case "<":
                        givePresent(santa_x, santa_y)
                        santa_x -= 1
                        givePresent(santa_x, santa_y)
                        break;
                    case "v":
                        givePresent(santa_x, santa_y)
                        santa_y -= 1
                        givePresent(santa_x, santa_y)
                        break;
                }
                turn = "robo-santa"
            } else {
                switch (input[i]) {
                    case "^":
                        givePresent(robo_santa_x, robo_santa_y)
                        robo_santa_y += 1
                        givePresent(robo_santa_x, robo_santa_y)
                        break;
                    case ">":
                        givePresent(robo_santa_x, robo_santa_y)
                        robo_santa_x += 1
                        givePresent(robo_santa_x, robo_santa_y)
                        break;
                    case "<":
                        givePresent(robo_santa_x, robo_santa_y)
                        robo_santa_x -= 1
                        givePresent(robo_santa_x, robo_santa_y)
                        break;
                    case "v":
                        givePresent(robo_santa_x, robo_santa_y)
                        robo_santa_y -= 1
                        givePresent(robo_santa_x, robo_santa_y)
                        break;
                }
                turn = "santa"
            }

            
        }

        function givePresent(x,y) {
            if (delivered_presents[`${x},${y}`] === undefined) {
                delivered_presents[`${x},${y}`] = 1
            } else (
                delivered_presents[`${x},${y}`]++
            )
        }
        
        console.log(delivered_presents)

        let houses_with_at_least_one_present = 0

        for (let i = 0; i < Object.keys(delivered_presents).length; i++) {
            houses_with_at_least_one_present++
        }

        console.log(houses_with_at_least_one_present)
    })
    .catch((e) => console.error(e));