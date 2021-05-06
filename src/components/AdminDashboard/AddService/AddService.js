import React, { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import './AddService.css'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


const AddService = () => {

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
    const handSnackbar = () => {
        setOpen(true);
    };
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    // snackbar end

    const [serviceInfo, setServiceInfo] = useState({})
    const [file, setFile] = useState(null)

    const [serviceAddedStatus, setServiceAddedStatus] = useState({})
    const [formCleaner, setFormCleaner] = useState({})

    const handleServiceInfo = (e) => {
        const updateServiceInfo = { ...serviceInfo };
        updateServiceInfo[e.target.name] = e.target.value;
        setServiceInfo(updateServiceInfo)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('picture', file)
        formData.append('title', serviceInfo.title)
        formData.append('description', serviceInfo.description)

        fetch('https://gentle-fjord-52823.herokuapp.com/service', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                setServiceAddedStatus(data)
                setFormCleaner({ title: '', description: '', img: '' })
                handSnackbar()
                setFormCleaner({})
            })
            .catch(error => {
                console.error(error)
            })
    }
    const handleFile = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile)
    }
    console.log(file);
    return (
        <>
            <Row className="form-main">
                <Col md={6}>
                    <form onSubmit={handleSubmit}>
                        <input value={formCleaner.title} onBlur={handleServiceInfo} placeholder="Service Title" name="title" required />

                        <textarea value={formCleaner.description} onBlur={handleServiceInfo} placeholder="Description" name="description" />
                        <Row>
                            <Col md={6}>
                                <input value={formCleaner.img} onChange={handleFile} type="file" required />
                            </Col>
                            <Col md={6}>
                                <button type="submit" >Submit</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>

            <div className={classes.root}>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    {serviceAddedStatus.status === 'success' ? <Alert onClose={handleClose} severity="success">
                        {serviceAddedStatus.msg}
                    </Alert> : <Alert onClose={handleClose} severity="error">
                        {serviceAddedStatus.msg}
                    </Alert>}

                </Snackbar>
            </div>
        </>
    );
};

export default AddService;