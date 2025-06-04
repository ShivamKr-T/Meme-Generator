import React,{useState,useRef} from "react";
import Text from "../components/Text";
import { useSearchParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import * as htmlToImage from 'html-to-image';
import download from 'downloadjs';

const EditPage=()=>{
    const [params]=useSearchParams();
    const [count,setCount]=useState(0);

    const memeRef=useRef(null);

    const addText=()=>{
        setCount(count+1);
    };

    const downloadMeme = () => {
        if (!memeRef.current) return;

        htmlToImage.toJpeg(memeRef.current, { quality: 0.95 })
        .then((dataUrl) => {
            download(dataUrl, "meme.jpeg");
        })
        .catch((err) => {
            console.error("Export failed:", err);
        });
    };

    return(
        <div>
            <div style={{width:'500px',border:'1px solid',backgroundColor:'white'}} ref={memeRef} className="meme mt-5 mb-5">
                <img src={params.get("url")} width="250px" />
                {Array(count).fill(0).map((e)=>(<Text/>))}
            </div>
            <Button onClick={addText} style={{marginRight:'5px'}}>Add Text</Button>
            <Button variant="success" onClick={downloadMeme}>Save</Button>
        </div>
    )
}

export default EditPage;