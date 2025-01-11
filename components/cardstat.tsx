'use client'
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
// import {Image} from "@nextui-org/image";

export default function CardStat() {
  const list = [
    {
      title: "Отчетов",
      img: "/images/fruit-1.jpeg",
      price: "5444",
    },
    {
      title: "Авторов",
      img: "/images/fruit-2.jpeg",
      price: "4000",
    },
    {
      title: "Листов карт",
      img: "/images/fruit-3.jpeg",
      price: "224",
    },
    {
      title: "Субъектов РФ",
      img: "/images/fruit-4.jpeg",
      price: "113",
    },
    {
      title: "Организаций",
      img: "/images/fruit-5.jpeg",
      price: "1200",
    },
    {
      title: "Площадей",
      img: "/images/fruit-6.jpeg",
      price: "1300",
    },
    {
      title: "Месторождений",
      img: "/images/fruit-7.jpeg",
      price: "700",
    },
    {
      title: "Лицензий",
      img: "/images/fruit-8.jpeg",
      price: "607",
    },
    {
      title: "ПИ",
      img: "/images/fruit-7.jpeg",
      price: "51",
    },
    {
      title: "Вид работ",
      img: "/images/fruit-8.jpeg",
      price: "34",
    },
  ];
  

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        /* eslint-disable no-console */
        <Card key={index} isPressable shadow="sm" onPress={() => console.log("item pressed")} className="hover:bg-slate-200 dark:hover:bg-slate-600">
          {/* <CardHeader className="flex gap-3">  </CardHeader> */}
          <CardBody className="overflow-visible p-3">
          <b>{item.title}</b>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}

    </div>
  );
}
// CardHeader