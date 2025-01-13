"use client"

import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { SearchIcon } from "./icons";
import React, { useState } from "react";
import { Button } from "@nextui-org/button";
import { useSearch } from "@/app/hooks/useSearch";
import { IReport, IResultReport } from "@/types/models";
import { Spinner } from "@nextui-org/spinner";
import { gdx2_urls } from "@/config/urls";
import axios, { AxiosError } from "axios";
import CardReport from "./cardreport";



export default function SearchInput() {
  
  const[inputValue, setInputValue] = React.useState("");

  const [msgError, setMsgError] = useState<string>('')
  const [isLoading, setLoading] = useState<boolean>(false)
  const [initialList, setInitialList] = useState<IReport[]>()



  const onChange = ( e: React.ChangeEvent<HTMLInputElement>) => {
    
    setInputValue(e.target.value);

  }
  
  const getData = async () => {
    setLoading(true)
    const url = `${gdx2_urls.gdx2_url_report_search}${inputValue}`
    try {
      const response = await axios.get<IResultReport>(url)
      setInitialList(response?.data.data)
    } catch (e: unknown) {
      const error = e as AxiosError
      setLoading(false)
      setMsgError(error.message)
    }
    setLoading(false)
  }


  const onPress = ( ) => {
    getData()
  }


  

// width:-webkit-fill-available
  return (
    <div className={"w-full"}> 

      <Input
      aria-label="Поиск"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Button 
        className="hidden lg:inline-block"
        onPress={onPress}
        >Найти</Button>
        // <Kbd className="hidden lg:inline-block" keys={["command"]}>
        //   K
        // </Kbd>
      }
      labelPlacement="outside"
      placeholder="Поиск..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      onChange={onChange}
      value={inputValue}
      />

      <div className='bg-slate-100 rounded-md p-2 text-center text-sm mt-1'>
        Вы искали: <strong>{inputValue.length > 3 ? inputValue: ""}</strong> Найдено: <strong>{`${initialList?.length}` }</strong> отчетов
      </div>
      { isLoading && <Spinner className="flex justify-center align-middle " /> }
      { msgError && `Error: ${msgError}` }

      <div className="gap-3 grid grid-cols-3 sm:grid-cols-3 mt-1">

      {initialList?.length && initialList?.map((item: IReport ) => (
              <CardReport key={item.id} item={item} onClick={()=>{}}/>

        ))
        // setCurentItem(item); showDrawer()
      }
      </div>

      

    </div>
    
  );
}
// CardHeader


