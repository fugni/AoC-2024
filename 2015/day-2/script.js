fetch("input")
    .then((res) => res.text())
    .then((input) => {
        input = input.split("\n")
        input.pop()
        
        let square_feet_of_wrapping_paper = 0;
        let feet_of_ribbon = 0;

        for (let i = 0; i < input.length; i++) {
            dimensions = input[i].split("x")
            dimensions[0] = parseInt(dimensions[0]), dimensions[1] = parseInt(dimensions[1]), dimensions[2] = parseInt(dimensions[2]);
        
            shortest = [dimensions[0], dimensions[1], dimensions[2]].sort(function(a, b) {return a - b})

            ribbon_wrap = (shortest[0] * 2) + (shortest[1] * 2)

            ribbon_bow = dimensions[0] * dimensions[1] * dimensions[2]

            feet_of_ribbon += ribbon_wrap + ribbon_bow

            side1 = dimensions[0] * dimensions[1];
            side2 = dimensions[1] * dimensions[2];
            side3 = dimensions[2] * dimensions[0];

            smallest = [side1, side2, side3].sort(function(a, b) {return a - b})

            result = (side1 * 2) + (side2 * 2) + (side3 * 2) + (smallest[0])

            square_feet_of_wrapping_paper += result
            
        }
        
        console.log(square_feet_of_wrapping_paper)
        console.log(feet_of_ribbon)
    })
    .catch((e) => console.error(e));