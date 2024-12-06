fetch("input")
    .then((res) => res.text())
    .then((input) => {
        input = (input.split('\n'));

        var reports = {};
        var report_differences = {};
        var report_unsafety = {};

        for (let i = 0; i < input.length - 1; i++) {
            reports[i] = input[i].split(" ");       
        }

        for (let i = 0; i < Object.keys(reports).length; i++) {
            var differences = [];
            for (let j = 0; j < reports[i].length - 1; j++) {
                var difference = (reports[i][j+1] - reports[i][j])
                differences.push(difference);
            }
            report_differences[i] = differences
        }

        for (let i = 0; i < Object.keys(report_differences).length; i++) {
            for (let j = 0; j < report_differences[i].length; j++) {
                var diff = report_differences[i][j];
                // console.log(report_differences[i][j])
                if (diff === 0 || diff >= 4 || diff <= -4) {
                    report_unsafety[i] = "unsafe";
                    // console.log("unsafe")
                }
            }

            if (Math.sign(report_differences[i][0]) === 1) {
                for (let j = 0; j < report_differences[i].length; j++) {
                    if (Math.sign(report_differences[i][j]) === -1) {
                        report_unsafety[i] = "unsafe";
                    }                    
                } 
            } else if (Math.sign(report_differences[i][0]) === -1) {
                for (let j = 0; j < report_differences[i].length; j++) {
                    if (Math.sign(report_differences[i][j]) === 1) {
                        report_unsafety[i] = "unsafe";
                    }                    
                } 
            }
        }

        // console.log(report_differences)

        // console.log(reports)
        console.log(report_unsafety)
        console.log("unsafe reports: " + Object.keys(report_unsafety).length);
        console.log("safe reports: " + (Object.keys(reports).length - Object.keys(report_unsafety).length));
    })
    .catch((e) => console.error(e));