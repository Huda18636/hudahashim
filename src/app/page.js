import Image from "next/image";
import { Item, User } from "./components/Item";

export default function Home() {
  return (
    <div>
  <h1 className="text-2xl font-bold text-center my-4 flex items-center justify-center">
    <img src="nmlogo.jpg" alt="Icon" className="h-15 mr-2" /> {/* Image as icon */}
    Nia Mia
  </h1>
  <div className="flex flex-col items-start justify-start min-h-screen py-2 pl-2 bg-blue-100">
    <Item 
      itemName="huda" 
      itemDescription="hello hellloo helllooo" 
      itemImage="greensuit.jpg" 
      itemPrice="12,000" 
    />
  </div>
</div>
  );
}
const items = [
  Item({ itemName: "huda", itemDescription: "hello hellloo helllooo", itemImage: "greensuit.jpg", itemPrice: "12,000" }),
  
]