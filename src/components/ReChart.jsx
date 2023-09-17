import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ReChart = () => {

    const subjectChartLine = [
        { "student": "Abul", "math": 85, "physics": 78, "chemistry": 90, "english": 92 },
        { "student": "Babul", "math": 78, "physics": 85, "chemistry": 88, "english": 86 },
        { "student": "Cabul", "math": 92, "physics": 88, "chemistry": 76, "english": 80 },
        { "student": "Dabul", "math": 70, "physics": 75, "chemistry": 82, "english": 78 },
        { "student": "Mokbul", "math": 95, "physics": 92, "chemistry": 88, "english": 90 },
        { "student": "Bulbul", "math": 80, "physics": 84, "chemistry": 72, "english": 75 },
        { "student": "Chulbul", "math": 88, "physics": 90, "chemistry": 94, "english": 88 },
        { "student": "Dulbul", "math": 75, "physics": 78, "chemistry": 85, "english": 82 },
        { "student": "Kulbul", "math": 68, "physics": 72, "chemistry": 65, "english": 70 },
        { "student": "Kabul", "math": 90, "physics": 95, "chemistry": 92, "english": 94 }
    ];

    return (
        <div className='my-6'>
            <BarChart width={900} height={500} data={subjectChartLine}>
                <XAxis dataKey={'student'} stroke='green'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <CartesianGrid stroke='gray' strokeDasharray={'5 5'}></CartesianGrid>
                <Bar dataKey={'math'} fill='#8884d8' barSize={'5'}></Bar>
                <Bar dataKey={'physics'} fill='green' barSize={'5'}></Bar>
                <Bar dataKey={'chemistry'} fill='blue' barSize={'5'}></Bar>
            </BarChart>
        </div>
    );
};

export default ReChart;