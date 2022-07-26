import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';

// Sample chart data
const pdata = [
    {
        name: 'MongoDb',
        student: 11,
        fees: 120
    },
    {
        name: 'Javascript',
        student: 15,
        fees: 12
    },
    {
        name: 'PHP',
        student: 5,
        fees: 10
    },
    {
        name: 'Java',
        student: 10,
        fees: 5
    },
    {
        name: 'C#',
        student: 9,
        fees: 4
    },
    {
        name: 'C++',
        student: 10,
        fees: 8
    },
];

function Charts() {
    return (
        <>
            <div className="card mb-5">
                <div className="card-body" style={{border:"1px solid black"}}>
                    <ResponsiveContainer aspect={3} style={{width:"100%"}}>
                        <LineChart data={pdata}>
                            <CartesianGrid />
                            <XAxis dataKey="name"
                                interval={'preserveStartEnd'} />
                            <YAxis></YAxis>
                            <Legend />
                            <Tooltip />
                            <Line dataKey="student"
                                stroke="black" activeDot={{ r: 8 }} />
                            <Line dataKey="fees"
                                stroke="red" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </>
    );
}

export default Charts;