import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// import { useState, CSSProperties } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useEffect, useState } from 'react';

const ReChart = () => {
    const [loading, setLoading] = useState(true)

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
    useEffect(() => {
        setLoading(false)
    }, [])

    return (
        <div className='my-6 flex justify-center items-center relative'>

            <div className=' absolute'>
                {
                    loading &&
                    <BeatLoader className=''
                        color={'#36d7b7'}
                        margin={2}
                        loading={true}
                        cssOverride={''}
                        speedMultiplier={1}
                        size={25}
                    />
                }
            </div>
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