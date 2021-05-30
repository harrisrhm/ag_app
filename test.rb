require 'algolia'
require 'json'

client = Algolia::Search::Client.create('LG58UB0A5R', '29cb07ffc76d1661e129ecbdf15ad8ac')
index = client.init_index('ag')

index = client.init_index('items')
batch = JSON.parse(File.read('items.json'))
index.save_objects(batch)

index.set_settings({
  searchableAttributes: [
    'name',
    'description',
    'brand'
  ]
})