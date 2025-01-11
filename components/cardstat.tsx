'use client'
import { gdx2_urls } from "@/config/urls";
import StatCard from "./statcard";

export default function CardStat() {
  const list = [
    {
      title: "Отчетов",
      url: gdx2_urls.gdx2_url_report_count,
    },
    {
      title: "Авторов",
      url: gdx2_urls.gdx2_url_report_author_count,
    },
    {
      title: "Листов карт",
      url: gdx2_urls.gdx2_url_report_list_count,
    },
    {
      title: "Субъектов РФ",
      url: gdx2_urls.gdx2_url_report_subrf_count,
    },
    {
      title: "Организаций",
      url: gdx2_urls.gdx2_url_report_org_count,
    },
    {
      title: "Площадей",
      url: gdx2_urls.gdx2_url_report_area_count,
    },
    {
      title: "Месторождений",
      url: gdx2_urls.gdx2_url_report_field_count,
    },
    {
      title: "Лицензий",
      url: gdx2_urls.gdx2_url_report_lu_count,
    },
    {
      title: "ПИ",
      url: gdx2_urls.gdx2_url_report_pi_count,
    },
    {
      title: "Вид работ",
      url: gdx2_urls.gdx2_url_report_vid_rab_count,
    },
  ];
  

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">

      {list.map((item, index) => (
        <StatCard key={index} title={item.title} url={item.url}/>  
      ))}

    </div>
  );
}
// CardHeader
