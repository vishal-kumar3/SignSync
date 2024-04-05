export async function POST(req) {
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
  const body = req.body;

  try {
    const readData = await fetch(`${baseurl}/insertOne`, {
      ...fetchOptions,
      body: JSON.stringify({
        ...fetchBody,
        sort: { updatedAt: -1 },
        document: body,
      }),
    });
    const readDataJson = await readData.json();
    console.log(readDataJson);
    return new Response(readDataJson);
  } catch (err) {
    return new Response(`Lol ${id} working`, {
      status: 400,
    });
  }
}

function getByEmail(email, callback) {
  console.log("Hello");
  const MongoClient = require('mongodb').MongoClient;
  const uri = 'mongodb+srv://vishal:vishal@todoapp.uwrvmbs.mongodb.net/?retryWrites=true&w=majority&appName=TodoApp';
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  
  client.connect(function (err) {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
      return callback(err);
    }

    const db = client.db('NewDatabase');
    const users = db.collection('users');
    
    console.log("Connected to database");

    users.findOne({ email: email }, function (err, user) {
      client.close();

      if (err) {
        console.error("Error finding user:", err);
        return callback(err);
      }
      
      if (!user) {
        console.log("User not found");
        return callback(null, null);
      }

      return callback(null, {
        user_id: user._id.toString(),
        nickname: user.nickname,
        email: user.email
      });
    });
  });
}

