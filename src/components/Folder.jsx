import React, { useState } from "react";
import TreeView from "./TreeView";

const Folder = ({ name, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleFolder = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="folder">
            <div onClick={toggleFolder} className="folder-name">
                {isOpen ? "📂" : "📁"} {name}
            </div>
            {isOpen && (
                <div className="folder-contents">
                    {children.map((child) => (
                        <TreeView key={child.id} node={child} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Folder;
