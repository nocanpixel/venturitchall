import React from "react";
// eslint-disable-next-line
import Divider from '@mui/material/Divider';
import { Grid, Box, styled, AccordionSummary } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import './dashContentStyles.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import 'bootstrap/dist/css/bootstrap.min.css';
import Tooltip from '@mui/material/Tooltip';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const events = [
    {
        id: 1,
        time: '10:30AM',
        desc: 'Webinar: the basics of..',
        img: '/images/thumbnail.png',
        cls: 'events__container1',
        tooltip: 'Webinar',
    },
    {
        id: 2,
        time: '2:15PM',
        desc: 'Team building Activity 🔥',
        img: '/images/thumbnail.png',
        cls: 'events__container2',
        tooltip: 'Team building',
    }
]

const accordionPannels = [
    {
        id: 1,
        pannel: 'panel1',
        arrow: 'arrow-up1.png',
        img: 'ic-followers.png',
        title: 'You have new 5 followers including',
        descAccordion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eum vero tempore sit adipisci ullam dicta obcaecati laudantium dolor nam commodi unde atque sed eaque, aliquid quisquam, pariatur nostrum impedit!'

    },
    {
        id: 2,
        pannel: 'panel2',
        arrow: 'arrow-up1.png',
        img: 'ic-events.png',
        title: '3 new events were added to your calendar',
        descAccordion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eum vero tempore sit adipisci ullam dicta obcaecati laudantium dolor nam commodi unde atque sed eaque, aliquid quisquam, pariatur nostrum impedit!'

    },
    {
        id: 3,
        pannel: 'panel3',
        arrow: 'arrow-up1.png',
        img: 'ic-assignments.png',
        title: 'You have 3 pending readings to complete 😎',
        descAccordion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, eum vero tempore sit adipisci ullam dicta obcaecati laudantium dolor nam commodi unde atque sed eaque, aliquid quisquam, pariatur nostrum impedit!'

    }
]

const sliderData = [
    {
        id: 1,
        title: 'Youth Talent & Education',
        date: 'May,20',
        badge: 'SCIENCE'
    },
    {
        id: 2,
        title: 'Lorem & Impsus lore',
        date: 'Jun,13',
        badge: 'PRODUCTION'
    },
    {
        id: 3,
        title: 'Climbing To The Top',
        date: 'Sep,1',
        badge: 'ART'
    },
]

const staticData = [
    {
        id: 1,
        title: 'Total Webinars',
        value: 9,
        tooltip: 'Webinars'
    },
    {
        id: 2,
        title: 'Pending Assignments',
        value: 0,
        tooltip: 'Webinars'
    },
    {
        id: 3,
        title: 'Total Units',
        value: 5,
        tooltip: 'Units'
    },
    {
        id: 4,
        title: 'Total Readings',
        value: 14,
        tooltip: 'Readings'
    },
    {
        id: 5,
        title: 'Total Videos',
        value: 5,
        tooltip: 'Videos'
    },
]

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    marginBottom: '1em',
    borderRadius: '0.4em',
    border: 'none',
    '&:before': {
        display: 'none',
    },
    '&:hover': {
        boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    }

}));



const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: 'none',
}));

const Title = ({ title }) => {
    return (
        <div className="title">
            <h1>{title}</h1>
        </div>
    )
}

