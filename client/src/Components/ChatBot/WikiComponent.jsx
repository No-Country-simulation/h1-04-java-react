/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const WikiComponent = ({ steps }) => {
    const [url, setUrl] = useState("");

    useEffect(() => {
        const { select } = steps;
        
        switch (select.value) {
            case "ley-justina":
                setUrl("https://www.argentina.gob.ar/noticias/ley-justina-una-esperanza-para-quienes-aguardan-un-trasplante");
            break;
            
            case "justina-lo-cane":
                setUrl("https://www.infobae.com/sociedad/2018/07/04/quien-era-justina-lo-cane-la-chica-que-inspiro-el-cambio-en-la-donacion-de-organos/");
            break;
            
            default:
                setUrl("");
        }
    }, [steps]);

    return (
        <div>
            {url ? (
                <div>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="linkVerMasInfo">
                        Ver más información
                    </a>
                </div>
            ) : (
                <div>No hay información disponible.</div>
            )}
        </div>
    );
};

export default WikiComponent;