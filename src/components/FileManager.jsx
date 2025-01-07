import React from "react";
import TreeView from "./TreeView";

const FileManager = ({ data }) => {
    return (
        <div className="file-manager">
            <TreeView node={data} />
        </div>
    );
};

export default FileManager;
