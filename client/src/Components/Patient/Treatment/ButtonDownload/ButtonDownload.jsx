/* eslint-disable react/prop-types */
import { saveAs } from "file-saver";

const ButtonDownload = ({ image, CVFile, text }) => {
    const downloadFile = () => {
        fetch(CVFile)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then(blob => {
                saveAs(blob, `${text}.pdf`);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    return (
        <div onClick={downloadFile} className="cursor-pointer">
            <span>
                { image != null ? <img src={image} alt='download' /> : <p>Descargar Receta</p> }
            </span>
        </div>
    )
}

export default ButtonDownload;