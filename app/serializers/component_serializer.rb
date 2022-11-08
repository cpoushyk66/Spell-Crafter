class ComponentSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :planet, :element, :parts_used, :notes
end
