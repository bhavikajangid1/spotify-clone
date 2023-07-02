import { couldinary_upload_preset } from "../../config";
import {openUploadWidget} from "../../utils/CloudinaryService";

const CloudinaryUpload = ({label,setUrl,filename}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "da8sulcio",
                uploadPreset: couldinary_upload_preset,
                sources: ["local"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    filename(result.info.original_filename);
                } else {
                    if(error)
                    alert("Could not upload")
                        console.log(error);
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-gray-400
            text-black  rounded-full p-4 font-semibold"
            onClick={uploadImageWidget}
        >
            {label}
        </button>
    );
};

export default CloudinaryUpload;