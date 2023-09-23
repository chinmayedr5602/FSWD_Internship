const { MongoClient, ObjectId } = require('mongodb');

const url = 'mongodb+srv://bhuvanlpoojari01:7mjNvZn4YcVxXtD3@cluster0.hqgp6md.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

async function getUserDataById(idToRetrieve) {
    try {
        await client.connect();
        const db = client.db('test'); // Replace with your database name

        // Replace 'your_collection_name' with the actual name of your collection
        const collection = db.collection('abces');

        // Convert the string to an ObjectId
        const objectId = new ObjectId(idToRetrieve);

        // Query the collection to find the document by _id
        const user = await collection.findOne({ _id: objectId });

        if (user) {
            // Access the 'name' and 'email' fields from the retrieved document
            const name = user.name;
            const email = user.email;

            // Use 'name' and 'email' as needed
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
        } else {
            console.log('Document not found'); // No document with the specified _id
        }
    } catch (err) {
        console.error(err);
    } finally {
        client.close();
    }
}

// Replace 'your_id_here' with the actual ObjectId you want to retrieve
const idToRetrieve = '650c5f89ca643270b2dbadf3';
getUserDataById(idToRetrieve);
