import React from "react";
import { Loader } from "../Loader";
import "./PageLoading.css";

export function PageLoading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}
