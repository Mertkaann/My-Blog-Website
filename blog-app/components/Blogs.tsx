import BlogCard from "./BlogCard"


export default function Blogs() {

    const blogs = [
        {
            name: "Overlaid the jeepers uselessly much excluding", "description": "Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.",
            thumbnail: "https://uploads-ssl.webflow.com/6488d3235594acd906f1f0ec/6488d3235594acd906f1f0f1_3f4eb74a.jpg",
            date: "June 13, 2023",
            type: "Tech"
        },
        {
            name: "Overlaid the jeepers uselessly much excluding", "description": "Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.",
            thumbnail: "https://uploads-ssl.webflow.com/6488d3235594acd906f1f0ec/6488d3235594acd906f1f0f1_3f4eb74a.jpg",
            date: "JUNE 13, 2023",
            type: "TECH"
        },
        {
            name: "Overlaid the jeepers uselessly much excluding", "description": "Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.",
            thumbnail: "https://uploads-ssl.webflow.com/6488d3235594acd906f1f0ec/6488d3235594acd906f1f0f1_3f4eb74a.jpg",
            date: "June 13, 2023",
            type: "Tech"
        },
        {
            name: "Overlaid the jeepers uselessly much excluding", "description": "Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.",
            thumbnail: "https://uploads-ssl.webflow.com/6488d3235594acd906f1f0ec/6488d3235594acd906f1f0f1_3f4eb74a.jpg",
            date: "JUNE 13, 2023",
            type: "TECH"
        },
        {
            name: "Overlaid the jeepers uselessly much excluding", "description": "Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.",
            thumbnail: "https://uploads-ssl.webflow.com/6488d3235594acd906f1f0ec/6488d3235594acd906f1f0f1_3f4eb74a.jpg",
            date: "June 13, 2023",
            type: "Tech"
        },
        {
            name: "Overlaid the jeepers uselessly much excluding", "description": "Saucer dark cup french press. Barista beans, organic eu variety skinny acerbic flavour caffeine white. Steamed, plunger pot ut dripper decaffeinated, caramelization, sit barista mug con panna shop turkish.",
            thumbnail: "https://uploads-ssl.webflow.com/6488d3235594acd906f1f0ec/6488d3235594acd906f1f0f1_3f4eb74a.jpg",
            date: "JUNE 13, 2023",
            type: "TECH"
        },
    ]


    return (
        <div className="w-3/4  px-10 flex flex-col items-center gap-4">
            {
                blogs.map((blog, i) => (
                    <BlogCard {...blog} />

                ))
            }
        </div>
    )
}