
export default function MenuItem() {
    return (
        <div className="bg-gray-200 rounded-lg text-center p-4 hover:bg-white transition-all hover:shadow-md hover:shadow-black/25">
            <div className="text-center">
            <img src="pizza.png" alt="Pizza" className="block mx-auto max-h-24 max-h-auto" />
            </div>
            <h4 className="font-semibold text-xl my-2">Pepporoni Pizza</h4>
            <p className="text-gray-500 text-sm">lorem ipsum doloer elit considirut apsiding elit fdjo fffdr rrrr.</p>
            <button className="bg-primary text-white px-4 py-2 rounded-full mt-4">Add To Cart $12</button>
        </div>
    )
}


