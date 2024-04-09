import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});

const uploadOnCloud = async (localFilePath) => {
    try {
        if (!localFilePath || !fs.existsSync(localFilePath)) {
            console.error("Local file does not exist:", localFilePath);
            return null;
        }

        // Upload the file to Cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        });

        // File has been uploaded successfully, delete the local file
        fs.unlinkSync(localFilePath);
        console.log("File is uploaded on Cloudinary", response.url);
        return response;
    } catch (error) {
        // Handle errors during the upload process
        console.error("Error during file upload:", error);

        // Check if the local file exists before attempting to delete
        if (fs.existsSync(localFilePath)) {
            // Remove the locally saved temporary file as the upload operation failed
            fs.unlinkSync(localFilePath);
            console.log("Local file deleted:", localFilePath);
        }

        return null;
    }
};




export {uploadOnCloud}