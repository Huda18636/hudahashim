import Image from "next/image";
import { Item, User } from "./components/Item";

export default function Home() {
  return (
    <div>
  <h1 className="text-2xl font-bold text-center my-4 flex items-center justify-center">
    <img src="nmlogo.jpg" alt="Icon" className="h-15 mr-2" /> {/* Image as icon */}
    Nia Mia
  </h1>
<div className="bg-gray-100">
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 py-8">
    {items.map((item, index) => (
      <Item
        key={index}
        itemName={item.itemName}
        itemDescription={item.itemDescription}
        itemImage={item.itemImage}
        itemPrice={item.itemPrice}
      />
    ))}
  </div>
  </div>
</div>
  );
}
const items = [

  { itemName: "Luna", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/1_22a6f14d-8cee-43f0-addc-2b7b4ef62143.jpg?v=1740468965", itemPrice: "13,000" },
  { itemName: "Elle", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/2_e14afd48-e05b-4d10-857a-025fee9cd23c.jpg?v=1740467906", itemPrice: "12,500" },
  { itemName: "Midnight", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/1_3be8eb23-6239-4180-b00e-4209e7296988.jpg?v=1740468610", itemPrice: "12,000" },
  { itemName: "Rosette", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/4_20c1b162-0a5e-4425-ad1e-b8b02432d4cb.jpg?v=1740468108", itemPrice: "11,000" },
 { itemName: "Luna2", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/1_22a6f14d-8cee-43f0-addc-2b7b4ef62143.jpg?v=1740468965", itemPrice: "13,000" },
  { itemName: "Elle2", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/2_e14afd48-e05b-4d10-857a-025fee9cd23c.jpg?v=1740467906", itemPrice: "12,500" },
  { itemName: "Midnight2", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/1_3be8eb23-6239-4180-b00e-4209e7296988.jpg?v=1740468610", itemPrice: "12,000" },
  { itemName: "Rosette2", itemDescription: "hello hellloo helllooo", itemImage: "https://niamiaofficial.com/cdn/shop/files/4_20c1b162-0a5e-4425-ad1e-b8b02432d4cb.jpg?v=1740468108", itemPrice: "11,000" },


]