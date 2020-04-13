# json.merge! spot
json.extract! spot, :id, :name, :host_id, :price, :location, :country, :latitude, :longitude, :activities, :description, :rating, :area, :essential, :amenity, :detail
json.photoUrls spot.photos.map { |file| url_for(file) }