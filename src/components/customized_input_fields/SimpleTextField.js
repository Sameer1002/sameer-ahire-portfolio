import { Box, TextField } from "@mui/material";

const SimpleTextField = ({ label, value, onChange, error, disabled}) => {
  return (
      <Box
        className="textfield w100"
      >
        <TextField
          id="outlined-basic"
          fullWidth
          label={label}
          variant="outlined"
          value={value}
          onChange={onChange}
          error={Boolean(error)}
          disabled={disabled}
          sx={{
            "& .MuiOutlinedInput-notchedOutline": {
              border: error ? "2px solid red" : "2px solid var(--primary)",
            }
          }}

            />
      </Box>
  );
};

export default SimpleTextField;
