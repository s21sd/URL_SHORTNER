import React, { useEffect, useState } from 'react'
import axios from "axios"
import Result from './Result';
const Apicall = (props) => {
    const { data } = props;
    const [url, setUrl] = useState();

    useEffect(() => {
        if (data) {
            axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(data)}`)
                .then((res) => {
                    setUrl(res.data);
                   
                })
        }
        else {
            console.log("error");
        }

    }, [data])
    return (
        <div>
            <Result acVal={data} linkVal={url} />
        </div>
    )
}

export default Apicall
