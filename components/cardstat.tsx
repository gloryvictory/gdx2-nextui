'use client'
import StatCard from "./statcard";
import { list_stat } from "@/config/lists";

export default function CardStat() {
  

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

      {list_stat.map((item, index) => (
        <StatCard key={index} title={item.title} url={item.url}/>  
      ))}

    </div>
  );
}
// CardHeader
