class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :password_digest, :image, :birthday, :bio
end
