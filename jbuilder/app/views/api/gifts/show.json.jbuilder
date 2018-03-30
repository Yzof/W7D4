#json.extract! @gift, :id, :title, :description
json.partial! 'api/gifts/gift', gift: @gift
