import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const rows = [
    createData('Student1', 'Almaty', 2002, 'NIS', 'Yes'),
    createData('Student2', 'Almaty', 2002, 'BIL', 'Yes'),
    createData('Student3', 'Nur-sultan', 2002, 'Licey', 'No'),
    createData('Student4', 'Shymkent',2003, '№131', 'No'),
    createData('Student5', 'Aktau', 2003, '№124', 'Yes'),
  ];
function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}
class Abitur extends Component {
    
    render () {
        return (
            <div style={{margin: 30}}>
                <Typography variant="h5" gutterBottom>
                    Список претендентов на грант
                </Typography>
                <TableContainer component={Paper}>
                    <Table size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">City</TableCell>
                            <TableCell align="right">YOB&nbsp;(g)</TableCell>
                            <TableCell align="right">School&nbsp;(g)</TableCell>
                            <TableCell align="right">Altyn Belgi&nbsp;(g)</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.calories}</TableCell>
                            <TableCell align="right">{row.fat}</TableCell>
                            <TableCell align="right">{row.carbs}</TableCell>
                            <TableCell align="right">{row.protein}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
            </div>
        )
    }
}

export default Abitur;