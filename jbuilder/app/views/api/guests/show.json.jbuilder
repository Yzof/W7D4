#json.extract! @guest, :id, :name, :age, :favorite_color, :gifts
json.partial! 'api/guests/guest', guest: @guest
json.gifts @guest.gifts
