@articles.each do |article|
  json.set! article.id do
    json.id article.id
    json.title article.title
    json.body article.body
    json.author article.user.username
    json.comments article.comments
    json.createdAt article.created_at
  end
end
