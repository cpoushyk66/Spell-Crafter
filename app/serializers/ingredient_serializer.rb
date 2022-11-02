class IngredientSerializer < ActiveModel::Serializer
  attributes :id, :quantitiy, :purpose, :instructions
end
