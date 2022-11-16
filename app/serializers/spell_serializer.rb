class SpellSerializer < ActiveModel::Serializer
  attributes :id, :name, :spell_book_id, :description, :instructions, :original_poster

  def original_poster
    User.find_by(id: self.object.original_poster_id).username
  end

  has_many :ingredients
end
