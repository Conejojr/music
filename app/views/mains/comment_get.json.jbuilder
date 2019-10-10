json.array! @comments do |comment|
  json.comment simple_format(comment.comment)
  json.nickname comment.nickname
  json.created_at comment.created_at.strftime("%Y-%m-%d %H:%M")
end