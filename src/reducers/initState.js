const IntiState = {
    display: {
        currentValue: '',
        Ans: '0'
    },
    isOperation: false,
    isEquls: false,
    isDecimalPoint: false,
    numbers: [
        {value: 0,
        label: '0',
        id: "zero"},
        {value: 1,
        label: '1',
        id: "one"},
        {value: 2,
        label: '2',
        id: "two"},
        {value: 3,
        label: '3',
        id: "three"},
        {value: 4,
        label: '4',
        id: "four"},
        {value: 5,
        label: '5',
        id: "five"},
        {value: 6,
        label: '6',
        id: "six"},
        {value: 7,
        label: '7',
        id: "seven"},
        {value: 8,
        label: '8',
        id: "eight"},
        {value: 9,
        label: '9',
        id: "nine"}
    ],
    primary: [
        {sign: '+',
        id: 'add'},
        {sign: '-',
        id: 'subtract'},
        {sign: '*',
        id: 'multiply'},
        {sign:'/',
        id: 'divide'},
    ],
    secondary: [
            {label: '.',
            id: 'decimal'},
            {label: '=',
            id: 'equals'},
            {label: 'AC',
            id: 'clear'}
        
    ]
};

export default IntiState;