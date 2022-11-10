class SpellBookSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :description

  has_many :spells
end
