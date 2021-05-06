import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import './Review.css'
import { UserContext } from '../../../App';

const Review = () => {
    const [user, setUser] = useContext(UserContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [Status, setStatus] = useState({})
    const [formCleaner, setFormCleaner] = useState({})

    const onSubmit = data => {
        const reviewData = { ...data, img: user.photoURL }
        fetch('https://gentle-fjord-52823.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(response => response.json())
            .then(data => {
                setStatus(data)
                setFormCleaner({ name: '', company: '', description: '' })
                handSnackbar()
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

    return (
        <>
            <Row className="form-main">
                <Col md={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input value={user.displayName} placeholder="Your Name" {...register("name", { required: true })} />
                        {errors.name && <span>This field is required</span>}

                        <input value={formCleaner.company} placeholder="Company Name, Designation" {...register("company", { required: true })} />
                        {errors.company && <span>This field is required</span>}

                        <textarea value={formCleaner.description} placeholder="Description" {...register("description")} />
                        {errors.description && <span>This field is required</span>}

                        <input type="submit" />
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

export default Review;