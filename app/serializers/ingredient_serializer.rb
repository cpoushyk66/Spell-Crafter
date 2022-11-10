class IngredientSerializer < ActiveModel::Serializer
  attributes :quantitiy, :purpose, :instructions, :name

  belongs_to :component
end
