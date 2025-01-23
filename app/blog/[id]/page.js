import blog from "@/app/lib/blog"

export default async function page({params}) {
    const {id} = params
    const data = await blog(id)
    console.log(data)
  return (
    <div className="w-6/12 mx-auto">
        <h2 className="text-3xl mt-4 text-purple-600 font-semibold text-center">Blog Details</h2>
    <div className="mt-7 text-center bg-purple-50 p-4 rounded-xl shadow-md">
        <p className="text-xl text-purple-700">{data.title}</p>
        <hr className="mt-2 mb-1"></hr>
        <p className="text-gray-500">{data.body}</p>
    </div>
    
    </div>
  )
}
