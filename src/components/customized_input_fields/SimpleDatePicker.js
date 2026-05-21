"use client"
import { Box } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';


const SimpleDatePicker = ({ label,onChange,value,error}) => {

    const [selectedDate, setSelectedDate] = useState(value ? dayjs(value) : null);
    useEffect(()=>{
        if(!value){
            setSelectedDate(null);
        }
    },[value]) 
    const handleDateChange = (newValue) => {
        const formattedDate = newValue ? dayjs(newValue).format('YYYY-MM-DD') : null;
        setSelectedDate(newValue);
        onChange(formattedDate);
    };


    return (
            <Box className="textfield datepicker">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label={label}
                        size="small"
                        value={selectedDate || null}
                        onChange={handleDateChange}
                        error={Boolean(error)}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& .MuiOutlinedInput-notchedOutline": {
                                    border: error ? "2px solid red" : "2px solid var(--primary)", // Solid red when error exists
                                },
                            },
                            "& .MuiInputLabel-root": {
                                color: error ? "red" : "rgba(0, 0, 0, 0.6)", // Change label color to red when error exists
                            },
                        }}
                    />
                </LocalizationProvider>
            </Box>
    )
}

export default SimpleDatePicker

