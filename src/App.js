import React from "react";
import FileManager from "./components/FileManager";
import LoadingSpinner from "./components/LoadingSpinner";
import { useFetchData } from "./hooks/useFetchData";

const App = () => {
    const { data, loading, error } = useFetchData("https://pdf-viewer-1.onrender.com/api/drive/files");

    if (loading) return <LoadingSpinner />;
    if (error) return <div>Error: {error}</div>;
    // console.log(data);

    const rootFoLder = {
      isFolder:true,
      name: 'שיעורי הרב יעקב לנדא',
      children: data
    }

    return <FileManager data={rootFoLder} />;
};

export default App;
