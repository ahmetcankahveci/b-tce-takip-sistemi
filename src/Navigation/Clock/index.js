import { Box, IconButton, Tooltip, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useTodayDate } from '../../common/utils/useTodayDate';
import { useMessageAlert } from '../../common/MessageAlert/useMessageAlert';
import MessageAlert from '../../common/MessageAlert';

const Clock = () => {
    const { handleOpen, open, handleClose, textAlert } = useMessageAlert();
    const todayDate = useTodayDate();

    const handleClick = () => {
        handleOpen(`Bügün Tarih - ${todayDate}`)
    };

    return (
        <>
            <Tooltip title={`Bügün Tarih - ${todayDate}`}>
                <Box display={"flex"} alignItems={"center"}
                    sx={{
                        padding: {
                            xs: 0,
                            md: 2,
                        }
                    }}>
                    <IconButton
                        aria-label="Kategori Ekle"
                        size="large"
                        sx={{ color: "white" }}
                        onClick={handleClick}
                    >
                        <CalendarTodayIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="span"
                        color="inherit"
                        flex={2}
                        textAlign={"center"}
                        sx={{
                            display: {
                                xs: 'none',
                                md: 'block'
                            }
                        }}
                    >
                        {todayDate}
                    </Typography>
                </Box>
            </Tooltip>
            <MessageAlert
                openMessage={open}
                handleClose={handleClose}
                textAlert={textAlert}
            />
        </>
    )
};

export default Clock;