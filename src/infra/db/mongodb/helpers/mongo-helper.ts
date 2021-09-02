import { Collection, MongoClient } from 'mongodb'

let client: MongoClient

export const MongoHelper = {
  async connect(uri: string): Promise<void> {
    this.client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  },

  async disconnect(): Promise<void> {
    await this.client.close()
  },

  getCollection(name: string): Collection {
    return this.client.db().collection(name)
  }
}