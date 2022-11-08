class User < ApplicationRecord
    has_secure_password

    validates :username, presence: true
    validates :email, uniqueness: true
    validates :birthday, presence: true
    validate :born_in_past

    def born_in_past
        if birthday.present? && birthday > Date.today
            errors.add(:birth_date, "can't be in the future")
        end
    end

    has_many :spell_books
    has_many :spells, through: :spell_books
end
