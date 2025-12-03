import { Client, Databases } from 'appwrite';

const client = new Client();

client.setEndpoint("https://fra.cloud.appwrite.io/v1");

client.setProject("69300ffe0037d7c9b100");

const databases = new Databases(client);

export { client, databases };
