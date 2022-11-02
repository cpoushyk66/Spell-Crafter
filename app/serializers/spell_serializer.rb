class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :spell_book_id, :description
end
