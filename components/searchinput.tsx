"use client"

import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import { SearchIcon } from "./icons";
import React from "react";
import { Button } from "@nextui-org/button";



export default function SearchInput() {
  
  const[inputValue, setInputValue] = React.useState("");

  const onChane = ( e: React.ChangeEvent<HTMLInputElement>) => {
    
    setInputValue(e.target.value);

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
        onPress={() => {console.log(inputValue)}}
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
      onChange={onChane}
      value={inputValue}
      />

      <div className='bg-slate-100 rounded-md p-2 text-center text-sm mt-1'>
        Вы искали: <strong>{inputValue.length > 3 ? inputValue: ""}</strong> Найдено: <strong>{'0' }</strong> отчетов
      </div>


    </div>
    
  );
}
// CardHeader


