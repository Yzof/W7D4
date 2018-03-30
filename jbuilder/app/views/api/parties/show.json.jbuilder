json.name @party.name
json.location @party.location
json.guests @party.guests do |guest|
  json.guest_id guest.id
  json.partial! 'api/guests/guest', guest: guest
  json.gifts guest.gifts.each do |gift|
    json.gift_id gift.id
    json.partial! 'api/gifts/gift', gift: gift
  end
end
