export const validateFile = ( file ) => {
    const allowedExtensions =  ['jpg', 'jepg', 'png'];
          
    const { name:fileName } = file;
  
    const fileExtension = fileName.split(".").pop();
  
    if ( !allowedExtensions.includes(fileExtension) ) {
      return false;
    } else {
        return true;
    }
  }