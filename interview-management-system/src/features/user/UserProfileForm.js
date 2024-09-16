'use client';
import { useState } from 'react';
import styles from './UserProfileForm.module.css'
import FormInput from '@/components/formInput/FormInput'

export default function userProfileForm(){

    const [formData,setFormData] = useState({});

    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData((prevData) => ({
            ...prevData,[name]:value
        }))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-4 py-5 mx-10 md:grid-cols-2 sm:grid-cols-1">
                    <FormInput label="Name" name="name" type="text" onChange={handleChange} />
                    <FormInput label = "Date of Birth" name="date" type="date" onChange={handleChange} />
                    <FormInput label = "Email" name="email" type="email" onChange={handleChange} />
                    <FormInput label = "Mobile Number" name="number" type="number"onChange={handleChange} />
                    <FormInput label = "Year Of Experience" name="yoe" type="number"onChange={handleChange} />
                    <FormInput label = "Resume" name="resume" type="url" onChange={handleChange} />
                    {/* <p className="mb-2 font-sans subpixel-antialiased text-zinc-900">Resume</p> */}
                    {/* <input type="file" name="resume" onChange={handleChange}/> */}
                    <FormInput label = "Current Company / College" name="comp" type="text" onChange={handleChange} />
                    <FormInput label = "Qualification" name="qualification" type="text" onChange={handleChange} />
                    <FormInput label = "GitHub Link" name="github" type="url" onChange={handleChange} />
                    <FormInput label = "Post Appyling For" name="post" type="text" onChange={handleChange} />
                    <FormInput label = "LinkedIn" name="linkedin" type="url" onChange={handleChange} />
                </div>
                <div className='grid gap-4 py-5 mx-10 red'>
                    <button 
                    className="bg-gray-600 text-white py-3 rounded-lg 
                    hover:bg-white hover:text-gray-600 hover:border-2 
                    hover:outline hover:outline-gray-600
                     transition-colors duration-300 ease-in-out" 
                    type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}