const percentage = 40;
export default function DashContent() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    }
    return (
        <div className="dash__app">
            {/* Dashboard section (Welcome) */}
            <div className="dashboard__section">
                <div className="dashboard__header">
                    <Title title={'Dashboard'} />
                    <Tooltip title="Current Learning">
                        <div className="language">
                            <span className="current__learning">Currently Learning</span>
                            <div className="current__language">
                                <div className="flag__">
                                    <img style={{ width: '1em' }} src={`/images/united.png`} alt="" />
                                </div>
                                <div className="flag__name">
                                    English
                                </div>
                            </div>
                        </div>
                    </Tooltip>
                </div>
                <div className="dashboard__body">
                    <div className="deleteImg">
                        <img className="bg__char" src={`/images/header-4.png`} alt="" />
                    </div>
                    <div className="char__container">
                        <div>
                            <img className="char__3d" src={`/images/char3d.png`} alt="" />
                        </div>
                        <div className="text">
                            <h2>Welcome back, Clarence</h2>
                            <span>
                                Ta-da! You're up to date. 🥳
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Events section */}
            <div className="events__">
                <div className="events__header">
                    <Title title={'Events'} />
                    <div className="divider__mobile">
                        <Divider sx={{ height: '5px' }} />
                    </div>
                </div>
                <div className="events__body">
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item md={8} xs={12}>
                                <div className="slider__">
                                    <Carousel showStatus={false} emulateTouch={true} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={10} showThumbs={false}>
                                        {sliderData.map((ele) => (
                                            <div key={ele.id} className="try">
                                                <div>
                                                    <img src={`/images/clock.png`} alt="" />
                                                </div>
                                                <div className="slider__content">
                                                    <div className="badge">
                                                        <span>{ele.badge}</span>
                                                    </div>
                                                    <div className="slider__text">
                                                        <div className="text__left">
                                                            {ele.title}
                                                        </div>
                                                        <div className="text__right">
                                                            {ele.date}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </div>
                            </Grid>
                            <Grid item md={4} xs={12}>
                                <div className="events__right__section">
                                    <div className="events__right__header">
                                        <div className="events__right__title">
                                            EVENTS TODAY
                                        </div>
                                        <div className="divider__both">
                                            <Divider sx={{ height: '5px' }} />
                                        </div>
                                    </div>
                                    <div className="events__thumbs__right">
                                        {events.map((ele) => (
                                            <Tooltip title={`${ele.tooltip}`}>
                                                <div key={ele.id} style={{ cursor: 'pointer' }} className={`events__container ${ele.cls}`}>
                                                    <div className="events__thumbs">
                                                        <img src={`${ele.img}`} alt="" />
                                                    </div>
                                                    <div className="text__container ">
                                                        <div className="time__event">
                                                            {ele.time}
                                                        </div>
                                                        <div className="desc__event">
                                                            {ele.desc}
                                                        </div>
                                                    </div>
                                                </div>
                                            </Tooltip>
                                        ))}
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
            {/* ACTIVITY */}
            <div className="activity__section">
                <div className="activity__header">
                    <div className="acivity__title">
                        <Title title={'Activity'} />
                    </div>
                    <div className="divider__both__activity">
                        <Divider sx={{ height: '5px' }} />
                    </div>
                    <div className="arrow__activity">
                        <ArrowForwardIcon sx={{ fontSize: '1em', color: 'var(--title-color)' }} />
                    </div>
                </div>
                <div className="activity__body">

                    {accordionPannels.map((ele) => (
                        <Accordion key={ele.id} expanded={expanded === ele.pannel} onChange={handleChange(ele.pannel)}>
                            <AccordionSummary
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <div className="all__here">
                                    <div className="tente__">
                                        <div className="activity__icon">
                                            <img src={`/images/${ele.img}`} alt="" />
                                        </div>
                                        <div className="accordion__title">
                                            {ele.title}
                                        </div>
                                    </div>
                                    <div>
                                        <img src={`/images/${expanded === ele.pannel ? ele.arrow : 'arrow1.png'}`} alt="" />

                                    </div>
                                </div>
                            </AccordionSummary>
                            <AccordionDetails>
                                <div className="accordion__desc">
                                    {ele.descAccordion}
                                </div>
                            </AccordionDetails>
                        </Accordion>
                    ))}

                </div>
            </div>
            {/* STATICS */}
            <div className="statics__section">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item md={4} xs={12}>
                            <div className="progress__overview">
                                <div className="progress__overview__header">
                                    <div className="progress__overview__title">
                                        Progress overview
                                    </div>
                                </div>
                                <div className="progress__overview__body">
                                    <Tooltip title={`Total progress ${percentage}`}>
                                        <div className="circular__progressbar">
                                            <CircularProgressbar
                                                value={percentage}
                                                text={`${percentage}%`}
                                                styles={buildStyles({
                                                    textSize: '1.5em',
                                                    pathColor: '#fed200',
                                                    textColor: 'white',
                                                    trailColor: '#ff794f'
                                                })}
                                            />
                                        </div>
                                    </Tooltip>
                                </div>
                                <div className="progress__overview__data">
                                    <Tooltip title="20 Hours completed">
                                        <div className="data__left">
                                            <div className="over__x">
                                                <div>
                                                    <span className="dot__left"></span>
                                                </div>
                                                <div className="over__time__process">
                                                    completed
                                                </div>
                                            </div>
                                            <div className="over__y">
                                                20<span> hours</span>
                                            </div>
                                        </div>
                                    </Tooltip>
                                    <Tooltip title="30 Hours completed">
                                        <div className="data__right">
                                            <div className="over__x" >
                                                <div>
                                                    <span className="dot__right"></span>
                                                </div>
                                                <div className="over__time__process">
                                                    Left to go
                                                </div>
                                            </div>
                                            <div className="over__y">
                                                30<span> hours</span>
                                            </div>
                                        </div>
                                    </Tooltip>
                                </div>
                            </div>
                        </Grid>
                        <Grid item md={8} xs={12}>
                            <div className="progress__overview__data__right">
                                <div className="overview__data__header">
                                    <Title title={'Progress'} />
                                    <div className="divider__both" style={{ marginLeft: '1em' }}>
                                        <Divider sx={{ height: '5px' }} />
                                    </div>
                                </div>
                                <div className="overview__data__body">
                                    <Grid
                                        container
                                        rowSpacing={2}
                                        columnSpacing={2}
                                        columns={{ xs: 4, sm: 6 }}
                                    >
                                        {staticData.map((ele) => (
                                            <Grid key={ele.id} item xs={2}>
                                                <Tooltip title={ele.tooltip}>
                                                    <div className="card__data">
                                                        <div className="card__title">
                                                            {ele.title}
                                                        </div>
                                                        <div className="card__value">
                                                            {ele.value}
                                                        </div>
                                                    </div>
                                                </Tooltip>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    <div className="card__footer">
                                        <img style={{ width: '100%' }} src={`/images/oval.png`} alt="" />
                                        <div className="text__card">
                                            <span style={{ color: 'white', fontWeight: 'bold' }}>Confirm your account details</span> Please confirm your email and phone number.😰
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
            </div>
        </div>
    )
}