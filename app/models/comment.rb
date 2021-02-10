class Comment < ApplicationRecord
  validates :user_id, :article_id, :content, presence: true
  belongs_to :user
  belongs_to :article
end
