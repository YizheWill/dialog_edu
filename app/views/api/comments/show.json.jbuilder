json.comment do
  json.extract! @comment, :id, :article_id, :content, :created_at
  json.commenter @comment.user
end
