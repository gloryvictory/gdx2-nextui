import { IReport } from "@/types/models";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";
import { MouseEventHandler } from "react";



export interface ReportCardProps  {
  onClick?: MouseEventHandler<HTMLDivElement>;
  item: IReport;
}

// export const ReportCard = (report_props: ReportCardProps ) => {
// 
export default function CardReport({item, onClick } : ReportCardProps ) {
  // const {item, onClick } = report_props;


  return (
    <Card className="max-w-[400px] hover:shadow-large  hover:outline-offset-1	 hover:ring-2 hover:ring-blue-500/50 focus:shadow-large focus:outline  focus:ring-2 focus:ring-blue-500/50">
      <CardHeader className="flex gap-3">
        <div className="flex flex-col">
          <p className="text-md text-small text-default-500">{item.id}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <strong className="text-small">{`${item.author_name.length ? `${item.author_name}` : 'Автор не указан.'} `} </strong>
        <p className="text-small text-default-500">{item.report_name}</p>
      </CardBody>
      <Divider />
      <CardFooter>
      <div className="flex gap-3 items-center justify-between space-x-6  text-small"> 
      {/* flex  items-center justify-between space-x-6 */}
        <div>{`№ РГФ: ${item.rgf.length ? `${item.rgf}` : ''} `}</div>
        {/* <Divider orientation="vertical" /> */}
        <div>{`${item.tgf.length ? `${item.tgf}` : ''} `}</div>
        {/* <Divider orientation="vertical" /> */}
        <div>{'Год: ' + `${item.year_str.length ? `${item.year_str}` : ''}`}</div>
      </div>
      </CardFooter>
    </Card>
  );
}

{/* <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
          Visit source code on GitHub.
        </Link> */}
