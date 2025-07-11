export function Item({ itemName, itemDescription, itemPrice, itemImage }) {
  return (
    <div className="flex flex-col items-start justify-start min-h-screen py-2 pl-2 bg-blue-100">
      <div className="bg-white shadow-lg rounded p-6 w-50">
        <p className="text-lg font-semibold mb-4 text-center">{itemName}</p>
        <img src={itemImage} alt={itemName} className="w-full object-cover rounded mb-4" />
        <p className="text-xs text-gray-700 italic mb-4">{itemDescription}</p>
        <p className="text-l font-bold text-gray-900">{`Rs. ${itemPrice}`}</p>
      </div>
    </div>
  );
}