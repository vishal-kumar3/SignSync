export async function GET(req){
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Request-Headers": "*",
      "api-key": process.env.MONGODB_DATA_API_KEY,
    },
  };
  const fetchBody = {
    collection: "todos",
    database: "todo",
    dataSource: "TodoApp",
    projection: {
      _id: 1,
    },
  };
  const baseurl = `${process.env.MONGODB_DATA_API_URL}/action`;

  try{
    const readData = await fetch(`${baseurl}/find`, {
      ...fetchOptions,
      body: JSON.stringify({
        ...fetchBody,
        sort: { updatedAt: -1 },
      }),
    });
    const readDataJson = await readData.json();
    console.log(readDataJson);
    return new Response(readDataJson)
  } catch (err){
    return new Response(`Lol ${id} working`, {
      status: 400,
    })
  }
}