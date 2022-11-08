class TagLink < ApplicationRecord

    validates :tag_id, presence: true
    validates :tagged_id, presence: true
    validates :tagged_type, presence: true

    belongs_to :tag
    belongs_to :tagged, polymorphic: true
end
