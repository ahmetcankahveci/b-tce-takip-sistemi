import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Avatar } from "@mui/material";
import { green, red, grey } from "@mui/material/colors";
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import EditIcon from '@mui/icons-material/Edit';
import { formatPrice } from "../../../common/utils/formatPrice";

const ListView = ({ removeItem, editItem, currency, darkMode, filteredData }) => {

    return (
        <TableContainer
            component={Paper}
            sx={{
                mb: 3,
                backgroundColor: darkMode ? grey[700] : grey[200]
            }}
        >
            <Table sx={{ minWidth: 650 }}>
                {filteredData.length !== 0 &&
                    (<TableHead>
                        <TableRow>
                            <TableCell>Açiklama</TableCell>
                            <TableCell>Kaldir</TableCell>
                            <TableCell>Düzenle</TableCell>
                            <TableCell align="left">Gelir/Gider</TableCell>
                            <TableCell align="left">Kategori</TableCell>
                            <TableCell align="left">Tarih</TableCell>
                            <TableCell align="left">Miktar</TableCell>
                        </TableRow>
                    </TableHead>
                    )}
                <TableBody>
                    {filteredData.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                {row.description}
                            </TableCell>
                            <TableCell align="left">
                                <Tooltip title="İtem Kaldir">
                                    <IconButton aria-label="Remove item" onClick={() => removeItem(row.id)}>
                                        <DeleteForeverOutlinedIcon color="primary" />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="left">
                                <Tooltip title="İtem Düzenle">
                                    <IconButton aria-label="Edit item" onClick={() => editItem(row.id)}>
                                        <EditIcon color="primary" />
                                    </IconButton>
                                </Tooltip>
                            </TableCell>
                            <TableCell align="left">
                                {row.variant === "expense"
                                    ? <Avatar sx={{ bgcolor: red[500] }}>
                                        Gider
                                    </Avatar>
                                    :
                                    <Avatar sx={{ bgcolor: green[500] }}>
                                        Gelir
                                    </Avatar>
                                }
                            </TableCell>
                            <TableCell align="left">{row.category}</TableCell>
                            <TableCell align="left">{row.date}</TableCell>
                            <TableCell align="left">{formatPrice(row.amount, currency)}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default ListView;