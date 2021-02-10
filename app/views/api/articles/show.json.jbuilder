json.article do
  json.extract! @article, :id, :title, :body, :user, :created_at
  json.comments @article.comments do |c|
    json.commenter c.user
    json.content c.content
    json.createdAt c.created_at
  end
end
