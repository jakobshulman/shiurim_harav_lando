import React from "react";

// פונקציה שמסירה את הסיומת של הקובץ
const removeFileExtension = (fileName) => {
    const index = fileName.lastIndexOf(".");
    return index !== -1 ? fileName.substring(0, index) : fileName;
};

const File = ({ id, name }) => {
    const displayName = removeFileExtension(name);

    // יצירת לינק לצפייה בקובץ בגוגל דרייב
    const driveLink = `https://drive.google.com/file/d/${id}/view`;

    return (
        <div className="file">
            📄 <a href={driveLink} target="_blank" rel="noopener noreferrer">{displayName}</a>
        </div>
    );
};

export default File;
