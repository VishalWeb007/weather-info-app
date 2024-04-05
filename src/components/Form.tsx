import React, { useState, FormEvent, ChangeEvent } from 'react';

interface formProps {
      onSubmit: (arg: weatherForm) => void;
}

const Form: React.FC<formProps> = ({ onSubmit }) => {
    const [city, setCity] = useState<string>('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let lat:number| undefined;
        let lon:number| undefined;
        const data = { city, lat, lon };
        onSubmit(data);
        // setCity(''); 
    };

    return (
        <div className="container py-5">
            <h2 className='MainTitle'>Weather Information  Web Application </h2>
            <form className="form-group w-100 text-center" onSubmit={handleSubmit}>
                <div className=' row d-flex justify-content-center align-items-center   '>
                    <div className=' col-md-8 col-lg-6 col-xl-6 d-flex'>
                    <input
                     className='form-control '
                        type="text"
                        value={city}
                        onChange={handleChange}
                        placeholder="Enter city name"
                    />
                    <button className="btn  btn-primary" type="submit">Search</button>
                    </div>
                </div>
                
            </form>
        </div>
    );
};

export default Form;
