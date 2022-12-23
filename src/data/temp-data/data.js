export const stepsData = [
    { x: new Date("2022-10-19"), y: 0 },
    { x: new Date("2022-10-18"), y: 2195 },
    { x: new Date("2022-10-17"), y: 0 },
    { x: new Date("2022-10-16"), y: 8555 },
    { x: new Date("2022-10-15"), y: 8926 },
    { x: new Date("2022-10-14"), y: 0 },
    { x: new Date("2022-10-13"), y: 1053 },
    { x: new Date("2022-10-12"), y: 4475 },
    { x: new Date("2022-10-11"), y: 4734 },
    { x: new Date("2022-10-10"), y: 3524 },
    { x: new Date("2022-10-09"), y: 14554 },
    { x: new Date("2022-10-08"), y: 9981 }
];

export const weightData = [ // need some logic somewhere that fills in 0 with the day before (only for weight)
    { x: new Date("2022-10-19"), y: 179 },
    { x: new Date("2022-10-18"), y: 180 },
    { x: new Date("2022-10-17"), y: 181 },
    { x: new Date("2022-10-16"), y: 180 },
    { x: new Date("2022-10-15"), y: 179 },
    { x: new Date("2022-10-14"), y: 179 },
    { x: new Date("2022-10-13"), y: 180 },
    { x: new Date("2022-10-12"), y: 181 },
    { x: new Date("2022-10-11"), y: 181 },
    { x: new Date("2022-10-10"), y: 181 },
    { x: new Date("2022-10-09"), y: 180 },
    { x: new Date("2022-10-08"), y: 180 }
];

export const calorieData = [
    { x: new Date("2022-10-19"), y: 1207 },
    { x: new Date("2022-10-18"), y: 1533 },
    { x: new Date("2022-10-17"), y: 1326 },
    { x: new Date("2022-10-16"), y: 1368 },
    { x: new Date("2022-10-15"), y: 1611 },
    { x: new Date("2022-10-14"), y: 1157 },
    { x: new Date("2022-10-13"), y: 1076 },
    { x: new Date("2022-10-12"), y: 1379 },
    { x: new Date("2022-10-11"), y: 1278 },
    { x: new Date("2022-10-10"), y: 1169 },
    { x: new Date("2022-10-09"), y: 1299 },
    { x: new Date("2022-10-08"), y: 1124 }
];

// needs to be sorted better by area
const data2012 = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 20000 }
];

const data2013 = [
    { quarter: 1, earnings: 15000 },
    { quarter: 2, earnings: 12500 },
    { quarter: 3, earnings: 19500 },
    { quarter: 4, earnings: 13000 }
];

const data2014 = [
    { quarter: 1, earnings: 11500 },
    { quarter: 2, earnings: 13250 },
    { quarter: 3, earnings: 20000 },
    { quarter: 4, earnings: 15500 }
];

export const barData = {
    data2012,
    data2013,
    data2014
}
