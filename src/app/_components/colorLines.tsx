import React from "react";

function ColorLines({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div>
        <div className="h-0.5 w-10 md:w-20 bg-primary-green mb-1" />
        <div className="h-0.5 w-10 md:w-20 bg-primary-maron" />
      </div>
      <div className="text-primary-maron font-bold uppercase ">{text}</div>
    </div>
  );
}

export default ColorLines;
