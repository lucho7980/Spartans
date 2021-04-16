import React, { useState } from 'react';
import axios from 'axios';
import {useFormik} from 'formik';
import * as Yup from 'yup';

 function LogIn(props){
     const validationSchema = Yup.object({
         email: Yup.string().required(),
         password: Yup.string().required()
     })
     const {error, setError} = useState(null)
     const onSubmit = async (values) => {
          setError(null); 
        const response = await axios.get('http://localhost:4000/users',values)
        .catch((err)=>{
            if(err & err.response)
            setError(err.response.data.message)
        });
        if(response){
            alert("Welcome back")
        }
     }
    const formik= useFormik({
        initialValues: {
            email:" ",
            password:" "
        },
        validateOnBlur:true, 
        onSubmit,
        validationSchema: validationSchema
    })


    return(
        <div className="row">
            <div className="col-md-4">
                <div className="card card-body">
                    <div className="card-title">
                        <h3>Bienvenido!</h3>
                        {error ? 
                        <div>
                            {error}
                        </div> :
                        null
                    }
                        <form action="" onSubmit={formik.handleSubmit}>
                            <div className="form-group">
                            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} placeholder="Dirección de correo electrónico"/>
                                {formik.touched.email && formik.errors.email ? formik.errors.email:" "}
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} placeholder="Contraseña" />
                            </div>
                            <div className="link">
                                <a href="/">¿Olvidaste tu contraseña?</a>
                            </div>
                            <button type="submit" disabled={!formik.isValid} className="btn btn-primary">Ingresar</button>
                        <div className="link">
                            <a href="http://localhost:3000/signup">¿Primera vez? ¡Crea una cuenta!</a>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn