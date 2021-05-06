import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import './MakeAdmin.css'
import { useState } from 'react';

const MakeAdmin = () => {
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
    const [Status, setStatus] = useState({})
    const [formCleaner, setFormCleaner] = useState({})

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = adminEmil => {
        fetch('https://gentle-fjord-52823.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(adminEmil)
        })
            .then(response => response.json())
            .then(data => {
                setStatus(data)
                setFormCleaner({ email: '' })
                handSnackbar()
                setFormCleaner({})
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <>
            <Row className="form-main">
                <Col md={8}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col md={8}>
                                <input value={formCleaner.email} placeholder="example@domain.com" {...register("email", { required: true })} />
                                {errors.email && <span>This field is required</span>}
                            </Col>
                            <Col md={4}>
                                <button type="submit" >Submit</button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                {Status.status === 'success' ? <Alert onClose={handleClose} severity="success">
                    {Status.msg}
                </Alert> : <Alert onClose={handleClose} severity="error">
                    {Status.msg}
                </Alert>}

            </Snackbar>
        </>
    );
};

export default MakeAdmin;