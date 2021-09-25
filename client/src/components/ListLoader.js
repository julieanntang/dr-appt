import React from "react";
import useAxiosOnMount from "../hooks/useAxiosOnMount";
import SemanticLoader from "./SemanticLoader";
import SemanticLoadError from "./SemanticLoadError";

export default function ListLoader({ url, renderData }) {
  const {data, loading, error} = useAxiosOnMount(url)

  const renderList = () => {
    if (loading) return <SemanticLoader />;
    if (error)
      return (
        <SemanticLoadError
        header={"Error occurred getting data"}
        error={error}
        />
      );
      
    return data.map(renderData);
  };


  return (
    <div>
    {renderList()}
    </div>
  );
}