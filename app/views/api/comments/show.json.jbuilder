json.comment do
  json.extract! @comment, :id, :user_id, :article_id, :content, :created_at
end
