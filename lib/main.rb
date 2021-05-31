require 'dotenv/load'
require 'algolia'
require 'json'

client = Algolia::Search::Client.create(ENV['APP_ID'], ENV['API_KEY'])

index = client.init_index('items')
batch = JSON.parse(File.read('data/items.json'))
index.save_objects(batch)

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