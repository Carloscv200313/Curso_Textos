"use client";
import { DirectionAwareHover } from "../ui/direction-aware-hover";

export function Imagen() {
  const imageUrl ="/alumnos/carlos_calderon/foto.png"
  return (
    <div className="ht-[30rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Carlos Sebastian</p>
        <p className="font-bold text-xl">Calderon Vega</p>
        
      </DirectionAwareHover>
    </div>
  );
}
