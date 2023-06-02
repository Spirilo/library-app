import { useEffect, useState } from "react";
import { useLocation } from "react-router"

export const AuthorDetail = () => {
  
  const location = useLocation();

  console.log(location)
  return(
    <div>
      <h2>Kirjailija</h2>
    </div>
  )
}