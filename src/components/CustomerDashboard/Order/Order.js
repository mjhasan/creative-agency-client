import React, { useContext } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import './Order.css'
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../../App';

const Order = () => {
    const [user, updateUser] = useContext(UserContext)
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://gentle-fjord-52823.herokuapp.com/allservice')
            .then(response => response.json())
            .then(data => data && setServices(data));

    }, [])

    const [serviceAddedStatus, setServiceAddedStatus] = useState({})
    const [formCleaner, setFormCleaner] = useState({})

    const [file, setFile] = useState(null)
    const [orderInfo, setOrderInfo] = useState({})

    const handleOrderInfo = (e) => {
        const updateOrderInfo = { ...orderInfo };
        updateOrderInfo[e.target.name] = e.target.value;
        setOrderInfo(updateOrderInfo)
    }

    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }

    const formServiceHandler = (e) => {
        const selectedService = e.target.value
        const serviceInfo = services.find(s => s.title === selectedService)
        setOrderInfo({ ...orderInfo, service: serviceInfo })
    }

    console.log('Service Info:', orderInfo.service);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('picture', file)
        formData.append('name', user.displayName)
        formData.append('email', user.email)

        if (orderInfo.service) {
            formData.append('serviceName', orderInfo.service.title)
            formData.append('serviceImg', orderInfo.service.img)
            formData.append('serviceDetails', orderInfo.service.description)
        }
        else {
            formData.append('serviceName', user.orderInfo.title)
            formData.append('serviceImg', user.orderInfo.img)
            formData.append('serviceDetails', user.orderInfo.description)
        }

        formData.append('projectDetails', orderInfo.details)
        formData.append('price', orderInfo.price)

        fetch('https://gentle-fjord-52823.herokuapp.com/addOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setServiceAddedStatus(data)
                setFormCleaner({ img: '', service: '', details: '', price: '' })
                handleSnackbar()
                setFormCleaner({})
            })
            .catch(error => {
                console.error(error)
            })
    }

    // snackbar start
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
        },
    }));
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleSnackbar = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // snackbar end

    const availableServices = services.filter(s => s.title !== user.orderInfo?.title)
    return (
        <>
            <Row className="form-main">
                <Col md={6}>
                    <form onSubmit={handleSubmit}>
                        <input className='input-disabled' disable onBlur={handleOrderInfo} value={user.displayName} placeholder="Your Name / Company Name" name="name" required />

                        <input className='input-disabled' disable onBlur={handleOrderInfo} value={user.email} placeholder="Your email address" name="email" required />

                        <select onChange={formServiceHandler} name="selectService" id="selectService">
                            {
                                user.orderInfo?.title.length > 1 &&
                                <option value={user.orderInfo?.title}>{user.orderInfo?.title}</option>
                            }
                            {availableServices.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                        </select>

                        <textarea onBlur={handleOrderInfo} placeholder="Project Details" name="details" value={formCleaner.details} required />
                        <Row>
                            <Col md={6}>
                                <input onBlur={handleOrderInfo} placeholder="Price" name="price" value={formCleaner.price} required />
                            </Col>
                            <Col md={6}>
                                <input type="file" value={formCleaner.img} onChange={handleFile} required />
                            </Col>
                        </Row>
                        <button type="submit" >Submit</button>
                    </form>
                </Col>
            </Row>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                {serviceAddedStatus.status === 'success' ? <Alert onClose={handleClose} severity="success">
                    {serviceAddedStatus.msg}
                </Alert> : <Alert onClose={handleClose} severity="error">
                    {serviceAddedStatus.msg}
                </Alert>}

            </Snackbar>
        </>

    );
};

export default Order;