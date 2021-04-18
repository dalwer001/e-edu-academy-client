import React from 'react';
import NavbarDashboard from '../NavbarDashboard/NavbarDashboard';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';



const AddCourse = () => {

    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null)

    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e =>{
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);
        formData.append('price', info.price);


        fetch('https://safe-fjord-30428.herokuapp.com/addCourse', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            e.target.reset();
            if(data){
                alert('New Course Added');
            }
        })
        .catch(error => {
            console.error(error)
        })
    }


    return (
        <section className="fluid-container ">
            <NavbarDashboard></NavbarDashboard>
            <div className="row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-10 p-4 mx-auto">
                    <h1 className="border-bottom mb-2 text-brand">Add Course</h1>

                    <form class="row  bg-secondary shadow mt-5 p-5 rounded container shadow" onSubmit={handleSubmit}>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder text-white">Course Title</label>
                            <input type="text" name="title" onBlur={handleBlur} class="form-control" placeholder="Enter Course Title" />
                        </div>
                        <div className="col-md-6">
                            <label class="form-label fw-bolder text-white">Image</label>
                            <input class="form-control" onChange={handleFileChange}  type="file" name="picture"  />
                        </div>

                        <div className="col-md-6">
                            <label class="form-label fw-bolder text-white">Price</label>
                            <input type="double" name="price" onBlur={handleBlur} class="form-control" placeholder="price" />
                        </div>

                        <div className="col-md-6">
                            <label class="form-label fw-bolder text-white">Description</label>
                            <textarea type="text" onBlur={handleBlur} name="description" class="form-control" style={{height:'15vh'}} placeholder="description" />
                        </div>

                        <div className="col-md-12 d-flex align-items-center">
                            <input type="submit" className="mt-3 btn btn-brand " />
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default AddCourse;