import { Box, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';




const SimpleAutoComplete = ({ label ,options,onChange,error,value,disabled,multiple,limitTags}) => {
    // console.log("value for label and multiple",value,label,multiple);
    return (
            <Box className='textfield auto-complete'>


                <Autocomplete
                    disablePortal
                    {...(multiple ? {multiple:true} : {})}
                    {...(limitTags ? {limitTags:limitTags} : {})}
                    fullWidth
                    id="combo-box-demo"
                    getOptionLabel={(option) => option.label}
                    options={options}
                    value={
                        multiple? options?.filter((option)=>value.includes(option.value))
                        : options?.find((option) => option.value == value) || null}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label={label}
                            variant='outlined'
                            size='small'
                            InputLabelProps={{
                                sx: {
                                    color: error ? "red" : "rgba(0, 0, 0, 0.6)", // Red label if error
                                },
                            }}
                        />
                    )}
                    onChange={onChange}
                    disabled={disabled}
                    error={Boolean(error)}
                    sx={{
                        "& .MuiOutlinedInput-root": {
                            "& .MuiOutlinedInput-notchedOutline": {
                                border: error ? "2px solid red" : "2px solid var(--primary)", // Solid red when error exists
                            },
                        },
                    }}
                />
            </Box>
    )
}

export default SimpleAutoComplete