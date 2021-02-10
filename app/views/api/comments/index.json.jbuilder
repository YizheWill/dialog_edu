@comments.each do |comment|
  json.set! comment.id do
    json.id comment.id
    json.user_id comment.user_id
    json.article_id comment.article_id
    json.content comment.content
    json.createdAt comment.created_at
  end
end
