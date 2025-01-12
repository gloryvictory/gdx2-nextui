'use client'
import { useCounts } from "@/app/hooks/useCounts";
import { gdx2_urls } from "@/config/urls";
import {Card, CardBody, CardFooter} from "@nextui-org/card"; // CardHeader,
import {Spinner} from "@nextui-org/spinner";

const url = gdx2_urls.gdx2_url_report_author_count

interface StatCardProps {
  title : string , 
  url   : string
}

export default function StatCard ({ title, url }: StatCardProps ) {

  const { stat_count, loading, error,} = useCounts(url)

  return (        
        <Card key={title} isPressable shadow="sm" onPress={() => console.log("Card pressed")} className="hover:bg-slate-200 dark:hover:bg-slate-600">
          {/* <CardHeader className="flex gap-3">  </CardHeader> */}
          <CardBody className="overflow-visible p-3">
          <b>{title}</b>
          </CardBody>
          <CardFooter className="text-small justify-between">
            { loading && <Spinner /> }
            { error && `Error: ${error}` }
            <p className="text-default-500">{`${stat_count?.count}`}</p>
          </CardFooter>
        </Card>
  );
}

