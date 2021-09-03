const ImagesCard = ({image}) => {
    return (
        <div className="max-w-sm rounded shadow-lg overflow-hidden">
            <img src={ image.webformatURL } alt="" className="w-full" />
            <div className="px-6 py-4">
                <div className="font-bold text-purple-500 mb-2 text-xl">{ image.user }</div>
                <ul>
                <li>
                    <strong>Views: </strong>
                    { image.views }
                </li>
                <li>
                    <strong>Downloads: </strong>
                    { image.downloads }
                </li>
                <li>
                    <strong>Likes: </strong>
                    { image.likes }
                </li>
                </ul>
            </div>
            <div className="px-6 py-4">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #tag1
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #tag2
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #tag3
                </span>
            </div>
        </div>
    );
}
 
export default ImagesCard;