import { useState } from "react"

export const useForm =(initialForm, validateForm)=>{
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});
    const [load, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChanges = (e)=>{}
    const handleBlur = (e)=>{}
    const handleSubmit = (e)=>{}


    return (
        form, errors, load, response, handleChanges,handleBlur,handleSubmit


    );
};
