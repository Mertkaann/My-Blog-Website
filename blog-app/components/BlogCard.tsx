interface BlogCardProps {

    name: string,
    description: string,
    thumbnail: string,
    date: string,
    type: string
}

function BlogCard(data: BlogCardProps) {



    return (
        <div
            className="w-full mt-10 shadow-sm rounded-full transform hover:scale-[1.01]">

            <a href="">
                <img className="h-64 w-full border-tl-lg "

                    src={data.thumbnail} width={300} />
            </a>


            <div className="bg-gray-50 w-full pl-7 py-8 flex flex-col gap-4">
                <div className="text-3xl py-2">{data.name}</div>

                <div className="text-[#AAAAAA] text-sm ">{data.description}
                    <a href="#" className="underline hover:text-black pl-1">Read More...</a>
                </div>
                <div className="text-[#AAAAAA] text-sm">{data.date} |  {data.type}</div>

            </div>

        </div>
    )
}


export default BlogCard;