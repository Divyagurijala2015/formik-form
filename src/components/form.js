import React from "react";
import { useFormik } from 'formik'
function Task3(){
    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },

        onSubmit:(values) =>{
            console.log(values)

        }
    })

    return(
        <div className='row'>
            <h3>FORMIK FORM</h3>
                <div className='col-md-6 offset-md-3'>
                    <div className='card'>
                        <div className='card-body'>
                            <form  autoComplete="off" onSubmit={formik.handleSubmit}>
                                <div className='form-group mt-2'>
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" className='form-control' required  value={formik.values.name} onChange={formik.handleChange}/>
                                </div>
                                <div className='form-group mt-2'>
                                <label htmlFor="name">Email</label>
                                    <input type="email" name="email" id="email" className='form-control' required  value={formik.values.email} onChange={formik.handleChange}/>
                                </div>
                                <div className='form-group mt-2'>
                                <label htmlFor="name">Password</label>
                                    <input type="password" name="password" id="mobile" className='form-control' required value={formik.values.password}  onChange={formik.handleChange}/>
                                </div>
                                <div className='form-group mt-2'></div>
                                    <input type="submit" value="create" className='btn btn-success' /> 
                            </form>
                        </div>
                    </div>
                </div>
            </div>
       
    )
}
export default Task3