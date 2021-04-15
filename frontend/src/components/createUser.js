import React, { useState } from 'react';
 import axios from 'axios'; 
import { useFormik} from 'formik';
 import  * as Yup from 'yup'; 


function CreateUser(){
    const { setSucess}= useState(null);
    const validate = values => {
        const errors = {};
        if(!values.username){
            errors.username = "Este campo es obligatorio!"
        } 
        if (!values.email){
            errors.email ="El mail es obligatorio!"
        } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email ="El formato de email no es correcto!"
        }
        
        if (values.password.length < 6){
            errors.password = "La contraseña debe ser de más de 6 caracteres!"
        } 
        if (!values.confirmPassword){
            errors.confirmPassword ="Las contraseñas no coinciden"
        } else if (values.password !== values.confirmPassword){
            errors.confirmPassword ="Las contraseñas no coinciden!"
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
            username:"",
            email:"",
            password:"",
            confirmPassword:""
        },
        validate,
         validationSchema: Yup.object({
            username: Yup.string().required(),
            email:Yup.string().email().required(),
             password: Yup.string().required(),
            confirmPassword: Yup.string().required(),
        }), 
        onSubmit: async (values) => {
            console.log(values);
            const {confirmPassword, ...data } = values;
            const response = axios.post('http://localhost:4000/users',data).catch((err)=>{
                if(err && err.response){
                    console.log("Error: ",err);
                };
                if(response && response.data){
                    setSucess(response.data.message)
                    
                }
            })
            
        }
      
    })

        return(
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body align-content-center">
                       <div className="card-title"> 
                       <h3>Registrate!</h3>
                       </div>
                       
                        <form action="" onSubmit={formik.handleSubmit} >
                            <div className="form-group">
                        <input type="text" placeholder="tu nombre va aqui" name="username" id="username" onChange={formik.handleChange} />
                        {formik.errors.username ? 
                        <div> 
                            {formik.errors.username}
                        </div> :null
                         }
                        </div>
                       <div className="form-group">
                       <input type="email" placeholder="tu mail va aqui" name="email" id="email" onChange={formik.handleChange}/>
                       {formik.errors.email ? 
                        <div> 
                            {formik.errors.email}
                            </div> : null
                        } 
                       </div>
                       <div className="form-group">
                       <input type="password" placeholder="tu contraseña va aqui" name="password" id="password"onChange={formik.handleChange}/>
                       {formik.errors.password ?
                       <div>
                           {formik.errors.password}
                       </div> :null
                       }
                       </div>
                       <div className="form-group">
                        <input type="password" placeholder="confirmar contraseña" name="confirmPassword"id="confirmPassword"onChange={formik.handleChange}/> 
                        {formik.errors.confirmPassword ? 
                        <div>
                            {formik.errors.confirmPassword}
                        </div>    :null 
                    }
                        </div>
                        <button type="submit" className=" btn btn-primary">Submit</button>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
export default CreateUser
