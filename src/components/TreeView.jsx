import React from "react";
import Folder from "./Folder";
import File from "./File";

const TreeView = ({ node }) => {
    const { isFolder, name, id, children } = node;

    if (isFolder) {
        return <Folder name={name} children={children} />;
    } else {
        return <File id={id} name={name} />;
    }
};

export default TreeView;
