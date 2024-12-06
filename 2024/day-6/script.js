fetch("input")
    .then((res) => res.text())
    .then((input) => {
        const initial_lab = input.split("\n");

        // remove empty line
        initial_lab.pop();

        for (let i = 0; i < initial_lab.length; i++) {
            initial_lab[i] = initial_lab[i].split("");
        }

        let initial_guard_x;
        let initial_guard_y;
        let initial_guard_direction = "up";

        // find guard
        for (let i = 0; i < initial_lab.length; i++) {
            let pos = initial_lab[i].indexOf("^")
            if (pos !== -1) {
                // guard is a piece of shit
                initial_guard_x = pos;
                initial_guard_y = i;
            }
        }

        function rotato() {
            switch (guard_direction) {
                case "up":
                    guard_direction = "right"
                    break;
                case "right":
                    guard_direction = "down"
                    break;
                case "down":
                    guard_direction = "left";
                    break;
                case "left":
                    guard_direction = "up";
                    break;
            }
        }

        function move() {
            move_count++;
            switch (guard_direction) {
                case "up":
                    if (lab[guard_y - 1] === undefined) {
                        guard_history[guard_y][guard_x] = "X"
                        guard_y = guard_y - 1
                    } else {
                        if (lab[guard_y - 1][guard_x] == "#") {
                            rotato();
                        } else {
                            guard_history[guard_y][guard_x] = "X"
                            guard_y = guard_y - 1
                        }
                    }
                    break;
                case "right":
                    if (lab[guard_y][guard_x + 1] === undefined) {
                        guard_history[guard_y][guard_x] = "X"
                        guard_x = guard_x + 1
                    } else {
                        if (lab[guard_y][guard_x + 1] == "#") {
                            rotato();
                        } else {
                            guard_history[guard_y][guard_x] = "X"
                            guard_x = guard_x + 1
                        }
                    }
                    break;
                case "down":
                    if (lab[guard_y + 1] === undefined) {
                        guard_history[guard_y][guard_x] = "X"
                        guard_y = guard_y + 1
                    } else {
                        if (lab[guard_y + 1][guard_x] == "#") {
                            rotato();
                        } else {
                            guard_history[guard_y][guard_x] = "X"
                            guard_y = guard_y + 1
                        }
                    }
                    break;
                case "left":
                    if (lab[guard_y][guard_x - 1] === undefined) {
                        guard_history[guard_y][guard_x] = "X"
                        guard_x = guard_x - 1
                    } else {
                        if (lab[guard_y][guard_x - 1] == "#") {
                            rotato();
                        } else {
                            guard_history[guard_y][guard_x] = "X"
                            guard_x = guard_x - 1
                        }
                    }
                    break;
            }
        }

        let loop_count = 0;

        function testGuard(modified_x, modified_y) {
            guard_x = initial_guard_x;
            guard_y = initial_guard_y;
            guard_direction = initial_guard_direction;
            lab = structuredClone(initial_lab);

            lab[modified_y][modified_x] = "#"

            guard_history = structuredClone(lab);

            move_count = 0;

            while (((guard_x >= 0 && guard_x < lab[0].length) && (guard_y >= 0 && guard_y < lab.length)) && move_count < 10000) {
                move()
            }

            // let position_count = 0;

            // // count historic positions
            // for (let i = 0; i < guard_history.length; i++) {
            //     for (let j = 0; j < guard_history[i].length; j++) {
            //         if (guard_history[i][j] === "X") {
            //             position_count++
            //         }
            //     }
            // }

            // console.log("positions is: " + position_count)

            if (move_count === 10000) {

                loop_count++
                console.log("looped")
            }

        }

        for (let i = 0; i < 16900; i++) {
            x = (i % 130)
            y = (Math.floor(i / 130))

            console.log(y,x)

            testGuard(x, y)
        }

        console.log("lops: " + loop_count)


    })
    .catch((e) => console.error(e));