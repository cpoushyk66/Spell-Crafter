class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :image, :birthday, :bio

  has_many :spell_books
end
