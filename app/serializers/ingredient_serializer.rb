class IngredientSerializer < ActiveModel::Serializer
  attributes :quantity, :purpose, :instructions, :name, :gender, :planet, :element, :parts_used, :notes

  def name
    self.object.component.name
  end

  def gender
    self.object.component.gender
  end

  def planet
    self.object.component.planet
  end

  def element
    self.object.component.element
  end

  def parts_used
    self.object.component.parts_used
  end

  def notes
    self.object.component.notes
  end

  belongs_to :component
end
