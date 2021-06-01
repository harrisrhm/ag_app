require 'dotenv/load'
require 'algolia'
require 'json'

# initialize the client
client = Algolia::Search::Client.create(ENV['APP_ID'], ENV['API_KEY'])

# push data to algolia
index = client.init_index('items')
batch = JSON.parse(File.read('data/items.json'))
index.save_objects(batch)

# indexing list of attributes
index.set_settings({
  searchableAttributes: [
    'name',
    'description',
    'brand'
  ],
  customRanking: [
    'desc(rating)',
    'desc(popularity)'
  ],
  attributesForFaceting: [
    'searchable(brand)',
    'hierarchicalCategories',
    'price',
  ]
})