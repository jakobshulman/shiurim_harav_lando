import React, { useState } from "react";

// פונקציה שמסירה את הסיומת של הקובץ
const removeFileExtension = (fileName) => {
    const index = fileName.lastIndexOf(".");
    return index !== -1 ? fileName.substring(0, index) : fileName;
};

const File = ({ id, name }) => {
    const [isVisible, setIsVisible] = useState(false);  // משתנה למעקב אחרי הצגת ה-iframe
    const displayName = removeFileExtension(name);

    // יצירת לינק לצפייה בקובץ בגוגל דרייב
    const driveLink = `https://drive.google.com/file/d/${id}/preview`;
    
    // לינק להורדה ישירה של הקובץ
    const downloadLink = `https://drive.google.com/uc?export=download&id=${id}`;

    const handleClick = (e) => {
        e.preventDefault();  // למנוע את המעבר לדף חדש
        setIsVisible(!isVisible);  // לשנות את המצב ולהציג את ה-iframe
    };

    return (
        <div className="file">
            📄 <a href={driveLink} onClick={handleClick}>{displayName}</a>

            {isVisible && (
                <div className="file__iframe">
                    <iframe
                        src={driveLink}
                        width="50%"
                        height="400vw"
                        title="PDF Viewer"
                    ></iframe>
                    <div>
                        <a href={downloadLink} download>
                            <button>הורד את הקובץ</button>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default File;
