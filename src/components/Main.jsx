import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './styles/Main.css'

class Main extends Component {

    

    render() {
        return (
            <div className="main-wrapper">
                <div className="container">
                    <div className="main-title">
                        <Typography variant="h2" gutterBottom>
                            International Information Technology University
                        </Typography>
                    </div>
                    <div className="main-content">
                        <Card className={{minWidth: 275}}>
                            <CardContent>
                                <div className="main-content-col">
                                    <Typography variant="h4" gutterBottom>
                                        Программируй свое будущее на успех
                                    </Typography>
                                    <Typography variant="subtitle1" >
                                        Миссия МУИТ – формирование интеллектуального и научно-технического потенциала страны в сфере ИКТ на основе интеграции образования, прорывных инновационных технологий и научных исследований
                                    </Typography>
                                   
                                </div>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                        <Card className={{minWidth: 275}}>
                            <CardContent>
                                <div className="main-content-col">
                                    <Typography variant="h4" gutterBottom>
                                        Университетский языковой центр Lingua 
                                    </Typography>
                                    <Typography variant="subtitle1">
                                        Языковой центр "LINGUA" при Международном университете информационных технологий приглашает вас на курсы английского, казахского, русского, корейского, китайского языков.
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions>
                                
                            </CardActions>
                        </Card>
                        
                    </div>
                    <div className="main-footer">

                    </div>
                </div>
            </div>
        )
    }
}

export default Main